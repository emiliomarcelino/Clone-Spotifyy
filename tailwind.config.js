/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/css/*index.html' // Se os arquivos HTML estiverem na pasta 'src', adicione isso também
    ,'./styles.css'    // Caso você tenha o 'styles.css' que contém as classes do Tailwind
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
        '500': '590px',
        '400': '400px',
        '900': '900px',
        '1100': '1100px'
      },
      colors:{
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'icon-color': '#191f2b',
        'txt-col': '#797d8c'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/imagens/bursts.svg')",
        'spotify-theme-mobile': "url('/imagens/bursts-mobile.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem',
        'moblie-txt': '14px'
      },
    },
  },
  plugins: [],
}

