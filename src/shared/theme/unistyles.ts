import { StyleSheet } from "react-native-unistyles";

import { breakpoints } from "./atoms/breakpoints";
import { darkTheme } from "./dark";
import { lightTheme } from "./light";

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
	light: typeof lightTheme;
	dark: typeof darkTheme;
};

declare module "react-native-unistyles" {
	export interface UnistylesBreakpoints extends AppBreakpoints {}
	export interface UnistylesThemes extends AppThemes {}
}

const settings = {
	adaptiveThemes: true,
};

StyleSheet.configure({
	themes: { light: lightTheme, dark: darkTheme },
	breakpoints,
	settings,
});
