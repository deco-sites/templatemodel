import type { h } from "preact";
import Alert from "$components/Alert.tsx";
import Icon from "$components/ui/Icon.tsx";
import type { LoaderReturnType } from "$live/std/types.ts";
import { scrapProps } from "../functions/scrapData.ts";

import Minicart from "../islands/Minicart.tsx";

function NavItem({
  href,
  children,
  class: className,
}: h.JSX.HTMLAttributes<HTMLLIElement>) {
  return (
    <a
      href={href ?? `/search?ft=${children}`}
      class={`flex items-center text-[15px] px-8 lg:px-6`}
    >
      <span class="hover:border-black border-solid border-b border-white">
        {children}
      </span>
    </a>
  );
}

function StoreLogo(props: { logos: Array<string> }) {
  for (const logo of props.logos) {
    if (logo.includes("<svg")) {
      return <div dangerouslySetInnerHTML={{ __html: logo }} />;
    } else {
      return <img src={logo} />;
    }
  }
  return <span>SITE</span>;
}

function Navbar(props: { logos: Array<string>; navColor: [255, 255, 255, 1] }) {
  const color = props.navColor
    ? "bg-[rgba(" + props.navColor.join(",") + ")]"
    : "bg-white";
  //const textColor = props.navColor ? "text-[rgba(" + props.navColor.map((x) => 255 ^ x).join(",") + ")]" : "text-black";
  const textColor = props.navColor &&
      (props.navColor.reduce((partialSum, a) => partialSum + a, 0) / 3 < 128)
    ? "text-white"
    : "text-black";
  return (
    <div class={textColor}>
      <section
        class={"md:hidden flex p-2 justify-between items-center px-12 " + color}
      >
        <div class="w-24">
          <button aria-label="open menu" class="p-2">
            <Icon name="Bars3" className="w-8 h-8" />
          </button>
        </div>
        <a href="/" class="block min-w-[10rem] max-w-[12rem] p-3">
          <StoreLogo logos={props.logos} />
        </a>
        <div class="flex mt-2 w-24 justify-end">
          <a href="#" class="p-1" aria-label="search">
            <Icon name="MagnifyingGlass" className="w-8 h-8" />
          </a>
          <a href="#" class="p-1 hidden" aria-label="my account">
            <Icon name="User" className="w-8 h-8" />
          </a>
          <div class="p-1">
            <Minicart />
          </div>
        </div>
      </section>
      <section
        class={"hidden md:flex flex-row h-[80px] items-center md:border-b border-[#d3d5db] " +
          color}
      >
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3 ml-4">
          <StoreLogo logos={props.logos} />
        </a>
        <div class="flex justify-center md:justify-between pl-12 h-14">
          <NavItem href="/farm">Marcas</NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=feminino">
            Feminino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=masculino">
            Masculino
          </NavItem>
          <NavItem href="/search?trade-policy=1&filter.departamento=infantil">
            Infantil
          </NavItem>
        </div>
        <div class="flex-1 flex items-center justify-end md:mr-8">
          <a href="#" class="mr-6">
            <Icon name="MagnifyingGlass" className="w-8 h-8" />
          </a>
          <a href="#" class="mr-6">
            <Icon name="User" className="w-8 h-8" />
          </a>
          <Minicart />
        </div>
      </section>
    </div>
  );
}

export interface Props {
  alerts: string[];
  scrapData?: LoaderReturnType<scrapProps>;
}

function Header({ alerts, scrapData }: Props) {
  const logos = JSON.parse(scrapData?.logos || "[]");
  const colors = JSON.parse(
    scrapData?.colors || "[[255,255,255,1], [255,255,255,1]]",
  );
  return (
    <header>
      <Alert alerts={alerts} alertColor={colors[0]} />
      <Navbar logos={logos} navColor={colors[1]} />
    </header>
  );
}

export default Header;
