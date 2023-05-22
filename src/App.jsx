import React,  { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import Container from "@mui/material/Container";
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, Hidden } from '@mui/material';
import { createTheme, ThemeProvider,responsiveFontSizes, styled } from '@mui/material/styles';
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
const json = jsonData





const CourseCard = ({ children, image,setImageClass, hoveredImage,id,setCourse }) => {
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
    <Card  onMouseOver={handleCourseOver} onClick={handleCourseClick} onMouseOut={handleMouseOut} 
         elevation={isHovered ? 12 : 2}
 sx={{
         p: 0, backgroundColor:isHovered ? '#f5f5f5':'white', m: 1,
   '&:hover': { cursor: 'pointer' }, display: 'flex', flexDirection: 'column',
   justifyContent: 'center', alignItems: 'center', borderRadius: '10px',
        borderWidth: '0px', borderStyle: 'solid', borderColor: 'primary.light'
      }}>
      <Box className={`${isHovered ? hoveredImage : image}`} sx={{
        minWidth: '4rem', height: '4rem', m: 3, mt: 2, mb: 0, backgroundRepeat: 'no-repeat',
        transform: isHovered ? "translateY(18px) scale(1.3)" : "0 1", transition: '0.2s ease-in-out'
      }}>
      </Box>
      <Box sx={{
        width: '100%', m: 0, mx: 2, p: 1, mt: 2, backgroundColor: isHovered ? 'primary.main' : 'primary.light',
        transform: isHovered ? "translateY(50px)" : "", transition: '0.2s ease-in-out'
      }}>{children}</Box> 
        </Card>
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
const CustomTabs = styled((props) => (
  <Tabs {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" />
    }} />))
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


function App() {



  const [course, setCourse] = useState('Python')
    const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [view, setView] = useState("Language")
  const [imageClass, setImageClass] = useState ('python')

  console.log(course)
const initialCourse = ['Python',"Fullstack","React","NodeJS","Chat Application"]
  const initialClass = ['python',"fullstack","react","nodejs","chat"]
  const category = json[view]
  const courseInfo = category[course]

  const handleChange = (event, newValue) => {
   
    setImageClass(initialClass[newValue]);
    setView(event.target.textContent)
    setValue(newValue)
    setCourse(initialCourse[newValue])
  };



  return (
    <>
      
      <Navbar />

      <Grid container sx={{pt: '100px',height:'105vh', backgroundImage: 'linear-gradient(to right, #28c2dc, #a044ff)'}} spacing={3}>
        <Grid sx={12} sm={12} md={7} lg={7}  >
          <Box boxShadow={0} sx={{p:4,backgroundColor:'#ffffff22',m: 12,mt:15,mb:4,borderRadius:'10px',display:'flex',flexDirection:'column',justifyContent:'start'}}>
          <Typography variant='h4' sx={{mb:2, color:'primary.text'}}>
            Empowering Careers, Unleashing Potential
          </Typography>
          <Typography variant='body1' sx={{color:'primary.text'}}>
            
Transform your career prospects with our immersive programs, bridging academia and industry, equipping you with high-demand skills and opening doors to abundant job opportunities.
            </Typography>
             <Button boxShadow={2} variant='contained' sx={{display:'flex', p: 1,flexFlow:1,backgroundImage:'linear-gradient(to right,#a044ff,  #a044ff)',color:'white',  mt: 4, mb: 0, borderRadius: '10px',justifyContent:'center' }}>
            
 Explore Program
          
          </Button>
          </Box>
         

        </Grid>
        
       <Hidden lgDown>
        <Grid item xs={0} md={12} lg={5} sx={{display:'flex',justifyContent:'end'}}>
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
        width: '100%', backgroundColor:"secondary.main", py: 1, display: 'flex', flexDirection: 'row',
      justifyContent:'center'}}>
 
        <Box sx={{ px: 2, backgroundImage: 'linear-gradient(to right,#a044ff, #28c2dc, #a044ff)', borderRadius: '10px' }}>
          
          {/* ..........................COURSE TABS................................. */}
        <CustomTabs
          value={value}
          onChange={handleChange}
            
            
          centered
        >
          <CustomTab label="Language" />
          <CustomTab label="Career Track" />
            <CustomTab label="Frontend" />
            <CustomTab label="Backend" />
            <CustomTab label="Live Projects" />
        </CustomTabs>
        </Box>
        
      </Box>

       {/* .....................................COURSE INFORMATION.................................... */}
      <Box sx={{display:'none',flexDirection:'row',alignItems:'center',p:1,pt:0,backgroundColor:'white' }}>
        <Container disableGutters sx={{ m: 1 }}>
         
          

          
          <Container  id="Language" sx={{display:view === 'Language' ? 'flex': 'none',flexWrap:'wrap',flexDirection:'row',justifyContent:'center', backgroundColor:'white' ,p:2,pt:0,transition:'0.5s ease-in-out'}}>
            {/* <Box sx={{display:'flex' ,flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} id="Python" setCourse={setCourse}   image="python-flat" hoveredImage="python" sx={{}}>
                
                <CustomTypo variant="h6" sx={{}}>Python </CustomTypo>
                
              </CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="C" image="c-flat" hoveredImage="c" sx={{}}><CustomTypo   variant="h6" >C</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="C++" image="cplus-flat" hoveredImage="cplus" sx={{}}><CustomTypo   variant="h6" >C++</CustomTypo></CourseCard>
            {/* </Box> */}
            {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Java" image="java-flat" hoveredImage="java" sx={{}}><CustomTypo   variant="h6" >Java</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="SQL" image="sql-flat" hoveredImage="sql" sx={{}}><CustomTypo   variant="h6" >SQL</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="JavaScript" image="javascript-flat" hoveredImage="javascript" sx={{}}><CustomTypo   variant="h6" >JavaScript</CustomTypo></CourseCard>
            {/* </Box> */}
            {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"start"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="HTML/CSS" image="html-flat" hoveredImage="html" sx={{}}><CustomTypo   variant="h6" >HTML/CSS</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="PHP" image="php-flat" hoveredImage="php" sx={{}}><CustomTypo   variant="h6" >PHP</CustomTypo></CourseCard>
              
            {/* </Box> */}
      
        </Container>
          <Container id="Career Track" sx={{  display: view === 'Career Track' ? 'flex' : 'none',flexWrap:'wrap',flexDirection:'row',justifyContent:'center', backgroundColor:'white' ,p:2, transition: '0.5s ease-in-out' }}>
             {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Fullstack" image="fullstack-flat" hoveredImage="fullstack" sx={{}}><CustomTypo   variant="h6" >Fullstack</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Data Science" image="datascience-flat" hoveredImage="datascience" sx={{}}><CustomTypo   variant="h6" >Data Science</CustomTypo></CourseCard>
            {/* </Box> */}
             {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Cloud Computing" image="cloudcomputing-flat" hoveredImage="cloudcomputing" sx={{}}><CustomTypo   variant="h6" >Cloud Computing</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Web Development" image="web-flat" hoveredImage="web" sx={{ }}><CustomTypo   variant="h6" >Web Development</CustomTypo></CourseCard>
            {/* </Box> */}
            {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Android" image="android-flat" hoveredImage="android" sx={{}}><CustomTypo   variant="h6" >Android</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="AI/ML" image="ai-flat" hoveredImage="ai" sx={{ }}><CustomTypo   variant="h6" >Ai/ML</CustomTypo></CourseCard>
            {/* </Box> */}
        </Container>
          <Container id="Frontend" sx={{ display: view === 'Frontend' ? 'flex' : 'none',flexWrap:'wrap',flexDirection:'row',justifyContent:'center', backgroundColor:'white' ,p:2, transition: '0.5s ease-in-out' }}>
            {/* <Box sx={{display:'flex',flexDirection:'row',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="React" image="react-flat" hoveredImage="react" sx={{}}><CustomTypo   variant="h6" >React</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Bootstrap" image="bootstrap-flat" hoveredImage="bootstrap" sx={{}}><CustomTypo   variant="h6" >Bootstrap</CustomTypo></CourseCard>
             <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="AngularJS" image="angularjs-flat" hoveredImage="angularjs" sx={{}}><CustomTypo   variant="h6" >AngularJS</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="VueJS" image="vuejs-flat" hoveredImage="vuejs" sx={{}}><CustomTypo   variant="h6" >VueJS</CustomTypo></CourseCard>
           
            {/* </Box> */}

        </Container>
          <Container id="Backend" sx={{ display: view === 'Backend' ? 'flex' : 'none',flexWrap:'wrap', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', p: 2, transition: '0.5s ease-in-out' }}>
            
             {/* <Box sx={{display:'flex',flexDirection:'row',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="NodeJS" image="nodejs-flat" hoveredImage="nodejs" sx={{}}><CustomTypo   variant="h6" >NodeJS</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="MongoDB" image="mongodb-flat" hoveredImage="mongodb" sx={{}}><CustomTypo   variant="h6" >MongoDB</CustomTypo></CourseCard>
             <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="MySQL" image="mysql-flat" hoveredImage="mysql" sx={{}}><CustomTypo   variant="h6" >MySQL</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Django" image="django-flat" hoveredImage="django" sx={{}}><CustomTypo   variant="h6" >Django</CustomTypo></CourseCard>
           
            {/* </Box> */}
        </Container>
          <Container id="Live Projects" sx={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', p: 2,flexWrap:'wrap', display: view === 'Live Projects' ? 'flex' : 'none', transition: '0.5s ease-in-out' }}>
            {/* <Box sx={{display:'flex' ,flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Chat Application" image="chat-flat" hoveredImage="chat" sx={{}}>
                
                <CustomTypo  variant="h6" sx={{}}>Chat Application </CustomTypo>
                
              </CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Movie Database" image="movie-flat" hoveredImage="movie" sx={{}}><CustomTypo   variant="h6" >Movie Database</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Music Player" image="music-flat" hoveredImage="music" sx={{}}><CustomTypo   variant="h6" >Music Player</CustomTypo></CourseCard>
            {/* </Box> */}
            {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"center"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Social Media" image="social-flat" hoveredImage="social" sx={{}}><CustomTypo   variant="h6" >Social Media</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Ecommerce" image="ecommerce-flat" hoveredImage="ecommerce" sx={{}}><CustomTypo   variant="h6" >Ecommerce</CustomTypo></CourseCard>
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Authentication System" image="auth-flat" hoveredImage="auth" sx={{}}><CustomTypo   variant="h6" sx={{alignItems:'center'}} >Authentication System</CustomTypo></CourseCard>
            {/* </Box> */}
            {/* <Box sx={{display:'flex',flexDirection:'column',justifyContent:"start"}}> */}
              <CourseCard setImageClass={setImageClass} setCourse={setCourse} id="Payment Gateway" image="payment-flat" hoveredImage="payment" sx={{}}><CustomTypo   variant="h6" >Payment Gateway</CustomTypo></CourseCard>
              
            {/* </Box> */}
        </Container>
        </Container>
        <Divider orientation="vertical" sx={{bgcolor:'',height:'60vh'}} />
        <Container sx={{maxWidth:'130vw',backgroundColor:'white',m:2}}>
          <Container sx={{ p: 3 }}>
            <Box sx={{ display: 'flex',justifyContent:'center', flexDirection: 'row' }}>
              <Box className={imageClass} sx={{ backgroundRepeat: 'no-repeat', m:1,ml:0, width: '4rem', height: '4rem' }}></Box>
 <Typography variant="h4" sx={{ color: 'text.secondary', flexGrow: '1' ,display:'flex',alignItems:'center'}}>{course}</Typography>
            </Box>
            <Typography variant="body1" >{courseInfo.Description }</Typography>
          </Container>
          <Card  elevation={4} sx={{p:1,mx:3,backgroundColor:'white',width:'40vw'}}>

            {Object.keys(courseInfo).map((key, index) => (<>
              <Container key={key} sx={{ display: 'flex', flexDirection: 'row',alignItems:'center', backgroundColor: index % 2 === 0 ? 'primary.main' : 'primary.light' }} >
                {key === "Language" || key === "Prerequisites" || key === "Duration" ? (
                  <>
                      <Typography variant="subtitle2" sx={{m:1,color:'#f0f0f0',flexGrow:'1'}}>{key}: </Typography>
                  {courseInfo[key].map((item, index) => (
        <Chip sx={{bgcolor:'primary.dark',height:'25px',color:'#dedede',ml:1,transition:'0.5s ease-in-out'}} label={item} key={index} />
))}
 </>
                ) : key === "Description" ? null : key === "What you will Learn" ? (<>
                    <Accordion elevation={0} sx={{backgroundColor:'primary.light'}}>
        <AccordionSummary sx={{alignItems:'center', display:'flex',height:'2vh',pl:1,color: '#f0f0f0','&.MuiAccordionSummary-content':{mt:'-20px',mb:'-20px'},'&.Mui-expanded': {
        mt:'-10px',mb:'-15px'
      },transition:'0.3s ease'}}
          expandIcon={<ExpandMoreIcon sx={{color: '#f0f0f0'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2" sx={{  }}>{key}? </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p:1,m:0,pt:0}}>
          <Typography variant="subtitle2" sx={{fontWeight:'300',color:'#dedede'}}>{courseInfo[key]}</Typography>
        </AccordionDetails>
      </Accordion>
                  
      
  </>) : (<>
                  <Typography variant="subtitle2" sx={{ m: 1, color: '#f0f0f0', flexGrow: '1',width:'40vw' }}>{key}: </Typography>
      <Typography variant="subtitle2" sx={{m:1,fontWeight:'300',color:'#dedede'}}>{courseInfo[key]}</Typography>
  </>)}
              </Container>
              {/* <Divider/> */}
         </>   ))}
            
          </Card>
          


        </Container>
        
      </Box>
      <Box sx={{height:'100vh'}}>

      </Box>
     <Footer/>
      
    </>
  )
}

export default App
