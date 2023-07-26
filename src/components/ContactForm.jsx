import React from "react";
import { TextField, Box, Grid ,Checkbox,FormGroup,FormControl,FormControlLabel,FormLabel,Typography, Button} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import Map from "./Map";

const CustomTextField = styled(TextField)(({ theme }) => ({
    margin: '10px',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.secondary.light,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.light,
    },
    '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.light,
      },
      '&.MuiOutlinedInput-input': {
        color:'white'
      },
    '& input': {
      color: 'white', // Set the input text color to white
      },
      '& textarea': {
        color:'white'
    }
    },
  
}));


const ContactForm = ({ isMobile }) => {
  const mangaloreCenter = { lat: 12.873048628255173, lng: 74.8513348660786 }
  const bangaloreCenter = {lat:13.00837293717805, lng:77.6675257144782}
    return (
        
        <Box sx={{ backgroundColor: 'secondary.dark', p: isMobile ? 1 : 4, px: isMobile ? 0 : 8, mt: isMobile ? 2 : 1, display: 'flex', justifyContent: 'center',alignItems:'center', flexDirection: isMobile ? 'column' : 'column',mb:'1px' }}>
            <Typography variant="h6" sx={{display:isMobile ?'flex':'none',justifyContent:'center'}}>Contact</Typography>
                
       
        <Box sx={{display:'flex',flexDirection:isMobile?'column':'row',width:isMobile?'100%':'100%'}}>
          <Box  boxShadow={isMobile ? 0:3} sx={{backgroundColor:'secondary.main',p:isMobile ? 0:1,width:isMobile? 'auto':'19vw',display:'flex',justifyContent:'center',borderRadius:'10px',my:isMobile ? 2:2,alignItems:'center'}} >
          <Map isMobile={isMobile} center={mangaloreCenter} />
          </Box>

          <Box sx={{flexGrow:1,height:'100%',justifyContent:'center'}}>

            <Box sx={{ p: 5, textAlign:'left'}}>
              <Typography variant="h6">Mangalore</Typography>
              <Typography variant="body1">5th floor, Oberle Towers, Balmatta, Mangaluru, Karnataka 575001. </Typography>
                          <Typography variant="body1">Phone : +91 8111843307</Typography>

            </Box>
            <Box sx={{ p:5,textAlign:'right'}}>
              <Typography variant="h6">Bangalore</Typography>
              <Typography variant="body1" sx={{display:'flex'}}>2nd floor #9, new police station, road, SP Naidu Layout, Ramamurthy Nagar, Bengaluru, Karnataka 560016.  </Typography>
            <Typography variant="body1">Phone : +91 8111843307</Typography>
            </Box>
          </Box>
          <Box  boxShadow={isMobile ? 0:3} sx={{backgroundColor:'secondary.main',p:isMobile ? 0:1,width:isMobile? 'auto':'19vw',display:'flex',justifyContent:'center',borderRadius:'10px',my:isMobile ? 2:2,alignItems:'center'}} >
          <Map isMobile={isMobile} center={bangaloreCenter} />
        </Box>
        </Box>
        
            
            <Box boxShadow={3} sx={{width:isMobile?'90vw':'100%',p:isMobile ? 1:2, display:'flex',flexDirection:'column', justifyContent:'space-evenly', flexGrow: 1, backgroundColor: 'secondary.main', mx: isMobile ? 1:2,my:isMobile ? 2:0, borderRadius: '10px' }}>
               
               
                <Box sx={{display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'start'}}>
                    <CustomTextField size="small" label="First Name" variant="outlined" required > </CustomTextField>
                    <CustomTextField size="small" label="Second Name" variant="outlined" required> </CustomTextField>
                </Box> 

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'start' }} >
                <CustomTextField size="small" label="Mobile" type="number" variant="outlined" required > </CustomTextField>
                <CustomTextField size="small" label="Email" type="email" variant="outlined" required sx={{width:isMobile ? 'auto':'300px'}} > </CustomTextField>

                </Box>
                <Box sx={{ display: 'flex', flexDirection:isMobile ? 'column':'row', justifyContent: 'start',p:'10px' }}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Reason</FormLabel>
                        <FormGroup aria-label="reason"  sx={{display:'flex',flexDirection:isMobile ? 'column':'row',justifyContent:'space-between'}}>
        <FormControlLabel 
          control={<Checkbox color="tertiary" />}
          label="Internship"
          labelPlacement={isMobile ?"end":"start"}
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="Skill Course"
          labelPlacement={isMobile ?"end":"start"}
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="Project Guidance"
          labelPlacement={isMobile ?"end":"start"}
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="College Admissions"
          labelPlacement={isMobile ?"end":"start"}
        />
      </FormGroup>
                        
                    </FormControl>
                   
                </Box>
                <Box sx={{display:'flex'}}> 
                        <CustomTextField size="small" label="Write to us..." type="text" variant="outlined" multiline  rows={4}   sx={{width:isMobile ?"auto" : "100%",color:'white',flexGrow:1}} > </CustomTextField>
                </Box>
                <Box sx={{mt:1, display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center':'start' }}>
                <Button  size="large" color="tertiary" variant="contained" sx={{m:isMobile? 2 :1}}>
                Schedule a Call back ?
                </Button>
                <Button size="large" color="primary" variant="contained" sx={{m:isMobile? 2 :1,color:'white'}}>
                Send us a Mail ? 
       </Button>

            </Box>
            </Box>

           
           
            
      </Box>
        
    );
};

export default ContactForm;
