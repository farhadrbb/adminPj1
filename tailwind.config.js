module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:{
          DEFAULT:'#1E1E1E',
          50:'#131622',
          100:'#1F2330',
          150:'#131722',
          200:'#0C0E15',
          250:'#40455C',
          300:"#1F1F1F"
        },
        red:{
          DEFAULT:'#AD2102',
          50:'#D4380D',
          100:'#630803',
          150:'#820014',
          200:'#0F0100'
        },
        cyan:{
          DEFAULT:'#006D75',
          50:'#08979C',
          100:'#006D75',
          200:'#17b8be'
        },
        blue:{
          DEFAULT:'#2053B9',
          50:'#1890FF',
        },
        green:{
          DEFAULT:'#33B73C',
          50:'#1E350D',
          100:'#1D6503',
          150:'#081100'
        },
      }
    },
  },
  plugins: [],
}