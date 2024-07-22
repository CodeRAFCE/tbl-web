import { Components, Theme } from "@mui/material";

export default function CssBaseline(theme: Theme): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
          background: theme.palette.secondary.main,
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        a: {
          textDecoration: "none",
          color: theme.palette.common.white,
        },
        ".scroll-container": {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        },
        ".scroll-inner-container": {
          width: "calc(100% + 8px)" /* Reserve space for the scrollbar */,
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "thin" /* Firefox */,
          scrollbarColor: "rgba(0, 0, 0, 0.5) transparent" /* Firefox */,
          transition: "opacity 0.3s ease" /* Fade effect */,
          opacity: 0 /* Initially hidden */,
        },
        ".scroll-inner-container::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        ".scroll-inner-container::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "4px",
        },
        ".scroll-inner-container::-webkit-scrollbar-track": {
          background: "transparent",
        },
        ".scroll-inner-container.visible": {
          opacity: 1 /* Show scrollbar with fade effect */,
        },
      },
    },
  };
}