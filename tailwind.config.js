module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        bodyColor: '#212428',
        lightText: '#c4cfde',
        boxBg: '#23272b',
        designColor: '#ff014f',
        designColor: '#ff014f',
        bodyColor: '#121212',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      screens: {
        'custom-range': { min: '770px', max: '1150px' }, // Define the custom range
      },
    },
  },
  plugins: [],
};
