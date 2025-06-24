module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        'brand-dark': '#0B101B', // ✅ Flat key, NOT nested inside 'background'

        primary: {
          100: '#E6F0FA',
          200: '#C0D4F0',
          300: '#99B8E5',
          400: '#739CDB',
          500: '#3A4E93',
          600: '#2F3E77',
          700: '#242E5B',
          800: '#1A1F3F',
          900: '#0F0F23',
          light: '#5994CE',
          DEFAULT: '#3A4E93',
          dark: '#5C58BB',
        },

        accent: {
          pink: '#B957CE',
        },

        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};
