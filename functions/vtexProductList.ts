import getSupabaseClient from "$live/supabase.ts";

import { toProduct } from "$live/std/commerce/vtex/transform.ts";

import type { Product } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";

import { defaultVTEXSettings, vtex } from "../clients/instances.ts";
import type { VTEXConfig } from "../sections/vtexconfig.global.tsx";
import type { Sort } from "$live/std/commerce/vtex/types.ts";

export interface Props {
  /** @description query to use on search */
  query: string;
  /** @description total number of items to display */
  count: number;
  //* @enumNames ["relevance", "greater discount", "arrivals", "name asc", "name desc", "most ordered", "price asc", "price desc"]
  /**
   * @description search sort parameter
   */
  sort?:
    | ""
    | "price:desc"
    | "price:asc"
    | "orders:desc"
    | "name:desc"
    | "name:asc"
    | "release:desc"
    | "discount:desc";
}

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const productListLoader: LoaderFunction<
  Props,
  Product[],
  LiveState<{ vtexconfig: VTEXConfig | undefined }>
> = async (
  _req,
  ctx,
  props,
) => {
  const client = getSupabaseClient();
  const loja = ctx.params.loja;
  const scrapData =
    (await client.from("scrap").select().eq("domain", loja).single()).data;

  const scrapDataVTEXConfig = scrapData?.vtexconfig
    ? JSON.parse(scrapData.vtexconfig)
    : {};

  const vtexConfig = { ...defaultVTEXSettings, ...scrapDataVTEXConfig };

  const count = props.count ?? 12;
  const query = props.query || "";
  const sort: Sort = props.sort || "";

  // search products on VTEX. Feel free to change any of these parameters
  const { products: vtexProducts } = await vtex.search.products({
    query,
    page: 0,
    count,
    sort,
    ...vtexConfig,
  });

  // Transform VTEX product format into schema.org's compatible format
  // If a property is missing from the final `products` array you can add
  // it in here
  const products = vtexProducts.map((p) => toProduct(p, p.items[0], 0));

  return {
    data: products,
  };
};

export default productListLoader;
