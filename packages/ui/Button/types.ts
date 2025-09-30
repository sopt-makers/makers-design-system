export type ButtonVariant = 'fill' | 'outlined';

export type ButtonColorTheme = 'white' | 'black' | 'blue' | 'red';

export type ButtonBgColorStatus = 'default' | 'hover' | 'press';

export type ButtonColorThemeWithStatus = `${ButtonVariant}-${ButtonIntent}-${ButtonBgColorStatus}`;

export type ButtonRadiusTheme = 'md' | 'lg';
export type ButtonSizeTheme = 'sm' | 'md' | 'lg';

export type ButtonIntent = 'primary' | 'secondary' | 'success' | 'danger';
export type ButtonShape = 'rect' | 'pill';
