import { colors } from "@/shared/theme/atoms/colors";
import { lightTheme } from "./light";

const primary = colors["space-indigo"];
const secondary = colors["lavender-gray"];
const tertiary = colors.platinium;
const error = colors["burnt-sienna"];
const neutral = colors.neutral;

const darkColors = {
	primary: primary[200],
	onPrimary: primary[800],
	primaryContainer: primary[700],
	onPrimaryContainer: primary[100],
	secondary: secondary[200],
	onSecondary: secondary[800],
	secondaryContainer: secondary[700],
	onSecondaryContainer: secondary[100],
	tertiary: tertiary[200],
	onTertiary: tertiary[800],
	tertiaryContainer: tertiary[700],
	onTertiaryContainer: tertiary[100],
	error: error[200],
	onError: error[800],
	errorContainer: error[700],
	onErrorContainer: error[100],
	background: neutral[900],
	onBackground: neutral[100],
	surface: neutral[900],
	onSurface: neutral[100],
	surfaceVariant: neutral[700],
	onSurfaceVariant: neutral[300],
	outline: neutral[400],
	outlineVariant: neutral[700],
	shadow: colors.black,
	scrim: colors.black,
	inverseSurface: neutral[100],
	inverseOnSurface: neutral[800],
	inversePrimary: primary[500],
	surfaceDim: neutral[950],
	surfaceBright: neutral[700],
	surfaceContainerLowest: colors.black,
	surfaceContainerLow: neutral[900],
	surfaceContainer: neutral[800],
	surfaceContainerHigh: neutral[700],
	surfaceContainerHighest: neutral[600],
	surfaceTint: primary[200],
} as const;

export const darkTheme = {
	...lightTheme,
	colors: {
		...lightTheme.colors,
		...darkColors,
	},
} as const;
