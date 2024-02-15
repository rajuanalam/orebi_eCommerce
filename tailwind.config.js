/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color
      colors: {
       'primaryColor': "#262626",
        'secondaryColor': "#767676",
        'borderColor': "#979797",
        'borderTwo' : "#F0F0F0",
        'categoryBgColor': "#F5F5F3",
        'textColor':"#6D6D6D",
        'placeholderColor' : "#C4C4C4",
        'catagoryMenuBorder' : "#2D2D2D",
        'catagoryMenuText' :"rgba(255, 255, 255, 0.70)",
        'userHoverBg':"#2B2B2B",
        'borderBotColor' : "#F0F0F0"

      },
      // Color
      // Background Image
      backgroundImage: {
        
        
       },
     // Background Image
      // Font Family
      fontFamily: {
        'dm' :["DM Sans"],
        
      },
      // Font Family

      // Container width
      maxWidth: {
        "container": "1600px",
      },
     // Container width

    },
  },
  plugins: [],
}

