export type ButtonColorTheme = 'white' | 'black' | 'blue' | 'red';

export type ButtonTypedColorTheme = ButtonColorTheme | `outlined-${ButtonColorTheme}`;

export type ButtonBgColorStatus = 'default' | 'hover' | 'press';

export type ButtonColorThemeWithStatus = `${ButtonTypedColorTheme}-${ButtonBgColorStatus}`;

export type ButtonRadiusTheme = 'md' | 'lg';
export type ButtonSizeTheme = 'sm' | 'md' | 'lg';
