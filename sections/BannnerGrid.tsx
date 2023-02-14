import Image from "$live/std/ui/components/Image.tsx";
import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Banner {
  srcMobile: LiveImage;
  srcDesktop?: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title?: string;
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  itemsPerLine: {
    mobile?: number;
    desktop?: number;
  };
  banners: Banner[];
}

export default function BannnerGrid({
  title,
  itemsPerLine,
  banners = [],
}: Props) {
  return (
    <section class="max-w-[1400px] w-full px-4 md:px-0 mx-auto">
      {title &&
        (
          <div class="py-6 md:py-0 md:pb-[40px] flex items-center mt-6">
            <h2 class={"text-lg leading-5 font-semibold uppercase "}>
              {title}
            </h2>

            <div class="bg-[#e5e5ea] h-[1px] w-full ml-4"></div>
          </div>
        )}
      <div
        class={`grid gap-4 md:gap-6 grid-cols-${
          itemsPerLine && itemsPerLine.mobile ? itemsPerLine.mobile : "2"
        } md:grid-cols-${
          itemsPerLine && itemsPerLine.desktop
            ? itemsPerLine.desktop
            : banners.length
        }`}
      >
        {banners.map(({ href, srcMobile, srcDesktop, alt }) => (
          <a href={href}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={srcMobile}
              />
              <source
                media="(min-width: 768px)"
                srcset={srcDesktop ? srcDesktop : srcMobile}
              />
              <Image
                class="w-full"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={srcMobile}
                alt={alt}
              />
            </picture>
          </a>
        ))}
      </div>
    </section>
  );
}
