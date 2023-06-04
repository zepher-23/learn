import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobItem from "../components/JobItem";
import Footer from "../components/Footer"
import { Typography, Box, Container, Grid, Button, Link, useMediaQuery } from "@mui/material";

const Jobs = () => {
    const isMobile = useMediaQuery('(max-width:768px)')
    const [jobs, setJobs] = useState({})
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true);


const url = 'https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=c637f7a8&app_key=3712b0edd684adfbb39e145f69685641&results_per_page=20&what_or=software%20developer%20content%20writer%20digital%20markerting&what=fresher&where=karnataka&max_days_old=6&sort_by=date'

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

    useEffect(() => {
        console.log(count)
        setCount(count+1)
        findJobs(url).then(result => { 
            setJobs(result)
            setIsLoading(false)
        // result.forEach(element => {
              
            
        //   });
        }).catch(err => {
            console.log(err);
        setIsLoading(false)
        })
        
    },[])
    
    
 
    
    
   
    return (
        <>
            <Navbar />
            <Box sx={{display:'flex',flexDirection:'row'}}>

            
                <Box sx={{display:isMobile ?'none':'flex',justifyContent:'center',alignItems:'center', width: '25vw', maxWidth: '25vw', height: '100vh', backgroundColor: 'secondary.main', position: 'relative', mb: 1 }}>
                    <Box sx={{ p: 2 }}>
                        <Typography sx={{display:'flex', color: 'white',justifyContent:'center',alignItems:'center' }}>Content coming soon !</Typography>
                    </Box>

            </Box>
      
      
            {
                isLoading ? (
                    <Box sx={{height:'50vh',width:isMobile?'100vw':'70vw',display:'flex',justifyContent:'center',alignItems:'center',mt:'150px'}}>
                        <Typography variant="h5" sx={{ color: 'text.tertiary' }}> Loading...</Typography>
                    </Box>
                    ) : (
                            <Box sx={{height:isMobile?'auto':'100vh',width:isMobile?'100vw':'74.5vw',overflow:isMobile?'auto':'scroll'}}>
                     <Box sx={{ display: 'flex',color:'black', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', backgroundColor: 'background.light',minHeight:'70vh',  pt: '150px' }}>
                    <Typography variant="h5" sx={{color:'text.secondary',mb:2}} >Recent Job Postings</Typography>
                    {
                        
                        Object.keys(jobs).map((item) => {
                        
                            
                            return (
      <JobItem
        key={jobs[item].id}
        title={jobs[item].title}
        company={jobs[item].company.display_name}
        description={jobs[item].description}
        location={jobs[item].location.display_name}
        created={jobs[item].created}
        redirect={jobs[item].redirect_url}
      />);
                })
                    }
          
        </Box>
               
               </Box>                 )
                    
            }
                                
        </Box>
            {
                isLoading ? <></>:<Footer /> 

            }
               

    </>
    );
};

export default Jobs;
