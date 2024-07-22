import {Theme} from "@mui/material";
import CssBaseline from "./CssBaseline";

export default function ComponentsOverrides(theme: Theme) {
	return Object.assign(CssBaseline(theme));
}