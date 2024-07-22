import { PaletteMode, alpha } from "@mui/material";

declare module "@mui/material/styles" {
  interface Color {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;

    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

export function createGradient(
  color: string,
  direction: string = "to bottom",
  src: string = ""
) {
  return `linear-gradient(${direction}, ${color}, url(${src}))`;
}

const PRIMARY = {
  main: "#379777",
};

const SECONDARY = {
  light: "#F5F7F8",
  //main: "#45474B",
  main: "#F5F7F8",
};

const INFO = {
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
};

const SUCCESS = {
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
};

const WARNING = {
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
};

const ERROR = {
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const GRADIENTS = {
  primary: createGradient(
    "rgba(71, 46, 21, 0.40) 11.07%, rgba(239, 163, 72, 0.10) 88.93%",
    "141deg"
  ),
  secondary: createGradient(
    "rgba(255, 255, 255, 0.40) 21.16%, rgba(255, 255, 255, 0.10) 69.73%",
    "96deg"
  ),
  info: createGradient(`${INFO.light}, ${INFO.main}`),
  success: createGradient(`${SUCCESS.light}, ${SUCCESS.main}`),
  warning: createGradient(`${WARNING.light}, ${WARNING.main}`),
  error: createGradient(`${ERROR.light}, ${ERROR.main}`),
};

const COMMON = {
  common: { black: "#000", white: "#F5F7F8" },
  primary: { ...PRIMARY, contrastText: "#F5F7F8" },
  secondary: { ...SECONDARY, contrastText: "#F5F7F8" },
  info: { ...INFO, contrastText: "#F5F7F8" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#F5F7F8" },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light" as PaletteMode,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
};

export default palette;