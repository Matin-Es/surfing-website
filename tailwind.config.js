module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        customBg: "url('/img/bg.png')",
       
       
      },
      spacing: {
      
        'inputWidth': '37rem',
      },
      fontFamily: {
        // Playfair: ["serif"],
        Playfair: ["Playfair Display", "serif"],
        Poppins:["Poppins","sans-serif"],
        PlayfairRegular:["Playfair Display"," serif"],
        PlayfairBold:["Playfair Display"," serif"],
        LeagueSpartan:["Spartan","sans-serif"]
      },
      letterSpacing: {
        headerLetterSpacing: "0.4375em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
