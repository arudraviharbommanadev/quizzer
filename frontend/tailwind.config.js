import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 15px 35px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        surface: '#f8fafc',
        surfaceDark: '#e2e8f0',
      },
    },
  },
  plugins: [forms],
};
