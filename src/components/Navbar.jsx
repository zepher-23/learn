import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Paper, Button, Link, Typography, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import '../assets/styles/navbar.css'
import logo from '../assets/images/logo.png'
import { maxWidth } from "@mui/system";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 display:'flex',
  padding: theme.spacing(1),
  alignItems: 'center',
  color: theme.palette.text.primary,
}));



const Navbar = () => {

    const isMobile = useMediaQuery('(max-width:768px)')
const [expanded, setExpanded] = useState(false)
   
    const handleExpand = () => {

        expanded ? setExpanded(false) : setExpanded(true)
    }
    
    const [scrollValue, setScrollValue] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollValue(scrollTop);
      
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
    return (
        
           
        <Box  sx={{ width: '100vw', position: 'fixed',zIndex:3 }}>
            
      <Grid boxShadow={1} container sx={{position:'relative',width:'100vw',m:0, p:0, backgroundColor: 'white',display:'flex',flexGrow:1,flexDirection:'row',alignItems:'center', py:scrollValue>150 ? 0 : 1, height:scrollValue>150 ? '80px' : '100px',transition:'0.2s',zIndex:3}}  spacing={1} >
                <Grid  xs={6} sm={6} md={2} >
                    <Item sx={{ml:isMobile ? 2:6,transition:'0.2s'}}>
                        <img src={logo} style={{width:isMobile ? (scrollValue>150 ? '80px' : '100px') :scrollValue>150 ? '100px':'140px',transition:'0.5s'}} />
                    </Item>
                    
                </Grid>
                <Grid xs={12} md={7} sx={{my:0,display:isMobile ? "none" : 'flex',transition:'0.5s'}}  >
                    <Item sx={{ display:'flex', flexDirection: 'row', flexGrow:1,justifyContent:'center',p:2,backgroundColor:'white',transition:'0.5s',transform:scrollValue>150 ? 'translateY(0px)':'translateY(-100px)' }}>
                    <NavLink to='/internship'>   <Button color="secondary" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}}>
                            Internship Training
                        </Button></NavLink>
                      <NavLink to='/course'> <Button color="secondary"  sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}} >
                            Skill Courses
                        </Button></NavLink> 
                      <NavLink to='/project'> <Button  color="secondary" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}} >
                            Project Guidance
                        </Button></NavLink> 
                       <NavLink to='/admission'> <Button color="secondary" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}}>
                            College Admisson
                        </Button>
                        </NavLink>
                     

                    </Item>
                    
                    
                </Grid>
                
                <Grid xs={6} sm={6}  md={3} sx={{}} >
                    <Item mr={2} sx={{ display:'flex', flexDirection: 'row',justifyContent:'start' }}>
                        
                         <Button variant="contained"  className="" sx={{p:1,mr:1,width:'120px',height:'35px',color:'white',fontSize: isMobile ? '12px' :''}}  endIcon={isMobile ?'' : <LoginIcon />}>
                            login
                        </Button>
                       
                        <Button variant="outlined" color='secondary' className="" sx={{p:1,ml:1,width:'120px', height:'35px',fontSize: isMobile ? '12px' :''}} >
                            sign up
                        </Button>

                    </Item>
                    
                    
                </Grid>
              
                
        
            </Grid>


            <Box boxShadow={1} sx={{ width: '100vw', backgroundColor: 'secondary.main', display: isMobile ? 'flex': 'none',position:'relative',justifyContent:'center',zIndex:100,transition:'0.2s' }} onClick={handleExpand} >
                {
                    expanded ? <KeyboardArrowUpIcon fontSize="large" color="primary"/> : <KeyboardArrowDownIcon fontSize="large" color="primary"/>
                }
                

            </Box>
            <Grid container boxShadow={1} sx={{position:'absolute',zIndex:1,width:'100vw',m:0, p:0,display:isMobile ? 'flex' :' none', backgroundColor: 'white',flexDirection:'row',alignItems:'center',transition:'0.2s',transform: expanded ? 'translateY(0px)' : 'translateY(-200px)'}} >

            
                <Grid xs={12} sx={{  }}>
                    <Box sx={{display: isMobile ? 'flex' : 'none', flexDirection: 'column',py:2}}>
                        <Button sx={{p:2,height:'40px'}}>
                            Internship Training
                        </Button>
                        <Button  sx={{p:2,height:'40px'}} >
                            Skill Courses
                        </Button>
                        <Button  sx={{p:2,height:'40px'}} >
                            Project Guidance
                        </Button>
                        <Button sx={{p:2,height:'40px'}}>
                            College Admisson
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            

            
            
    </Box>


    
      
        
    )
};

export default Navbar;
