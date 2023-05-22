import React,{useState, useEffect} from "react";
import { Box, Container, Paper, Button, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import '../assets/styles/navbar.css'
import logo from '../assets/images/logo.png'


const Item = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 display:'flex',
  padding: theme.spacing(1),
  alignItems: 'center',
  color: theme.palette.text.primary,
}));



const Navbar = () => {
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
        
           
       <Box boxShadow={1} sx={{  width: '100vw',backgroundColor:'white', position:'fixed',zIndex:100 }}>
      <Grid container sx={{m:0, p:0,display:'flex',flexGrow:1,flexDirection:'row',alignItems:'center', my:scrollValue>150 ? 0 : 0, height:scrollValue>150 ? '60px' : '100px',transition:'0.5s'}}  spacing={1} >
                <Grid  xs={6} sm={6} md={scrollValue>150 ? 2 : 9} >
                    <Item sx={{ml:6}}>
                        <img src={logo} style={{width:scrollValue>150 ? '100px':'140px',transition:'0.5s'}} />
                    </Item>
                    
                </Grid>
                <Grid xs={12} md={7} sx={{my:0,display:scrollValue>150 ? 'flex' : 'none',transition:'0.5s'}}  >
                    <Item sx={{ display:'flex', flexDirection: 'row', flexGrow:1,justifyContent:'center' }}>
                        <Button className="nav-option" sx={{p:2,height:'30px'}}>
                            Internship Training
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px'}} >
                            Skill Courses
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px'}} >
                            Project Guidance
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px'}}>
                            College Admisson
                        </Button>
                     

                    </Item>
                    
                    
                </Grid>
                <Grid xs={6} sm={6}  md={3} sx={{}} >
                    <Item mr={2} sx={{ display:'flex', flexDirection: 'row',justifyContent:'start' }}>
                        
                         <Button variant="contained" className="" sx={{p:1,mr:1,width:'120px',height:'35px', backgroundImage: 'linear-gradient(to right, #28c2dc, #a044ff)',color:'white'}}  endIcon={<LoginIcon />}>
                            login
                        </Button>
                        <Typography variant="h5">/</Typography>
                        <Button variant="outlined" color='secondary' className="" sx={{p:1,ml:1,width:'120px', height:'35px'}} >
                            sign up
                        </Button>

                    </Item>
                    
                    
                </Grid>

                
        
      </Grid>
    </Box>


    
      
        
    )
};

export default Navbar;
