import { create } from '@storybook/theming/create'


export default create({
    base: 'light',

    colorSecondary: '#1144AA',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderRadius: 8,

    // Typography
    fontBase: '"Bw Modelica"',

    // Text colors
    textColor: 'black',
    selectedColor: '#333',

    // Toolbar default and active colors
    barTextColor: '#333',
    barSelectedColor: 'black',
    barBg: '#ffff00',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 8,

    brandTitle: 'Event-U',
    brandUrl: 'https://hola.com',
    brandImage: '/logo/logo-black.png',
});