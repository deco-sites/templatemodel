import { Handlers } from "$fresh/server.ts";
import getSupabaseClient from "$live/supabase.ts";

const isLightLuminance = (color: number[]) => {
  const rs = color[0] / 255;
  const gs = color[1] / 255;
  const bs = color[2] / 255;
  const calcLuminance = (x: number) =>
    x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  const r = calcLuminance(rs);
  const g = calcLuminance(gs);
  const b = calcLuminance(bs);
  const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return l >= 0.5;
};

const convertColor = (color: number[]) =>
  color ? "rgba(" + color.join(",") + ")" : "white";

const convertTextColor = (color: number[]) =>
  color &&
    (isLightLuminance(color))
    ? "black"
    : "white";

export const handler: Handlers = {
  GET: async (req, _) => {
    const urlSearchParams = new URLSearchParams(new URL(req.url).search);
    const loja = urlSearchParams.get("loja");
    const client = getSupabaseClient();

    const scrapData =
      (await client.from("scrap").select().eq("domain", loja).single()).data;

    const logos = JSON.parse(scrapData?.logos) ?? [];

    // 0 => ALERT_BG_COLOR, 1 => NAV_COLOR_BG_COLOR
    const colors = scrapData && scrapData?.colors.length > 0
      ? JSON.parse(scrapData?.colors)
      : [[53, 53, 53, 1], [255, 255, 255, 1]];

    const navColor = convertColor(colors[1]);
    const navTextColor = convertTextColor(colors[1]);
    const alertColor = convertColor(colors[0]);
    const alertTextColor = convertTextColor(colors[0]);

    const style = `header > section {
        background-color: ${alertColor} !important;
      }
      header > section > div {
        color: ${alertTextColor} !important;
      }
      header > div:nth-child(4) {
        background-color: ${navColor} !important;
        color: ${navTextColor} !important;
      }\n
      ${
      logos[0]
        ? `header > div:nth-child(4) > a {
        background-image: url(${logos[0]}) !important;
        background-repeat: no-repeat;
        background-size: contain;
        background-origin: content-box;
      }`
        : ""
    }`;
    return new Response(style, { headers: { "content-type": "text/css" } });
  },
};
