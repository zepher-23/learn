import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createTheme, ThemeProvider,responsiveFontSizes, styled } from '@mui/material/styles';
import lightBlue from "@mui/material/colors/lightBlue";
import './assets/fonts.css'



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
    preLoader: {
      main:lightBlue[50]
    }
  },
  typography: {
      
    fontFamily: 'Poppins, Roboto, Open Sans, sans-serif',
    body1: {
      fontWeight:'200'
    },
      
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
