import React from "react";
import Navbar from "../components/Navbar";
import JobItem from "../components/JobItem";
import { Typography, Box, Container, Grid, Button, Link, useMediaQuery } from "@mui/material";

const Jobs = () => {
  const isMobile = useMediaQuery('(max-width:768px)')
const url = 'https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=ce5edff6&app_key=d1a54da95c45ae1383dff804ff0c8b13&results_per_page=40&what=software%20developer&max_days_old=6'


    const findJobs = async(url) => {
        try {
	const response =await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
	
            const result = await response.json();
            return result.results;


} catch (error) {
	console.error(error);
    }
    
    }

    
    
    findJobs(url).then(result => { 
        console.log(result[0].description)
        result.forEach(element => {
              
            
          });
      }).catch(err =>{console.log(err)})
    
   
    return (
          <>
      
      <Box>
        <Navbar />
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'background.medium', height: '100vh', width: '100vw' }}>
                    <JobItem/>
          
        </Box>

      </Box>
    </>
    );
};

export default Jobs;
