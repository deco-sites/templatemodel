import type { LoaderFunction } from "$live/std/types.ts";
import getSupabaseClient from "$live/supabase.ts";

export type voidProps = {
  null?: string;
};
export type scrapProps = {
  logos: string;
  colors: string;
  banners: string;
  favicon?: string;
};

/**
 * @title Product list loader
 * @description Usefull for shelves and static galleries.
 */
const scrapLoader: LoaderFunction<voidProps, scrapProps> = async (
  _req,
  ctx,
) => {
  const loja = ctx.params.loja;
  const client = getSupabaseClient();

  const data =
    (await client.from("scrap").select().eq("domain", loja).single()).data;
  return {
    data,
  };
};

export default scrapLoader;
