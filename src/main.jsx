import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Internship from './views/Internship.jsx'
import Course from './views/Course.jsx'
import Project from './views/Project.jsx'
import Admission from './views/Admission.jsx'
import Jobs from './views/Jobs.jsx'
import { createTheme, ThemeProvider,responsiveFontSizes, styled } from '@mui/material/styles';
import lightBlue from "@mui/material/colors/lightBlue";
import './assets/styles/fonts.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const theme = createTheme({
  palette: {
    mode: 'light',
    
    primary: {
      main: '#28c2dc',
      text: '#eaeaea',
      
    },
    secondary: {
      main: '#2b3150',
      glass:'#2b3150aa'
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
    },
    body2: {
      fontWeight:'300'
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
   
        <Router>
      <Routes>
        <Route path="/" element={<App />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/course" element={<Course />} />
          <Route path="/project" element={<Project />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/jobs" element={<Jobs />} />


          

      </Routes>
    </Router>
  </ThemeProvider>

    
  </React.StrictMode>,
)
