import React from "react";
import '../assets/styles/testimonial.css';
import { Box, Container, Typography,Grid,Button,useMediaQuery } from '@mui/material'

const Testimonial = (isMobile) => {
    

    return (
        <>
            <Box sx={{p:isMobile? 1:4,pb:1,m:1,display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                <Typography variant="h5" sx={{color:'tertiary.main',fontWeight:400}}> This is what our students say

                </Typography>
            </Box>
            <Grid container sx={{  width: '100%', backgroundColor: 'secondary.main',display:'flex',flexDirection:'row',flexWrap:'wrap',p:2,justifyContent:'center' }}>
                <Grid xs={12} lg={4}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={4}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={3}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={3}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={4}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={4}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={4}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={3}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
                <Grid xs={12} lg={3}  sx={{backgroundColor:'background.light',height:'20vh',borderRadius:'10px',m:1}}>

                </Grid>
               
                
                
      </Grid>
           
        </>
    )
};

export default Testimonial;
