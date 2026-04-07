import {
	getLuminance,
	darken as polishedDarken,
	lighten as polishedLighten,
	transparentize,
} from "polished";

export const levels = {
	1: 0.04,
	2: 0.08,
	3: 0.12,
	4: 0.16,
	5: 0.24,
} as const;

type ColorValue = string;
export type ColorLevel = keyof typeof levels;

const getLevelAmount = (level: ColorLevel) => levels[level];

export const lighter = (color: ColorValue, level: ColorLevel = 3) =>
	polishedLighten(getLevelAmount(level), color);

export const darker = (color: ColorValue, level: ColorLevel = 3) =>
	polishedDarken(getLevelAmount(level), color);

export const emphasize = (color: ColorValue, level: ColorLevel = 3) =>
	getLuminance(color) > 0.179 ? darker(color, level) : lighter(color, level);

export const alpha = (color: ColorValue, level: ColorLevel = 3) =>
	transparentize(getLevelAmount(level), color);
