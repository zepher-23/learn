import React from "react";
import Navbar from "../components/Navbar";
import { Typography, Box, Container, Grid, Button, Link,useMediaQuery } from "@mui/material";

const Internship = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <>
      
      <Box>
        <Navbar />
        <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center', backgroundColor: 'secondary.dark', height: '100vh', width: '100vw' }}>
          <Typography variant="h4" sx={{color:'primary.text'}}>COMING SOON!</Typography>
        </Box>

      </Box>
    </>
  )
};

export default Internship ;
