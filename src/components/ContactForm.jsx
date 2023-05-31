import React from "react";
import {TextField,Box, Grid} from '@mui/material';
import Map from "./Map";


const ContactForm = ({isMobile}) => {
    return (
        
        <Box sx={{ backgroundColor: 'secondary.main', p: isMobile ? 1 : 4, px: isMobile ? 1 : 8, mt: isMobile ? 2 : 1, display: 'flex', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            
                
        <Box  boxShadow={4} sx={{backgroundColor:'secondary.main',p:1,width:isMobile? 'auto':'29vw',display:'flex',justifyContent:'center',borderRadius:'20px'}} >
          <Map isMobile={ isMobile}/>
            </Box>
            
        <Box boxShadow={4} sx={{width:'50vw',flexGrow:1,backgroundColor:'secondary.main',ml:5,borderRadius:'20px' }}>
            </Box>
            {console.log(isMobile)}
       
      </Box>
        
    );
};

export default ContactForm;
