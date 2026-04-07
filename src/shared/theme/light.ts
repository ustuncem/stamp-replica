import { borderRadius } from "@/shared/theme/atoms/borderRadius";
import { colors } from "@/shared/theme/atoms/colors";
import { fontSizes } from "@/shared/theme/atoms/fontSizes";
import { spacing } from "@/shared/theme/atoms/spacing";
import {
	alpha,
	darker,
	emphasize,
	lighter,
} from "@/shared/theme/utils/color-utils";

const primary = colors["space-indigo"];
const secondary = colors["lavender-gray"];
const tertiary = colors.platinium;
const error = colors["burnt-sienna"];
const neutral = colors.neutral;

const lightMaterialColors = {
	primary: primary[500],
	onPrimary: colors.white,
	primaryContainer: primary[100],
	onPrimaryContainer: primary[800],
	secondary: secondary[500],
	onSecondary: colors.white,
	secondaryContainer: secondary[100],
	onSecondaryContainer: secondary[800],
	tertiary: tertiary[500],
	onTertiary: colors.white,
	tertiaryContainer: tertiary[100],
	onTertiaryContainer: tertiary[800],
	error: error[500],
	onError: colors.white,
	errorContainer: error[100],
	onErrorContainer: error[800],
	background: neutral[50],
	onBackground: neutral[900],
	surface: neutral[50],
	onSurface: neutral[900],
	surfaceVariant: neutral[200],
	onSurfaceVariant: neutral[700],
	outline: neutral[500],
	outlineVariant: neutral[300],
	shadow: colors.black,
	scrim: colors.black,
	inverseSurface: neutral[800],
	inverseOnSurface: neutral[100],
	inversePrimary: primary[200],
	surfaceDim: neutral[200],
	surfaceBright: neutral[50],
	surfaceContainerLowest: colors.white,
	surfaceContainerLow: neutral[100],
	surfaceContainer: neutral[200],
	surfaceContainerHigh: neutral[300],
	surfaceContainerHighest: neutral[400],
	surfaceTint: primary[500],
} as const;

export const lightTheme = {
	colors: { ...lightMaterialColors },
	spacing: { ...spacing },
	fontSizes: { ...fontSizes },
	borderRadius: { ...borderRadius },
	utils: { lighter, darker, emphasize, alpha },
} as const;
