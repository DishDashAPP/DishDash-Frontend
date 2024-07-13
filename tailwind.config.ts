import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}'],
  theme: {
    colors: {
      primary: '#FF9800',
      secondary: '#FCE5C9',
      transparent: 'transparent',
      white: {
        DEFAULT: '#FFFFFF',
        background: '#F5F5F5',
      },
      gray: {
        primary: '#19191B',
        secondary: '#424242',
        tertiary: '#757575',
        line: '#C2C2C2',
        border: '#D7D5D5',
        card_border: '#E0E0E0',
        plate_border: '#E8E8E9',
        disabled: '#B4B4B4',
        plate: '#1E1E1E',
      },
      red: {
        DEFAULT: '#E61F10',
        secondary: '#FFCECE',
        tertiary: '#FFEAEA',
      },
      yellow: {
        DEFAULT: '#FFDC62',
        secondary: '#FFF7D9',
        plate: '#FFBA37',
      },
      green: {
        DEFAULT: '#34A862',
        secondary: '#EDFFF7',
        plate: '#5CC395',
      },
      blue: {
        DEFAULT: '#1A73E8',
        dark: '#002A6E',
      },
      purple: {
        plate: '#6C58E7',
      },
      brand: {
        DEFAULT: '#FFC453',
        dark: '#DA9D29',
        gray: '#D2C6B2',
      },
    },
    boxShadow: {
      DEFAULT: '7px 7px 40px 0px rgba(77, 77, 77, 0.10);',
      small: '0px 3px 8px rgba(0, 0, 0, 0.15)',
      none: 'none',
    },
    extend: {
      backgroundImage: {
        'linear-gradient':
            'linear-gradient(215deg, rgba(255, 255, 255, 0.15) 12.06%, rgba(255, 255, 255, 0.00) 95.16%)',
      },
      fontSize: {
        8: ['0.5rem', { lineHeight: '.5rem' }],
        10: ['0.625rem', { lineHeight: '1rem' }],
      },
      gridTemplateColumns: {
        menu: 'repeat(3, 72px)',
      },
      letterSpacing: { px: '-1.44px' },
    },
  },
  plugins: [],
}
export default config
