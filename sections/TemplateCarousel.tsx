import Carousel, { Image } from "./Carousel.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import { scrapProps } from "../functions/scrapData.ts";

// Intersection kind is not disponible on JsonSchema
export interface Props {
  scrapData?: LoaderReturnType<scrapProps>;
  images?: Image[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

export default function TemplateBanner(
  { scrapData, ...bannerProps }: Props,
) {
  let mergedProps = { ...bannerProps };
  if (scrapData && scrapData.banners.length > 0) {
    const images = [{
      mobile: scrapData.banners[0],
      desktop: scrapData.banners[0],
      href: "#",
      alt: "Your banner here!",
    }];
    mergedProps = { ...mergedProps, images };
  }
  return <Carousel {...mergedProps}></Carousel>;
}
