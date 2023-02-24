import HeadDeco from "$store/sections/Head.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import { scrapProps } from "../functions/scrapData.ts";

export interface Props {
  scrapData?: LoaderReturnType<scrapProps>;

  title?: string;
  description?: string;
  url: string;
  imageUrl?: string;
  faviconUrl?: string;
  styleUrls?: string[];
  themeColor?: string;
}

export const initialProps: Props = {
  title: "Fashion | 70% Off",
  description: "70% Off",
  url: "https://fashion.deco.page",
  imageUrl: "https://fashion.deco.page/android-chrome-384x384.png?v=1",
  faviconUrl: "https://fashion.deco.page/favicon-32x32.png?v=1",
  styleUrls: [],
  themeColor: "#221E1F",
};

export default function HeadComponent(props: Props) {
  const styleUrl = `/style.css?loja=${
    props.scrapData?.domain ?? ""
  }&created_at=${props.scrapData?.created_at ?? ""}`;
  const newProps = {
    ...props.scrapData,
    faviconUrl: props.scrapData?.favicon ?? props.faviconUrl ??
      props.scrapData?.logos[0] ?? initialProps.faviconUrl,
    styleUrls: styleUrl ? [styleUrl] : [],
  };
  const mergedProps = { ...initialProps, ...props, ...newProps };
  return <HeadDeco {...mergedProps}></HeadDeco>;
}
