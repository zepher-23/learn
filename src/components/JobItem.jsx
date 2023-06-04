import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Paper, Button, Link, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';



const JobItem = (props) => {
    const isMobile = useMediaQuery('(max-width:768px)')

    console.log('hello')
    const { redirect, title, company, description, location, created } = props;
    const date = new Date(created)
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    console.log(title)
    return (
        <>
            
            <Box boxShadow={1} sx={{'&:hover': {boxShadow:4 }, display: 'flex', flexDirection: 'column', width:isMobile? 'auto': 'auto', backgroundColor: 'white', m:isMobile?1: 2,my:isMobile?2:2, p:isMobile?2: 3,borderRadius:'5px',transition:'0.2s'}}>
              <NavLink to={redirect}>    <Typography variant="h5" sx={{ color: 'secondary.main', mb: 0, '&:hover': { color:'primary.light'} ,transition:'0.2s'}}>{title}</Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.tertiary', mb: 2, fontWeight: 400 }}> {company }</Typography>
               </NavLink> <Typography variant="body2" sx={{ color: 'text.primary', mb: 2, fontWeight: 300,textAlign:isMobile?'justify':'left'  }}><Typography variant="span" sx={{ fontWeight: 500,color:'text.secondary'}} > Description : </Typography>{description} </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row',flexWrap:'wrap'}}>
                    <Typography variant="subtitle2" sx={{ m: 1,ml:0, color: 'text.tertiary',backgroundColor:'background.lighter',p:'5px',borderRadius:'5px' }}>{location }</Typography>
                    <Typography variant="subtitle2" sx={{ m: 1, color: 'text.tertiary',backgroundColor:'background.lighter',p:'5px',borderRadius:'5px'  }}><Typography variant="span" sx={{fontWeight:300}}>Posted on</Typography> {day} {month}</Typography>
                </Box>

            </Box>
             
            
        
        </>
  );
};
export default JobItem;
