/** @type {import('tailwindcss').Config} */
// import ellipse from './src/assets/Ellipse.png'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'guild-bg': "url('assets/Ellipse.png')",
        // 'guild-bg': "url('/home/user/Tranxactrust_react/src/assets/Ellipse.png')",


      }),
    },
  },
  plugins: [],
}

