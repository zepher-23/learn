import React from "react";
import { TextField, Box, Grid ,Checkbox,FormGroup,FormControl,FormControlLabel,FormLabel} from '@mui/material';
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
    },
  
}));


const ContactForm = ({isMobile}) => {
    return (
        
        <Box sx={{ backgroundColor: 'secondary.main', p: isMobile ? 1 : 4, px: isMobile ? 1 : 8, mt: isMobile ? 2 : 1, display: 'flex', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            
                
        <Box  boxShadow={4} sx={{backgroundColor:'secondary.main',p:1,width:isMobile? 'auto':'29vw',display:'flex',justifyContent:'center',borderRadius:'20px',my:isMobile ? 2:0,}} >
          <Map isMobile={ isMobile}/>
            </Box>
            
            <Box boxShadow={4} sx={{p:isMobile ? 1:5, display:'flex',flexDirection:'column', justifyContent:'space-evenly', flexGrow: 1, backgroundColor: 'secondary.main', ml: isMobile ? 0:5,my:isMobile ? 2:0, borderRadius: '20px' }}>
               
               
                <Box sx={{display:'flex',flexDirection:isMobile?'column':'row',justifyContent:'start'}}>
                    <CustomTextField label="First Name" variant="outlined" required > </CustomTextField>
                    <CustomTextField label="Second Name" variant="outlined" required> </CustomTextField>
                </Box> 

                <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'start' }} >
                <CustomTextField label="Mobile" type="number" variant="outlined" required > </CustomTextField>
                <CustomTextField label="Email" type="email" variant="outlined" required sx={{width:isMobile ? 'auto':'300px'}} > </CustomTextField>

                </Box>
                <Box sx={{ display: 'flex', flexDirection:'row', justifyContent: 'start',p:'10px' }}>
                    <FormControl component="fieldset" required>
                        <FormLabel component="legend">Reason</FormLabel>
                        <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="Internship"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="Skill Course"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="Project Guidance"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Checkbox color="tertiary" />}
          label="College Admissions"
          labelPlacement="start"
        />
      </FormGroup>
                        
      </FormControl>
                </Box>
            </Box>
           
       
      </Box>
        
    );
};

export default ContactForm;
