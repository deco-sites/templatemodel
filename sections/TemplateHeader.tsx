import Header from "$store/sections/Header.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import { scrapProps } from "../functions/scrapData.ts";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { NavItem as Item } from "$store/components/header/NavItem.ts";

export interface Props {
  scrapData?: LoaderReturnType<scrapProps>;

  alerts: string[];
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: Item[];
}

export default function HeadComponent(props: Props) {
  const navItems = props.scrapData && props.scrapData.categories.length > 0
    ? props.scrapData.categories.map((category) => {
      return { label: category, href: "#", children: [] };
    })
    : [{ label: "Mais Vendidos", href: "#", children: [] }];

  const mergedProps = { ...props, navItems };

  // make Header receive logo / navColor / textColor / alertColor / textAlertColor
  return <Header {...mergedProps}></Header>;
}
