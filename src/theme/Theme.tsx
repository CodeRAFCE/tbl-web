import {ReactNode, useMemo} from "react";
import type {ThemeOptions} from "@mui/material/styles";
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
	StyledEngineProvider,
} from "@mui/material/styles";

import {CssBaseline} from "@mui/material";

import palette from "./palette";
import breakpoints from "./breakpoints";
import ComponentsOverrides from "./overrides";

interface IThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider = ({children}: IThemeProviderProps) => {
	const themeOptions: ThemeOptions = useMemo(
		() => ({
			palette: palette.light,
			breakpoints,
			shape: {borderRadius: 8},
		}),
		[]
	);

	const theme = createTheme(themeOptions);
	theme.components = ComponentsOverrides(theme);

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeProvider;