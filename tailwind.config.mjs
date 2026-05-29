import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue':  'var(--color-dark-blue)',
        'brand-blue': 'var(--color-blue)',
        'azure':      'var(--color-azure)',
        'cyan':       'var(--color-cyan)',
        'vivid-cyan': 'var(--color-vivid-cyan)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins:    ['Poppins', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':     '#374151',
            '--tw-prose-headings': '#101f41',
            '--tw-prose-links':    '#0a969e',
            '--tw-prose-bold':     '#101f41',
            '--tw-prose-bullets':  '#43acec',
            '--tw-prose-hr':       '#e5e7eb',
            '--tw-prose-quotes':   '#101f41',
            fontFamily: 'Poppins, sans-serif',
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: 'Montserrat, sans-serif',
            },
            a: {
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
