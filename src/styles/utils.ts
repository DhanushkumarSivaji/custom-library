import breakpoints from './theme/breakpoints';

// make font size responsive
interface responsiveFontType {
  sm?: object;
  lg?: object;
}
export function responsiveFontSizes({ sm, lg }: responsiveFontType) {
  return {
    [`@media (max-width: ${breakpoints.values.lg}px)`]: lg,
    [`@media (max-width: ${breakpoints.values.sm}px)`]: sm
  };
}
