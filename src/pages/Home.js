import React from 'react';
import { Grid, Typography } from '@mui/material';
import bannerImage from '../assets/images/banner-right.png';
import Buttons from '../component/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2} className='container-fluid banner-wrapper'>
        <Grid md={6} className=''>
             <Typography variant='h1'>Build Your Perfect Resume for Free!</Typography>

             <Typography variant='h5' sx={{pb:4}}>Create a standout resume in minutes with our easy-to-use resume builder. Customize templates, add your experience, and download for free!</Typography>

             <Buttons onClick={()=>navigate('/resume-maker')}>Build Your Resume</Buttons>
        </Grid>

        <Grid md={6} className='' sx={{textAlign:'right'}}>
             <img src={bannerImage} alt='bannerImage' />
          </Grid>

      </Grid>
    </>
  )
}

export default Home