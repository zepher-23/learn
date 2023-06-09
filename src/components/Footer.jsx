import React from "react";
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import { Button, CardActions, styled, useMediaQuery } from '@mui/material';
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
        const isMobile = useMediaQuery('(max-width:768px)')

    return (
        <div>
       <Box  sx={{ display:'flex', flexDirection:'column', width: '100vw', backgroundImage: 'linear-gradient(to right, #2b3150, #2b3150)'}}>
        
                <Grid container >
                    <Grid xs={12} lg={4}>
                        <Container sx={{ mt: 4, p: 2, display: 'flex', flexDirection: 'row' }} >
                    <Typography variant='h6' sx={{ml:isMobile ? 1:11,color:'white'}}>Courses & Internship Training</Typography></Container>
        
        <Box sx={{ ml:isMobile ? 2: 14,mb:isMobile ? 0:4, display: 'flex', flexDirection: isMobile ? 'row' : 'column',height: isMobile ? 'auto':'23vh', flexWrap: 'wrap' }}>
      
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Web Development</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Fullstack Development</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Data Science</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>AI & ML</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Digital Marketing</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Python</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Java</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>C</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>C++</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>PHP</Typography>
          <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Android</Typography>
                        
                </Box>

                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={2}>
                        <Container sx={{mt:isMobile ?1: 4, p: 2}}>
                            <Typography variant='h6'sx = {{ml:isMobile ? 1 :0,color:'white'}}>Sitemap </Typography>

                        </Container>
                         <Box sx={{ ml:isMobile ? 2: 3,mb:4, display: 'flex', flexDirection:isMobile ? 'row': 'column',height:isMobile ? 'auto':'23vh', flexWrap: 'wrap' }}>
       
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>How it Works</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>About Us</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Internship Training</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Skill Courses</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Project Guidance</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>College Admissions</Typography>
                            <Typography className='footer-option' variant='body2' p={isMobile ? 1:0} sx={{color:'white'}}>Contact Us</Typography>
         
                        
                </Box>

                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={6}>
                        <Box sx={{mt:isMobile ? 2:6,mr:isMobile ? 2:4,ml:2, display:'flex',flexDirection:'column',alignItems:isMobile ? 'center':'start'}}>
                            <img src={logo} style={{ width: '200px' }} />
                            <Typography sx={{py:2,pr:isMobile ? 0 :3,textAlign:'justify',color:'white'}} variant="body2">Unleash your potential by learning invaluable skills from India's foremost experts, filling the educational gaps left by traditional schooling, all through our cutting-edge EdTech platform.</Typography>
                            <Box sx={{m:1,mb:3, display: 'flex', flexDirection: 'row',justifyContent:'space-between' }}>
                                <img className="social" src={facebook} style={{ width: isMobile ?'40px' :'30px',padding:'10px' }} />
                                <img className="social" src={instagram} style={{ width:isMobile ?'40px' : '30px',padding:'10px' }} />
                                <img className="social" src={linkedin} style={{ width:isMobile ?'40px' : '30px',padding:'10px'}} />
                                <img className="social" src={twitter} style={{ width:isMobile ?'40px' : '30px',padding:'10px' }} />
                                <img className="social" src={youtube} style={{ width:isMobile ?'40px' : '30px',padding:'10px'}} />
                                
                            
                        </Box>
                        </Box>
                        

                    </Grid>

                </Grid>

 <Box sx={{px:isMobile ? 2:12, backgroundColor: 'secondary.dark', minHeight: '40px',display:'flex',flexDirection:isMobile ?'column' :'row',justifyContent:'space-between',alignItems:'center' }}>
                    <Typography variant={isMobile ? 'subtitle1' :"body2"} pt={isMobile ? 1:0} sx={{color:'primary.light'}}>
                        Copyright &copy; 2023 - ZephyrLearn.in  

                    </Typography>
                    <Typography variant="body2" p={1} >
                        <Link href="#" sx={{color:'primary.light'}}>Privacy Policy</Link> - <Link href="#" sx={{color:'primary.light'}}>Terms & Conditions</Link>
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
