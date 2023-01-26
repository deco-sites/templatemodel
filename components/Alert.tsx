import { useId } from "preact/hooks";
import Icon from "$components/ui/Icon.tsx";

import Slider from "../islands/Slider.tsx";
import { isDarkLuminance } from "../utils/color.ts";

const messages = [
  "Parcelamento em até 10x no cartão",
  "Devolução Garantida",
  "Entrega para todo Brasil",
  "Pagamento por Pix",
];

export interface Props {
  alerts: string[];
  alertColor: number[];
}

function Alert({ alerts = messages, alertColor }: Props) {
  const id = useId();
  const color = alertColor
    ? "bg-[rgba(" + alertColor.join(",") + ")]"
    : "bg-[#353535]";
  const textColor = alertColor &&
  isDarkLuminance(alertColor)
    ? "text-white"
    : "text-black";
  return (
    <>
      <section
        id={id}
        class={"hidden md:flex flex-row w-full justify-between h-10 " + color}
      >
        <div class={"flex gap-2 items-center text-sm m-auto " + textColor}>
          <div class="w-[500px] overflow-x-hidden">
            <div
              data-slider-content
              class={`w-[${
                alerts.length * 100
              }%] transition flex justify-center`}
            >
              {alerts.map((alert) => (
                <span class="w-[500px] text-center uppercase text-xs">
                  {alert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Slider id={id} items={alerts.length} delay={4000} />
    </>
  );
}

export default Alert;
