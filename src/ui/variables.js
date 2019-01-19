/**
 * Spacing
 */
export const spacingPico = '0.25rem'; /* 4px */
export const spacingTiny = '0.5rem'; /* 8px */
export const spacingSmall = '0.75rem'; /* 12px */
export const spacingBase = '1rem'; /* 16px */
export const spacingLarge = '1.5rem'; /* 24px */
export const spacingXlarge = '2rem'; /* 32px */
export const spacingXxlarge = '3rem'; /* 48px */
export const spacingXxxlarge = '4rem'; /* 64px */

/**
 * Typography
 */
export const fontFamily = "'Open Sans', sans-serif";

export const withUnit = value => `${value}rem`;

export const base = 1;
export const ratio = 1.25;

export const ms0 = 1;
export const ms1 = ratio; /* 1.25   */
export const ms2 = ratio * ms1; /* 1.5625  */
export const ms3 = ratio * ms2; /* 1.953125 */
export const ms4 = ratio * ms3; /* 2.44140625 */
export const ms5 = ratio * ms4; /* 3.0517578125 */
export const ms6 = ratio * ms5; /* 3.8146972656 */
export const ms7 = ratio * ms6; /* 4.768371582 */

export const msSmall = ms0 / ratio; /* 0.8 */
/**
 * Brand palette
 */
export const colorFrenchBlue = '#1070c0';
export const colorYaleBlue = '#194f90';

export const colorSlateBlue = '#6461d3';
export const colorMinsk = '#33308e';

export const colorLilyWhite = '#e6f7ff';
export const colorPattensBlue = '#deeffc';
export const colorLinkWater = '#d5e7f6';

export const colorTradewind = '#66baab';
export const colorParadiso = '#31817c';

export const colorSupernova = '#fcb723';
export const colorYellowSea = '#ebaa1d';

export const colorLust = '#ed1b2e';
export const colorLava = '#c60f1f';

export const colorSweetPink = '#f18e84';
export const colorPigletPink = '#d97263';

export const colorWhite = '#ffffff';
export const colorVeryLightGrey = '#f5f5f5';
export const colorLightGrey = '#e7e7e7';
export const colorMediumGrey = '#b3b3b3';
export const colorGrey = '#666666';
export const colorDarkGrey = '#333333';
export const colorBlack = '#000000';

/**
 * Text colors
 */
export const textColor = '#222';
export const textColorMedium = '#575757';
export const textColorLight = '#fff';
export const textColorDisabled = '#a8a8a8';

/**
 * Link colors
 */
export const linkColor = colorFrenchBlue;
export const linkColorHover = colorYaleBlue;
export const linkColorAlt = colorPattensBlue; /* Used on dark background */
export const focusColor = colorLinkWater;
export const focusBackground = colorLilyWhite;
