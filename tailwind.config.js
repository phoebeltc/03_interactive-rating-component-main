/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gradient-black': '#232A34',
        'gradient-blue': '#181E27',
        'dark-blue':'hsl(213, 19%, 18%)',
        'orange': 'hsl(25, 97%, 53%)',
        'light-grey':'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)'
      },
      fontFamily: {
        'overpass':['Overpass', 'sans-serif']
      },
  },
  plugins: [],
}
}
