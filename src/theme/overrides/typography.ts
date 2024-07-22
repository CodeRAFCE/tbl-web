import {
  CSSProperties,
  Typography,
} from "@mui/material/styles/createTypography";
import { pxToRem, responsiveFontSizes } from "../../shared/utils/getFontValues";

const FONT_PRIMARY = "Anglecia Pro Display, sans-serif";

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: {
    fontWeight: 700,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 28, md: 48, lg: 60 }),
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(28),
    ...responsiveFontSizes({ sm: 20, md: 21, lg: 28 }),
  },

  h3: {} as CSSProperties,
  h4: {} as CSSProperties,
  h5: {} as CSSProperties,
  h6: {} as CSSProperties,
  subtitle1: {} as CSSProperties,
  subtitle2: {} as CSSProperties,
  body1: {} as CSSProperties,
  body2: {} as CSSProperties,
  caption: {} as CSSProperties,
  button: {} as CSSProperties,
  overline: {} as CSSProperties,
  fontSize: 0,
  fontWeightLight: undefined,
  htmlFontSize: 0,
  pxToRem: function (px: number): string {
    console.log(px);
    throw new Error("Function not implemented.");
  },
};

export default typography;