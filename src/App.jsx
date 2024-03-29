import React,  { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import JobBanner from './components/JobBanner'
import expertIcon from './assets/images/expert-icon.png'
import rupee from './assets/images/rupee.png'

import './App.css'
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, Hidden,Paper, useMediaQuery,Fab} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import jsonData from './assets/javascript/courseData.json'
import learn1 from './assets/images/learn1.png'
import EventIcon from '@mui/icons-material/Event';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddIcon from '@mui/icons-material/Add';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import university from './assets/images/university.png'
import checked from './assets/images/checked.png'
import Testimonial from './components/Testimonial'
import cta from './assets/images/cta.png'
import ContactForm from './components/ContactForm'
import Map from './components/Map'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const json = jsonData





const Service = ({ children }) => {
const [isHovered, setIsHovered] = useState(false);
  const handleCourseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleCourseClick = () => {
    setCourse(id)
    setImageClass(hoveredImage)
  
}
  return (
    <Box  boxShadow={1} onMouseOver={handleCourseOver}  onMouseOut={handleMouseOut} 
         
      sx={{
        minHeight: '20vh', margin: '10px', backgroundColor: '#fafafa', borderRadius: '50px', padding:isMobile ? '20px': '40px', color: 'black',
        '&:hover': { boxShadow:'12',cursor:'pointer'}, transition:'0.2s'  }}>
      {children}
      </Box>
        
  )


}



const CustomTypo = styled(Typography)(({theme})=>({
  
  fontWeight: 300,
  fontSize:'1vw',
  display: 'flex',
  color:'white',
  flexGrow:2,
  justifyContent: 'center',
  alignItems: "center",
  
}))





//CUSTOM COURSE SELECTION TAB AREA......................................
const CustomTabs = styled((props) => ( <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />))
  ({
  '& .MuiTabs-indicator': {
    display: 'flex',
      justifyContent: 'center',
    alignItems:'center',
      backgroundColor: '#ffffff11',
      boxShadow: '0 4px 12px 0 rgba(0,0,0,0.5)',
      height: '40px',
    // borderTopLeftRadius:'5px',
    // borderTopRightRadius:'5px',
      borderRadius: '5px',
      marginBottom: '3.5px',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    height:'0',
    

    backgroundColor: '#fff',
  },

})
  // CUSTOM COURSE TABS ..................................
const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    color: '#FFFFFF99',
    zIndex:'1000',
    '&.Mui-selected': {
      
      color: '#ffffff88',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const BenifitCard = styled(Box)(({ theme,isMobile }) => ({
  minHeight: isMobile ? '20vh' : '30vh',
  height: 'auto',
  flexGrow:'1',
  borderRadius: '5px',
  boxShadow: theme.shadows[1],
  margin: '10px',

  padding:'10px',
  backgroundColor: '#ffffff11'
  
}))
const ServiceInfo = styled(Box)(({ theme }) => ({

  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  height: '5vh',
  borderRadius: '5px',
  paddingLeft: '5px',
  paddingRight:'5px',
  
  boxShadow: theme.shadows[0],
  marginTop: '10px',
  marginRight:'10px',
  backgroundColor: theme.palette.background.light
  
}))

const InfoText = styled(Typography)(({ theme }) => ({
  marginLeft: '5px',
  marginRight:'5px',
  fontSize: '12px',
  fontWeight: 500,
  color: theme.palette.text.tertiary,
}))

function App() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [contactOpen, setContactOpen] = useState(false);
  const handleContactOpen = () => {
    if (contactOpen) {
      setContactOpen(false);
    }
    else {
      setContactOpen(true);
    }
  }
  return (
    <>
      
      <Navbar />

      <Grid container sx={{pt: '100px',height:isMobile?'80vh':'105vh', backgroundColor:'secondary.main',display:'flex',flexDirection:'row',justifyContent:isMobile ?'center' :'space-between'}} >
        <Grid xs={12} sm={12} md={7} lg={6} >
          <Box boxShadow={0} sx={{p:4,backgroundColor:'#ffffff22',m:1,mt:15,mb:4,ml:isMobile ? 1: 8,borderRadius:'10px',display:'flex',flexDirection:'column'}}>
          <Typography variant='h4' sx={{mb:2, color:'primary.text'}}>
            Empowering Careers, Unleashing Potential
          </Typography>
          <Typography variant='body1' sx={{color:'primary.text'}}>
            
Transform your career prospects with our immersive programs, bridging academia and industry, equipping you with high-demand skills and opening doors to abundant job opportunities.
            </Typography>
             <Button boxShadow={2} variant='contained' color="primary" sx={{display:'flex',zIndex:0, p: 1,flexFlow:1,color:'white',  mt: 4, mb: 0, borderRadius: '10px',justifyContent:'center' }}>
            
 Explore Program
          
          </Button>
          </Box>
         

        </Grid>
        
       <Hidden lgDown>
        <Grid item xs={0} md={12} lg={4} sx={{display:'flex',justifyContent:'end'}}>
          <img className='hero-png' src={learn1} style={{ width: '500px', margin: '30px',paddingRight:'50px'}} alt="Your Image" />
        </Grid>
      </Hidden>

      </Grid>

      {/* <Box sx={{display:'flex', flexDirection:'row', width: '100vw', height: '80vh', pt: '100px', backgroundImage: 'linear-gradient(to right, #28c2dc, #a044ff)' }}>
        <Box sx={{ height: '20vh', flexGrow: 1, m: 6, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h4' sx={{ m: 5, color:'secondary.main'}}>
            "Empowering Careers, Unleashing Potential"
          </Typography>
          
          <Typography variant='body1'>
            
Transform your career prospects with our immersive programs, bridging academia and industry, equipping you with high-demand skills and opening doors to abundant job opportunities.
          </Typography>
        </Box>
        <img src={learn1} style={{width:'500px',  margin:'30px',marginRight:'100px'}} />
        

      </Box> */}
      <Box sx={{
        height: '10vh', backgroundColor: 'secondary.main', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',
     alignItems:'center' }}>
       

      </Box>
     
      
      <Box sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{overflowX:'hidden',width:'100vw',display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
          <Grid className='service' xs={12} md={6} lg={10} boxShadow={1} sx={{m:2,mt:5,p:isMobile ? 2:4,transition:'0.2s',borderRadius:'5px','&:hover':{cursor:'pointer',boxShadow:'4'},backgroundColor:'background.lightest'}}>
            
              
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Box sx={{display:'flex',flexDirection:'column',flexGrow:1}}>  <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ mb: 0, color: 'secondary.main', fontWeight: '700', '&:hover': { color: '#3bcc86' }, transition: '0.2s', flexGrow: 1 }}> Internship Training </Typography>
                            <Typography variant='body2' sx={{mb:2, color:'primary.light'}}> Gain Real-World Experience in Your Field</Typography>
</Box> 
              <Box className='clickMe' sx={{ width: '150px', m: 1, position: 'relative', left: '40px', backgroundColor: 'secondary.main', p: 1, pr: 2, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 19% 100%)', display: isMobile ? 'none' : 'flex', justifyContent: 'end' }} >
                <Typography sx={{ color: 'white' }}> Learn More</Typography>
                
              </Box>
            </Box>
              <Typography variant={isMobile?'body2':'body1'} sx={{color:'text.tertiary',textAlign:"justify"}}>
                Are you a student or aspiring professional looking to kick-start your career? Our Internship Training program offers a unique opportunity to gain hands-on experience and develop essential skills in your chosen field.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'start', flexWrap: 'wrap' }}>
                <ServiceInfo><EventIcon sx={{color:'#fbc02d'}} /> <InfoText>2-6 Months</InfoText>  </ServiceInfo>
                <ServiceInfo><AccessTimeFilledIcon sx={{color:'#00bcd4'}} /> <InfoText>24/7 Online Mentor</InfoText>  </ServiceInfo>
                <ServiceInfo><WhatsAppIcon sx={{color:'tertiary.main'}} /> <InfoText>Whatsapp Support</InfoText>  </ServiceInfo>
              </Box>
              
            
           
          </Grid>
          <Grid className='service' xs={12} md={6} lg={10} boxShadow={1} sx={{m:2,p:isMobile ? 2:4,transition:'0.2s',borderRadius:'5px','&:hover':{cursor:'pointer',boxShadow:'4'},backgroundColor:'background.lightest'}} >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Box sx={{display:'flex',flexDirection:'column',flexGrow:1}}> <Typography variant={isMobile ? 'h5':'h4'} sx={{ mb: 0, color: 'secondary.main', fontWeight: '700', '&:hover': { color: '#3bcc86' }, transition: '0.2s', flexGrow: 1 }}> Skill Courses </Typography>
                           <Typography variant='body2' sx={{mb:2,color:'primary.light'}}> Unlock Your Potential and Master In-Demand Skills</Typography>
              </Box>
              <Box className='clickMe' sx={{ width: '150px', m: 1, position: 'relative', left: '40px', backgroundColor: 'secondary.main', p: 1, pr: 2, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 19% 100%)', display: isMobile ? 'none' : 'flex', justifyContent: 'end' }} >
                <Typography sx={{ color: 'white' }}> Learn More</Typography>
              </Box>
            </Box>
              <Typography variant={isMobile?'body2':'body1'} sx={{color:'text.tertiary',textAlign:'justify'}}>
Are you ready to acquire new skills and elevate your career? Our Skill Courses on the EdTech platform offer a wide range of courses designed to empower you with the knowledge and expertise you need to succeed in today's fast-paced world.
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'start', flexWrap: 'wrap' }}>
                <ServiceInfo><EventIcon sx={{color:'#fbc02d'}} /> <InfoText>2-4-6 Months</InfoText>  </ServiceInfo>
                <ServiceInfo><AccessTimeFilledIcon sx={{color:'#00bcd4'}} /> <InfoText>24/7 Online Mentor</InfoText>  </ServiceInfo>
                <ServiceInfo><WhatsAppIcon sx={{color:'tertiary.main'}} /> <InfoText>Whatsapp Support</InfoText>  </ServiceInfo>

              </Box>
           
          </Grid>
          
          {/* <Grid className='service' xs={12} md={6} lg={10} boxShadow={1} sx={{m:2,p:isMobile ? 2:4,transition:'0.2s',borderRadius:'5px','&:hover':{cursor:'pointer',boxShadow:'4'},backgroundColor:'background.lightest'}} >
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{display:'flex',flexDirection:'column',flexGrow:1}}>  <Typography variant={isMobile ? 'h5':'h4'} sx={{ mb: 0, color: 'secondary.main', fontWeight: '700', '&:hover': { color: '#3bcc86' }, transition: '0.2s', flexGrow: 1 }}> Project Guidance </Typography>
            <Typography variant='body2' sx={{mb:2, color:'primary.light'}}> Expert Support for Successful Project Execution </Typography>
              </Box>
              <Box className='clickMe' sx={{ width: '150px', m: 1, position: 'relative', left: '40px', backgroundColor: 'secondary.main', p: 1, pr: 2, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 19% 100%)', display: isMobile ? 'none' : 'flex', justifyContent: 'end' }} >
                <Typography sx={{ color: 'white' }}> Learn More</Typography>
              </Box>
            </Box>
             
              <Typography variant={isMobile?'body2':'body1'} sx={{color:'text.tertiary',textAlign:'justify'}}>
Are you looking to turn your innovative ideas into tangible projects? Our Project Guidance service on the EdTech platform offers expert support and guidance to help you execute your projects effectively and achieve remarkable results.

              </Typography> 
              <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'start', flexWrap: 'wrap' }}>
                <ServiceInfo><EventIcon sx={{color:'#fbc02d'}} /> <InfoText>Self Paced</InfoText>  </ServiceInfo>
                <ServiceInfo><AccessTimeFilledIcon sx={{color:'#00bcd4'}} /> <InfoText>24/7 Online Mentor</InfoText>  </ServiceInfo>
                <ServiceInfo><WhatsAppIcon sx={{color:'tertiary.main'}} /> <InfoText>Whatsapp Support</InfoText>  </ServiceInfo>
                <ServiceInfo><img src={expertIcon } style={{width:'25px'}}/> <InfoText>Expert Guidance </InfoText>  </ServiceInfo>

              </Box>
            
           
          </Grid>
          <Grid className='service' xs={12} md={6} lg={10} boxShadow={1} sx={{m:2,mb:5,p:isMobile ? 2:4,transition:'0.2s',borderRadius:'5px','&:hover':{cursor:'pointer',boxShadow:'4'},backgroundColor:'background.lightest'}}>
           
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
           <Box sx={{display:'flex',flexDirection:'column',flexGrow:1}}>  <Typography variant={isMobile ? 'h5':'h4'} sx={{ mb: 0, color: 'secondary.main', fontWeight: '700', '&:hover': { color: '#3bcc86' }, transition: '0.2s', flexGrow: 1 }}> College Admissions </Typography>
                           <Typography variant='body2' sx={{mb:2, color:'primary.light'}}> Your Pathway to Higher Education Success</Typography>
              </Box>
              <Box className='clickMe' sx={{ width: '150px', m: 1, position: 'relative', left: '40px', backgroundColor: 'secondary.main', p: 1, pr: 2, clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 19% 100%)', display: isMobile ? 'none' : 'flex', justifyContent: 'end' }} >
                <Typography sx={{ color: 'white' }}> Learn More</Typography>
              </Box>
            </Box>
              <Typography variant={isMobile?'body2':'body1'} sx={{color:'text.tertiary',textAlign:'justify'}}>
Are you a student dreaming of attending your dream college or university? Our College Admissions service on the EdTech platform is designed to guide and support you through the complex and competitive college admissions process, ensuring you have the best chance of securing admission to your desired institutions.
              </Typography>   
              <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:'start', flexWrap: 'wrap' }}>
                <ServiceInfo><img src={rupee} style={{width:'25px'}} /><InfoText>Management Seats</InfoText>  </ServiceInfo>
                <ServiceInfo><AccessTimeFilledIcon sx={{color:'#00bcd4'}} /> <InfoText>24/7 Online Mentor</InfoText>  </ServiceInfo>
                <ServiceInfo><WhatsAppIcon sx={{color:'tertiary.main'}} /> <InfoText>Whatsapp Support</InfoText>  </ServiceInfo>
                <ServiceInfo><img src={university} style={{width:'25px'}} /> <InfoText>Top University</InfoText>  </ServiceInfo>

              </Box>
           
          </Grid> */}

        </Grid>

      </Box>
      

      
      <Box >
  <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center',p:4,px:0 }}>
              <Typography variant="h5" sx={{ color: 'tertiary.main' }}>What we offer ?</Typography>
      <Typography variant="body1" sx={{color:'secondary.main'}}>We offer the best content for you!</Typography>


        </Box>
        

        <Grid container sx={{backgroundColor:isMobile ? 'secondary.main' :'', color:'black', display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'center',p:isMobile ? 5:2,px:isMobile ? 1 : 3}} >
         
          <Box sx={{display:isMobile ? 'none' :'flex',flexDirection:'row',height:'70vh',width:'100%',position:'absolute',zIndex:-1,left:'0px'}}>
            <Box sx={{width:'50%',height:'100%', backgroundImage: 'linear-gradient(to right, #2b3150, #28c2dc)',clipPath:isMobile ? "":'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)'}}>

            </Box>
            <Box sx={{width:'50%',height:'100%', backgroundImage: 'linear-gradient(to right, #28c2dc,#2b3150)',clipPath:isMobile ? "": 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'}}>
              
            </Box>
          </Box>
          
          <Grid xs={12} lg={2.5} boxShadow={8} sx={{backgroundColor:'secondary.glass',m:2,mt:isMobile ? '20px' : '50px',borderRadius:'10px',display:'flex',flexDirection:'column'}}>
             <Box sx={{p:2,pb:1}}><Typography variant='body2' sx={{color:'tertiary.main'}}> You get</Typography>
            <Typography variant='h5' sx={{ color: 'primary.text', fontWeight: 600 }}>1 on 1 Mentors</Typography></Box> 
           
            <BenifitCard isMobile={isMobile} sx={{}} >
             
             <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Online / Offline Classes</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Live Doubt Resolution</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Learn to solve real world problems</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Structured Course</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Industry Expert Coaching</Typography></Box>
              
              </Box>
              

            </BenifitCard>
          </Grid>
          <Grid xs={12} lg={2.5} boxShadow={8} sx={{backgroundColor:'secondary.glass',m:2,mt:isMobile ? '20px' : '50px',borderRadius:'10px',display:'flex',flexDirection:'column'}}>
          <Box sx={{p:2,pb:1}}><Typography variant='body2' sx={{color:'tertiary.main'}}> You get</Typography>
            <Typography variant='h5' sx={{ color: 'primary.text', fontWeight: 600 }}>Lifetime Placement Support</Typography></Box> 
            <BenifitCard isMobile={isMobile}>
              
             
             <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Mock Interviews</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Live Feedback Sessions</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Resume Profiling</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Career Consultation</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Career Guidance </Typography></Box>
              
              </Box>

            </BenifitCard>

          </Grid>
          <Grid xs={12} lg={2.5} boxShadow={8} sx={{backgroundColor:'secondary.glass',m:2,mt:isMobile ? '20px' : '50px',borderRadius:'10px',display:'flex',flexDirection:'column'}}>
            <Box sx={{p:2,pb:1}}><Typography variant='body2' sx={{color:'tertiary.main'}}> You get</Typography>
            <Typography variant='h5' sx={{ color: 'primary.text', fontWeight: 600 }}>Structured Learning </Typography></Box> 
            <BenifitCard isMobile={isMobile}>
              
             
             <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Easy to Understand</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Doubt resolutions from industry experts</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Easy Paced Learning</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Covers all levels of learning Pace</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Online / Offline Classes</Typography></Box>
              
              </Box>

            </BenifitCard>
          </Grid>
          {/* <Grid xs={12} lg={2.5} boxShadow={8} sx={{backgroundColor:'secondary.glass',m:2,mt:isMobile ? '20px' : '50px',borderRadius:'10px',display:'flex',flexDirection:'column'}}>
            <Box sx={{p:2,pb:1}}><Typography variant='body2' sx={{color:'tertiary.main'}}> You get</Typography>
            <Typography variant='h5' sx={{ color: 'primary.text', fontWeight: 600 }}>1 on 1 Mentors</Typography></Box> 
            <BenifitCard isMobile={isMobile}>
              
             
             <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Online / Offline Classes</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Live Doubt Resolution</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Learn to solve real world problems</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Online / Offline Classes</Typography></Box>
              <Box sx={{display:'flex',flexDirection:'row'}}><img src={checked} style={{ width: '20px',height:'20px',paddingTop:'7px'}} /><Typography variant='body2' sx={{p:1,color:'white'}}>Online / Offline Classes</Typography></Box>
              
              </Box>

            </BenifitCard>

          </Grid> */}

        </Grid>

      </Box>
{/*       
      <Box sx={{mt:8}}>
        <Testimonial isMobile={isMobile} />
      </Box>

      <Box sx={{height:'40vh',color:'black'}}>
        Alumni
      </Box>

       */}
     <JobBanner />

      <Box sx={{ p: 4, px: isMobile ? 3:8,m:1,mt:5, color: 'black', display: 'flex',flexDirection:isMobile ? 'column':'row', justifyContent: 'center', alignItems: 'center',backgroundColor:'secondary.main' }}>
        <img src={cta } alt="" style={{width:isMobile ? '60px':'100px'}}/>
        <Typography variant={isMobile ? 'body1' : 'h5'} sx={{ maxWidth: isMobile ? '100%' : '65%', p: isMobile ? 3 : 3, px: isMobile ? 0 : 5, fontWeight: isMobile ? 300 : 600, color: 'primary.text',textAlign:isMobile?'justify':'start' }}>
          Elevate your learning with our innovative EdTech platform. Discover, engage, and excel. Join us today!
        </Typography>
        <Button size='large' color='tertiary' variant='contained' sx={{minWidth:'200px',color:'white'}}>call us</Button>

      </Box>
        <ContactForm isMobile = {isMobile} />

      

      <Footer />
      <Box sx={{ display: 'flex',flexDirection:'column',alignItems:'center',zIndex:1000, position: 'fixed', bottom: '30px', right: '30px' }}>
        <Box boxShadow={2} sx={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'center', width:contactOpen ? '55px':'50px', height: contactOpen ? '170px' : '46px', backgroundColor: 'background.lightest', mb: 2, borderRadius: '50px', position: 'absolute', bottom: '-10px', transition: '0.2s ease',overflow:'hidden' }}>
          <CallIcon className="fab-icon" sx={{color:'primary.main',p:1,pt:3,width:'30px',height:'30px',transition:'0.2s'}} />
        <Link href="https://api.whatsapp.com/send?phone=8111843307" target="_blank"> <WhatsAppIcon className="fab-icon" sx={{color:'tertiary.main', p:1,pt:2,width:'30px',height:'30px',transition:'0.2s'}} />
       </Link>  </Box>
         <Fab  color="secondary" aria-label="add"  onClick={handleContactOpen} >
        <PermPhoneMsgIcon />
      </Fab>
      </Box>

    
      
    </>
  )
}

export default App
