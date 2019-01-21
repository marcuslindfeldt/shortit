/**
 * Spacing
 */
export const spacingPico = '0.25rem'; /* 4px */
export const spacingTiny = '0.5rem'; /* 8px */
export const spacingSmall = '0.75rem'; /* 12px */
export const spacingBase = '1rem'; /* 16px */
export const spacingLarge = '1.5rem'; /* 24px */
export const spacingXL = '2rem'; /* 32px */
export const spacingXXL = '3rem'; /* 48px */

/**
 * Typography
 */

const base = 1;
const ratio = 1.25;

/* Modular scale */
export const ms = size => {
  if (size < 0) {
    // Ex. size = -2 => 1 / ratio^2
    return `${base / ratio ** Math.abs(size)}rem`;
  }

  return `${base * ratio ** Math.abs(size)}rem`;
};

/**
 * Brand palette
 */
export const colorPrimary = '#ffda38';

export const colorWhite = '#ffffff';
export const colorGrey = '#666666';
export const colorDarkGrey = '#333333';
export const colorBlack = '#000000';
