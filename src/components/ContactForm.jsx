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


const ContactForm = ({isMobile}) => {
    return (
        
        <Box sx={{ backgroundColor: 'secondary.main', p: isMobile ? 1 : 4, px: isMobile ? 0 : 8, mt: isMobile ? 2 : 1, display: 'flex', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Typography variant="h6" sx={{display:isMobile ?'flex':'none',justifyContent:'center'}}>Contact</Typography>
                
        <Box  boxShadow={isMobile ? 0:3} sx={{backgroundColor:'secondary.main',p:isMobile ? 0:1,width:isMobile? 'auto':'29vw',display:'flex',justifyContent:'center',borderRadius:'20px',my:isMobile ? 2:0,}} >
          <Map isMobile={isMobile}/>
            </Box>
            
            <Box boxShadow={3} sx={{p:isMobile ? 1:2, display:'flex',flexDirection:'column', justifyContent:'space-evenly', flexGrow: 1, backgroundColor: 'secondary.main', mx: isMobile ? 1:2,my:isMobile ? 2:0, borderRadius: '20px' }}>
               
               
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
                        <FormGroup aria-label="position"  sx={{flexDirection:isMobile ? 'column':'row'}}>
        <FormControlLabel 
          control={<Checkbox color="tertiary" />}
          label="Internship"
          labelPlacement={isMobile ?"end":"start"}
          
          sx={{fontSize:'1px',}}                      
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
