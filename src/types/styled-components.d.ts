import theme from `styles/theme`;

// type inference
type Theme = typeof theme;

declare module 'styles-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
