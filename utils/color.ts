export const isLightLuminance = (color: number[]) => {
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
  
  export const isDarkLuminance = (color: number[]) => {
    return !isLightLuminance(color);
  };
  