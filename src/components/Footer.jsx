import React from "react";
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import { Button, CardActions, styled } from '@mui/material';
import Card from "@mui/material/Card";
import Grid from '@mui/material/Unstable_Grid2';
import '../assets/styles/footer.css'
import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'



const Footer = () => {
    return (
        <div>
       <Box  sx={{ mt: 1,display:'flex', flexDirection:'column', width: '100vw', backgroundImage: 'linear-gradient(to right, #28c2dc, #a044ff)' }}>
        
                <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={12} lg={4}>
                        <Container sx={{ mt: 4, p: 2, display: 'flex', flexDirection: 'row' }} >
                    <Typography variant='h6' sx={{ml:11}}>Courses & Internship Training</Typography></Container>
        
        <Box sx={{ ml: 14,mb:4, display: 'flex', flexDirection: 'column',height:'23vh', flexWrap: 'wrap' }}>
      
          <Typography className='footer-option' variant='body2'>Web Development</Typography>
          <Typography className='footer-option' variant='body2'>Fullstack Development</Typography>
          <Typography className='footer-option' variant='body2'>Data Science</Typography>
          <Typography className='footer-option' variant='body2'>AI & ML</Typography>
          <Typography className='footer-option' variant='body2'>Digital Marketing</Typography>
          <Typography className='footer-option' variant='body2'>Python</Typography>
          <Typography className='footer-option' variant='body2'>Java</Typography>
          <Typography className='footer-option' variant='body2'>C</Typography>
          <Typography className='footer-option' variant='body2'>C++</Typography>
          <Typography className='footer-option' variant='body2'>PHP</Typography>
          <Typography className='footer-option' variant='body2'>Android</Typography>
                        
                </Box>

                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={2}>
                        <Container sx={{mt: 4, p: 2}}>
                            <Typography variant='h6'>Sitemap </Typography>

                        </Container>
                         <Box sx={{ ml: 3,mb:4, display: 'flex', flexDirection: 'column',height:'23vh', flexWrap: 'wrap' }}>
       
                             <Typography className='footer-option' variant='body2'>How it Works</Typography>
                            <Typography className='footer-option' variant='body2'>About Us</Typography>
          <Typography className='footer-option' variant='body2'>Internship Training</Typography>
          <Typography className='footer-option' variant='body2'>Skill Courses</Typography>
          <Typography className='footer-option' variant='body2'>Project Guidance</Typography>
                            <Typography className='footer-option' variant='body2'>College Admissions</Typography>
                             <Typography className='footer-option' variant='body2'>Contact Us</Typography>
         
                        
                </Box>

                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={6}>
                        <Box sx={{mt:6,mr:4,ml:2, display:'flex',flexDirection:'column',alignItems:'start'}}>
                            <img src={logo} style={{ width: '200px' }} />
                            <Typography sx={{py:2,pr:3}} variant="body2">Unleash your potential by learning invaluable skills from India's foremost experts, filling the educational gaps left by traditional schooling, all through our cutting-edge EdTech platform.</Typography>
                            <Box sx={{mb:3, display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                                <img className="social" src={facebook} style={{ width: '30px',padding:'10px' }} />
                                <img className="social" src={instagram} style={{ width: '30px',padding:'10px' }} />
                                <img className="social" src={linkedin} style={{ width: '30px',padding:'10px'}} />
                                <img className="social" src={twitter} style={{ width: '30px',padding:'10px' }} />
                                <img className="social" src={youtube} style={{ width: '30px',padding:'10px'}} />
                                
                            
                        </Box>
                        </Box>
                        

                    </Grid>

                </Grid>

 <Box sx={{px:12, backgroundColor: 'primary.main', height: '40px',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                    <Typography variant="body2">
                        Copyright &copy; 2023 - ZephyrLearn.in  

                    </Typography>
                    <Typography variant="body2">
                        <Link href="#" sx={{color:'primary.dark'}}>Privacy Policy</Link> - <Link href="#" sx={{color:'primary.dark'}}>Terms & Conditions</Link>
                    </Typography>
                </Box>



</Box>

                {/* <Container sx={{ mt: 4, p: 2, display: 'flex', flexDirection: 'row' }} >
                    <Typography variant='h5' sx={{ml:11}}>Courses & Internship Training</Typography></Container>
        
        <Box xs={12} sm={12} md={2} sx={{ ml: 13,mb:4, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      
                    <Typography className='footer-option' variant='body2'>Web Development</Typography>
          <Typography variant='body2'>Fullstack Development</Typography>
          <Typography variant='body2'>Data Science</Typography>
          <Typography variant='body2'>AI & ML</Typography>
          <Typography variant='body2'>Digital Marketing</Typography>
          <Typography variant='body2'>Python</Typography>
          <Typography variant='body2'>Java</Typography>
          <Typography variant='body2'>C</Typography>
          <Typography variant='body2'>C++</Typography>
          <Typography variant='body2'>PHP</Typography>
                        <Typography variant='body2'>Android</Typography>
                        
                </Box>
                <Box sx={{px:12, backgroundColor: 'primary.main', height: '40px',display:'flex',justifyContent:'space-between',alignItems:'center' }}>
                    <Typography variant="body2">
                        Copyright &copy; 2023 - ZephyrLearn.in  

                    </Typography>
                    <Typography variant="body2">
                        <Link href="#" sx={{color:'primary.dark'}}>Privacy Policy</Link> - <Link href="#" sx={{color:'primary.dark'}}>Terms & Conditions</Link>
                    </Typography>
                </Box> */}
        

      
    </div>
    );
};

export default Footer;
