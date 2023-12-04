export type ButtonColorTheme = 'white' | 'black' | 'blue' | 'red';

export type ButtonBgColorStatus = 'default' | 'hover' | 'press';

export type ButtonColorThemeWithStatus =
  `${ButtonColorTheme}-${ButtonBgColorStatus}`;

export type ButtonRadiusTheme = 'md' | 'lg';
export type ButtonSizeTheme = 'sm' | 'md' | 'lg';
