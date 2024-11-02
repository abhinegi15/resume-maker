import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import InputFileUpload from '../component/UploadFile';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setFormData } from '../store/slices/ResumeFormDataSlice';
import Education from '../pages/Education';
import Skills from '../pages/Skills';

const Form = () => {
    const dispatch = useDispatch();
    const [contactData, setContactData] = useState({
        number: '',
        email: '',
        address: '',
    });
    const [educationData, setEducationData] = useState([{ year: '', degree: '', university: '' }]);
    const [skillsData, setSkillsData] = useState([{ skill: '', rating: '' }]);

    const contactDataHandler = (e) => {
        const { name, value } = e.target;
        setContactData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    // Update this function to match the prop name in Education component
    const handleEducationChange = (data) => {
        setEducationData(data);
    };
    
    const handleSkillsChange = (data) => {
        setSkillsData(data);
    };
    

    const handleFormSubmit = () => {
        dispatch(setFormData({ contactData, educationData , skillsData  })); // Dispatch combined data
    };

    return (
        <>
       <Typography sx={{pb:3}} variant='h5'>Enter The Following Details</Typography>

        <Grid item xs={6} className='relative'>
        <InputFileUpload title='upload profile picture'  />
        </Grid> 

            <Typography variant='h6' sx={{ pt:4}}>Contact</Typography>
            <Grid container spacing={2} sx={{ marginBottom: '0rem', flexDirection:'column',  py:2 }}>
                <Grid item xs={6}>
                    <TextField
                        id="phone"
                        label="Phone"
                        name='number'
                        type="number"
                        variant="standard"
                        fullWidth
                        value={contactData.number}
                        onChange={contactDataHandler}
                    />
                </Grid>


                <Grid item xs={6}>
                    <TextField
                        id="email"
                        label="Email"
                        name='email'
                        type="email"
                        variant="standard"
                        value={contactData.email}
                        onChange={contactDataHandler}
                        fullWidth
                    />
                </Grid>


                <Grid item xs={6}>
                    <TextField
                        id="address"
                        label="Address"
                        name='address'
                        type="address"
                        variant="standard"
                        fullWidth
                        value={contactData.address}
                        onChange={contactDataHandler}
                    />
                </Grid>

            </Grid>

            <Education onEducationChange={handleEducationChange} />

            <Skills onSkillsChange={handleSkillsChange}/>

            <Button sx={{ maxHeight: '36px' , maxWidth:'100px' , margin : '0 1.5rem 1rem 1.5rem' }} onClick={handleFormSubmit}>Save</Button>
        </>
    )
}

export default Form