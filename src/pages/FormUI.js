import React, { useState } from 'react';
import {  TextField, Grid, Typography } from '@mui/material';
import { setBgColor , setLeftHeadingsColor , setLeftTextColor} from '../store/slices/ResumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import ColorPicker from '../component/ColorPicker';

const FormUI = () => {
  const dispatch = useDispatch();

  // use selecters
  const resumeleftBgColor = useSelector((state) => state.resume.bgColorResumeLeft);
  const leftHeadingColor = useSelector((state) => state.resume.leftHeadingColor);
  const leftTextColor = useSelector((state)=> state.resume.leftTextColor);

  // local varible
  const [resumeLeftBg, setResumeLeftBg] = useState(resumeleftBgColor);
  const [ leftHeadings, setLeftHeadings] = useState(leftHeadingColor);
  const [ leftText, setLeftText] = useState(leftTextColor);

  // handlers

  const handleResumeLeftBg = (e) => {
    const newColor = e.target.value;
    setResumeLeftBg(newColor);
    dispatch(setBgColor(newColor));
  };

  const handleLeftHeadings = (e) =>{
    const newColor = e.target.value;
    setLeftHeadings(newColor);
    dispatch(setLeftHeadingsColor(newColor)); 
  }


  const handleLeftText = (e) =>{
    const newColor = e.target.value;
    setLeftText(newColor);
    dispatch(setLeftTextColor(newColor)); 
  }

  // dispatchers

  const handleSetBgColor = (newColor)=>{
    dispatch(setBgColor(newColor))
  }

  const handleSetLeftHeadings = (newColor)=>{
    dispatch(setLeftHeadingsColor(newColor)); 
  }

  const handleSetLeftText = (newColor)=>{
    dispatch(setLeftTextColor(newColor)); 
  }



  return (
    <>
      <Grid container spacing={2} sx={{pb:4}}>

          <Typography sx={{flex:'0 0 100%' , padding:'20px 20px 5px 18px'}} variant='h5'>Customize UI</Typography>

          <Grid item xs={6} className='relative' sx={{py:3}}>
            <TextField
              id="resume-left-bg-input"
              label="Resume Left Background Color"
              type="text"
              variant="standard"
              value={resumeLeftBg}
              onChange={handleResumeLeftBg}
              fullWidth
            />

            <ColorPicker customize={resumeleftBgColor} setCustomization={handleSetBgColor} colors={resumeLeftBg} setColors={setResumeLeftBg}/>
          </Grid>

       
          <Grid item xs={6} className='relative' sx={{py:3}}>
            <TextField
              id="left-headings-input"
              label="Left Headings Input"
              type="text"
              variant="standard"
              value={leftHeadings}
              onChange={handleLeftHeadings}
              fullWidth
            />

            <ColorPicker customize={leftHeadingColor} setCustomization={handleSetLeftHeadings} colors={leftHeadings} setColors={setLeftHeadings}/>
          </Grid>
      

          <Grid item xs={6} className='relative' sx={{py:3}}>
            <TextField
              id="left-text-input"
              label="Left Text Input"
              type="text"
              variant="standard"
              value={leftText}
              onChange={handleLeftText}
              fullWidth
            />

            <ColorPicker customize={leftTextColor} setCustomization={handleSetLeftText} colors={leftText} setColors={setLeftText}/>
          </Grid>

      </Grid>


    </>
  );
}

export default FormUI;
