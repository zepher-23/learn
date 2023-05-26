import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createTheme, ThemeProvider,responsiveFontSizes, styled } from '@mui/material/styles';
import lightBlue from "@mui/material/colors/lightBlue";
import './assets/styles/fonts.css'



const theme = createTheme({
  palette: {
    mode: 'light',
    
    primary: {
      main: '#28c2dc',
      text: '#eaeaea',
      
    },
    secondary: {
      main: '#a044ff',
    },
    tertiary: {
      main:'#3bcc86'
    },
    background: {
      lightest: '#fafafa',
      lighter:'#f4f4f4',
      light: '#efefef',
      medium:'#e5e5e5'
      
    },
    preLoader: {
      main:lightBlue[50]
    },
    text: {
      primary: '#333333',
      secondary: '#555f61',
      tertiary:'#a2a2a2'
    }
  },
  typography: {
      
    fontFamily: 'Poppins, Roboto, Open Sans, sans-serif',
    body1: {
      fontWeight: '300',
    },
    p: {
      fontWeight:'400'
    }
      
  },
  

  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      

    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
