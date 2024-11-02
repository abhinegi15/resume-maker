import React, { useState , useEffect } from 'react';
import { TextField, Grid, Typography } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Education = ({onEducationChange}) => {

    const [education, setEducation] = useState([
        { year: '', degree: '', university: '' } // Initial education data
    ]);

    const handleEducation = (e, index) => {
        const { name, value } = e.target;
        setEducation(prevData => {
            const updatedData = [...prevData];
            updatedData[index] = {
                ...updatedData[index],
                [name]: value,
            };
            return updatedData;
        });
    };

    const handleAddMoreField = () => {
        setEducation(prevData => [
            ...prevData,
            { year: '', degree: '', university: '' } 
        ]);
    };

    useEffect(() => {
        onEducationChange(education); // Pass education data up whenever it changes
    }, [education, onEducationChange]);

    return (
        <>
            <Typography variant='h6' sx={{ }}>Education</Typography>
            <Grid container justifyContent='end'>
                {education.map((edu, index) => (
                    <Grid key={index} container spacing={2} sx={{ mb:5 }}>
                        <Grid item xs={4}>
                            <TextField
                                id={`year${index}`}
                                label="Year"
                                name="year"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={edu.year}
                                onChange={(e) => handleEducation(e, index)}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id={`degree${index}`}
                                label="Degree"
                                name="degree"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={edu.degree}
                                onChange={(e) => handleEducation(e, index)}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                id={`university${index}`}
                                label="University"
                                name="university"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={edu.university}
                                onChange={(e) => handleEducation(e, index)}
                            />
                        </Grid>
                    </Grid>
                ))}
                
                <AddOutlinedIcon className='plus-icon' onClick={handleAddMoreField} />
            </Grid>
        </>
    );
};

export default Education;
