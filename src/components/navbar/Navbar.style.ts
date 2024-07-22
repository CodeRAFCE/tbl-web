import { styled } from "@mui/material/styles";

export const NavbarWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  display: "flex",
  paddingInline: "1rem",
  paddingBlock: "1.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const NavbarLogo = styled("img")(() => ({
  width: "50px",
  height: "auto",
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}));

export const NavbarTitle = styled("h1")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginInlineStart: "1rem",
  fontWeight: "bold",
}));