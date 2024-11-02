import React from 'react';
import { Drawer , Grid , Box, Typography  } from '@mui/material';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import FormUI from './FormUI';
import { useSelector } from 'react-redux';
import Form from '../component/Form';
import Buttons from '../component/Button';
import FormRight from './FormRight';
import { usePDF } from 'react-to-pdf';

const ResumeMaker = () => {
  const resumeLeftBg = useSelector((state)=> state.resume.bgColorResumeLeft);
  const resumeStyle = {
    resumeLeft :{
      background : resumeLeftBg,
      padding :'20px',
    }
  }

  const [open, setOpen] = React.useState(false);
  const [open_2 , setOpen_2] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleDrawer_2 = (newOpen) => () => {
    setOpen_2(newOpen);
  };

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  const designModeOn =()=>{
     document.designMode = 'on'
  }

  return (
    <>
    <Grid className='printable-outer container-fluid' sx={{ p: 4 , display:'flex' , alignItems:'start' , gap:'20px', justifyContent:'space-around' }}>
    <Grid   className='resume-wrapper-right' sx={{display:'flex' , gap:'20px' , flexWrap : 'wrap'}} >
         <Buttons onClick={toggleDrawer(true)}>Customize Left Area Of Resume </Buttons>
         <Buttons onClick={toggleDrawer_2(true)}>Customize Right Area Of Resume </Buttons>
         <Buttons onClick={() => toPDF()}>Download</Buttons>
         <Buttons onClick={designModeOn}>On Design Mode</Buttons>
      </Grid>
      
       {/* ================ resume ui start ================ */}
      <Grid container spacing={2} ref={targetRef}  className='resume-wrapper printable' >
        <Grid item xs={5} className='grid-left' sx={{...resumeStyle.resumeLeft}} >
          <Box
            className="resume-left"
          >
            <ResumeLeft />
          </Box>
        </Grid>

        <Grid item xs={7} className='grid-rigth'>
          <Box
            className="resume-right"
            sx={{px:3}}
          >
             <ResumeRight />
          </Box>
        </Grid>
      </Grid>
      {/* ================ resume ui end ================ */}



    </Grid>
    <Drawer  open={open} anchor='right' onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper':{width:'100%' ,maxWidth:'600px',padding:'20px'},}}>
        <Box sx={{display:'flex' , justifyContent:'space-between' , mb:3}}>
          <Typography variant='h5'>Customize Resume Left Area</Typography>
          <Buttons onClick={toggleDrawer(false)} >Close</Buttons>
        </Box>
        <FormUI />
        <Form />
    </Drawer>

    <Drawer open={open_2} anchor='right' onClose={toggleDrawer_2(false)} sx={{ '& .MuiDrawer-paper':{width:'100%' ,maxWidth:'600px',padding:'20px'},}}>
        <Box sx={{display:'flex' , justifyContent:'space-between' , mb:3}}>
            <Typography variant='h5'>Customize Resume Left Area</Typography>
            <Buttons onClick={toggleDrawer_2(false)} >Close</Buttons>
        </Box>
        <FormRight />    
    </Drawer>

</>

  );
};

export default ResumeMaker;
