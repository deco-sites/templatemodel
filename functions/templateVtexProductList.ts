import getSupabaseClient from "$live/supabase.ts";
import vtexProductListLoader, {
  Props,
} from "$store/functions/vtexProductList.ts";

import type { Product } from "$live/std/commerce/types.ts";
import type { LoaderFunction } from "$live/std/types.ts";
import type { LiveState } from "$live/types.ts";

import { defaultVTEXSettings } from "$store/clients/instances.ts";
import type { VTEXConfig } from "$store/sections/vtexconfig.global.tsx";

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

  const vtexconfig = { ...defaultVTEXSettings, ...scrapDataVTEXConfig };
  ctx.state.global = { vtexconfig };
  return vtexProductListLoader(_req, ctx, props);
};

export default productListLoader;
