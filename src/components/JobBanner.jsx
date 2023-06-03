import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Paper, Button, Link, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

const JobBanner = () => {
    const isMobile = useMediaQuery('(max-width:768px)')



    return (
        <>
            <Box boxShadow={2} sx={{border:'1px solid gray', m: 4, mt: 7, borderRadius: '10px', display: 'flex',justifyContent:'center',alignItems:'center', flexDirection: isMobile ? 'column' : 'row', height: '20vh' }}>
                <Typography variant="h5" sx={{color:'text.secondary',m:2}} >Find Jobs and Apply Now</Typography>
              <NavLink to='/jobs'>  <Button size="large" color="tertiary" variant='contained' sx={{color:'white'}}>Find now</Button></NavLink>

            </Box>

        </>
  );
};

export default JobBanner;
