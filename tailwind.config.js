module.exports = {
  purge:  {
    enabled: false,
    content: [
      './pages/**/*.vue',
      './**/*.html',
      './*.html',
    ],
  },
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: theme => ({
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',

      }),
      
      colors: {

        
        accent1: {
          '100': '#fdeaea',
          '200': '#ffdcd2',
          '300': '#FFBDA7',
          '400': '#ff7f52',
          '500': '#FF6631',
          '600': '#ff5216',
        },
        accent2: {
          '100': '#ffebeb',
          '200': '#ffcccc',
          '300': '#ff9f9f',
          '400': '#ff5757',
          '500': '#fc2222',
          '600': '#bf0000',
        },
        accent3: {
          '100': '#f9f9f9',
          '200': '#f5f5f5',
          '300': '#d1d1d1',
          '400': '#828282',
          '500': '#363636',
          '600': '#171717',
        },
        
      },

      zIndex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '110': 110,
        '120': 120,
        '130': 130,
        '140': 140,
        '150': 150,
        'auto': 'auto',
      },

      display: [
        "group-hover",
      ]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
