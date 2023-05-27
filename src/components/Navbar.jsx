import React,{useState, useEffect} from "react";
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
        
           
        <Box  sx={{ width: '100vw', zIndex: 1000, position: 'fixed' }}>
            
      <Grid container sx={{position:'relative',width:'100vw',m:0, p:0, backgroundColor: 'white',display:'flex',order:1,flexGrow:1,flexDirection:'row',alignItems:'center', my:scrollValue>150 ? 0 : 0, height:scrollValue>150 ? '60px' : '100px',transition:'0.5s',zIndex:2}}  spacing={1} >
                <Grid  xs={6} sm={6} md={scrollValue>150 ? 2 : 9} >
                    <Item sx={{ml:isMobile ? 2:6,transition:'0.2s'}}>
                        <img src={logo} style={{width:isMobile ? (scrollValue>150 ? '80px' : '100px') :scrollValue>150 ? '100px':'140px',transition:'0.5s'}} />
                    </Item>
                    
                </Grid>
                <Grid xs={12} md={7} sx={{my:0,display:isMobile ? "none" : (scrollValue>150 ? 'flex' : 'none'),transition:'0.5s'}}  >
                    <Item sx={{ display:'flex', flexDirection: 'row', flexGrow:1,justifyContent:'center',p:2,backgroundColor:'white' }}>
                        <Button className="nav-option" sx={{p:2,height:'30px',fontSize:isMobile ? '10px':''}}>
                            Internship Training
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}} >
                            Skill Courses
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}} >
                            Project Guidance
                        </Button>
                        <Button className="nav-option" sx={{p:2,height:'30px',fontSize:isMobile ? '12px':''}}>
                            College Admisson
                        </Button>
                     

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
            <Box sx={{ width: '100vw',height:'20px', backgroundColor: 'white', display: 'flex',position:'relative',justifyContent:'center',zIndex:100 }} onClick={handleExpand} >
                {
                    expanded ? <KeyboardArrowUpIcon color="primary"/> : <KeyboardArrowDownIcon color="primary"/>
                }
                

            </Box>
            <Grid container boxShadow={1} sx={{position:'relative',width:'100vw',m:0, p:0,display:'flex', backgroundColor: 'white',zIndex:'1',flexGrow:1,flexDirection:'row',alignItems:'center', my:scrollValue>150 ? 0 : 0, height:scrollValue>150 ? '60px' : '100px',transition:'0.5s',transform: expanded ? 'translateY(0px)' : 'translateY(-200px)'}} >

            
            <Grid xs={12} sx={{ display: isMobile ? 'flex' : 'none', flexDirection: 'column',  }}>
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
                </Grid></Grid>
            

            
            
    </Box>


    
      
        
    )
};

export default Navbar;
