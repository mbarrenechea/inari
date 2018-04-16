// Customize your breakpoints here
export const BREAKPOINTS = {
  small: 768, // 48rem
  medium: 1024, // 64rem
  large: 1280 // 80rem
};

export const SIZES = {
  phone: BREAKPOINTS.small - 10,
  tablet: BREAKPOINTS.medium - 10,
  desktop: BREAKPOINTS.large - 10
};

export default { BREAKPOINTS, SIZES };
