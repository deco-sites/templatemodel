import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 482,
  site: "templatemodel",
  domains: ["deco-sites-templatemodel.deno.dev", "your.deco.site"],
});
