import React, { useState , useEffect } from 'react';
import { TextField, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Skills = ({onSkillsChange}) => {
    const dispatch = useDispatch();

    const [skills, setSkills] = useState([
        { skill: '', rating : '' } 
    ]);

    const handleSkill = (e, index) => {
        const { name, value } = e.target;
        setSkills(prevData => {
            const updatedData = [...prevData];
            updatedData[index] = {
                ...updatedData[index],
                [name]: value,
            };
            return updatedData;
        });
    };

    const handleAddMoreField = () => {
        setSkills(prevData => [
            ...prevData,
            { skill: '', rating : '' } 
        ]);
    };

    useEffect(() => {
        onSkillsChange(skills); 
    }, [skills, onSkillsChange]);

    return (
        <>
            <Typography variant='h6' sx={{}}>Skills</Typography>
            <Grid container justifyContent='end'>
                {skills.map((item, index) => (
                    <Grid key={index} container spacing={2} sx={{mb:5}}>
                        <Grid item xs={6}>
                            <TextField
                                id={`skill${index}`}
                                label="Skill"
                                name="skill"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={item.skill}
                                onChange={(e) => handleSkill(e, index)}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                id={`rating${index}`}
                                label="rate you  in this skill ouf of 5"
                                name="rating"
                                type="text"
                                variant="standard"
                                fullWidth
                                value={item.rating}
                                placeholder='Make sure the Number is less then 6 otherwise you will get an error'
                                onChange={(e) => handleSkill(e, index)}
                            />
                        </Grid>

                    </Grid>
                ))}
                
                <AddOutlinedIcon className='plus-icon'  onClick={handleAddMoreField} />
            </Grid>
        </>
    );
};

export default Skills ;
