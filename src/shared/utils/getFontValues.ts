type TValueProps = number;
type TResponsiveFontSizes = {
  sm: number;
  md: number;
  lg: number;
};

export function remToPx(value: TValueProps) {
  return Math.round(value * 16);
}

export function pxToRem(value: TValueProps) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: TResponsiveFontSizes) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}