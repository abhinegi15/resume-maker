import React, { useState } from 'react';
import { TextField, Grid, Typography, TextareaAutosize } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useDispatch } from 'react-redux';
import { setRightFormData as reduxSetRightFormData } from '../store/slices/ResumeFormDataSlice';
import Buttons from '../component/Button';

const FormRight = () => {
    const dispatch = useDispatch();
    const [rightFormData, setRightFormData] = useState({
        name: '',
        designation: '',
        description: '',
        experience: [
            {
                period: '',
                organization: '',
                designation: '',
                description: '',
            }
        ],
        projects: [
            {
                name: '',
                description: '',
                link: '',
            }
        ],
    })

    const handleFormChange = (e, index, type) => {
        const { id, value } = e.target;
        setRightFormData((prev) => {
            if (type === 'experience') {
                const updatedExperience = [...prev.experience];
                updatedExperience[index][id] = value;
                return { ...prev, experience: updatedExperience };
            } else if (type === 'projects') {
                const updatedProjects = [...prev.projects];
                updatedProjects[index][id] = value;
                return { ...prev, projects: updatedProjects };
            } else {
                return { ...prev, [id]: value };
            }
        });
    };
    

    const handleAddExperience = () => {
        setRightFormData((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                { period: '', organization: '', designation: '', description: '' },
            ],

        }));
    };

    const handleAddProjects = () => {
        setRightFormData((prev) => ({
            ...prev,
            projects: [
                ...prev.projects,
                { name: ' ', description: ' ', link: ' ',}
            ],
        }));
    };

    const handleFormSubmit = () => {
        dispatch(reduxSetRightFormData(rightFormData));
        console.log(rightFormData);
    }
    return (
        <>
            <Grid sx={{ pb: 4 }}>
                <Typography variant='h5' sx={{ padding: '20px 0px 5px 0px' }}>Enter The Following Details</Typography>

                {/* ================ Profile ================ */}

                <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h6' sx={{ flex: '0 0 100%', padding: '30px 19px 20px 16px' }}>Profile</Typography>

                    <Grid item xs={6} className='relative' sx={{ py: 3 }}>
                        <TextField
                            id="name"
                            label="Name"
                            type="text"
                            variant="standard"
                            placeholder='Shubham Rawat'
                            fullWidth
                            value={rightFormData.name}
                            onChange={handleFormChange}
                        />
                    </Grid>


                    <Grid item xs={6} className='relative' sx={{ py: 3 }}>
                        <TextField
                            id="designation"
                            label="Designation"
                            type="text"
                            variant="standard"
                            placeholder='Frontend Developer'
                            fullWidth
                            value={rightFormData.designation}
                            onChange={handleFormChange}
                        />
                    </Grid>


                    <Grid item xs={12} className='relative' sx={{ py: 3 }}>
                        <TextareaAutosize
                            id='description'
                            aria-label="minimum height"
                            minRows={4} placeholder="Description"
                            style={{ resize: 'none', width: '95%', padding: '10px' }}
                            value={rightFormData.description}
                            onChange={handleFormChange}
                        />
                    </Grid>
                </Grid>

                {/* ================ Experience ================ */}

                <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ flex: '0 0 100%', padding: '20px 19px 0px 20px' }}>Experience</Typography>
                    {rightFormData.experience.map((exp, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={4} sx={{ py: 3 }}>
                                <TextField
                                    id="period"
                                    label="Period"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder="2022 - 2023"
                                    value={exp.period}
                                    onChange={(e) => handleFormChange(e, index , 'experience')}
                                />
                            </Grid>
                            <Grid item xs={4} sx={{ py: 3 }}>
                                <TextField
                                    id="organization"
                                    label="Organization Name"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder="Wavy Informatics (Panchkula, Haryana)"
                                    value={exp.organization}
                                    onChange={(e) => handleFormChange(e, index , 'experience')}
                                />
                            </Grid>
                            <Grid item xs={4} sx={{ py: 3 }}>
                                <TextField
                                    id="designation"
                                    label="Designation"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder="Web Designer"
                                    value={exp.designation}
                                    onChange={(e) => handleFormChange(e, index, 'experience')}
                                />
                            </Grid>
                            <Grid item xs={10} sx={{ py: 3 }}>
                                <TextareaAutosize
                                    id="description"
                                    minRows={4}
                                    placeholder="Job Description"
                                    style={{ resize: 'none', width: '95%', padding: '10px' }}
                                    value={exp.description}
                                    onChange={(e) => handleFormChange(e, index, 'experience')}
                                />
                            </Grid>
                        </React.Fragment>
                    ))}
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                        <AddOutlinedIcon className="plus-icon" onClick={handleAddExperience} />
                    </Grid>
                </Grid>


                {/* ================ Projects ================ */}

                <Grid container spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>

                    <Typography variant='h6' sx={{ flex: '0 0 100%', padding: '20px 19px 0px 20px' }}>Projects</Typography>

                    {rightFormData.projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={6} className='relative' sx={{ py: 3 }}>
                                <TextField
                                    id="name"
                                    label="Project Name"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder='School ERP System'
                                    value={project.name}
                                    onChange={(e) => handleFormChange(e, index ,'projects' )}
                                />
                            </Grid>

                            <Grid item xs={6} className='relative' sx={{ py: 3 }}>
                                <TextField
                                    id="link"
                                    label="Link"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    placeholder='https://jusklik.com/'
                                    value={project.link}
                                    onChange={(e) => handleFormChange(e, index, 'projects')}
                                />
                            </Grid>

                            <Grid item xs={10} className='relative' sx={{ py: 3 }}>
                                <TextareaAutosize
                                    id= 'description'
                                    aria-label="minimum height"
                                    minRows={4} placeholder="Description"
                                    value={project.description}
                                    onChange={(e) => handleFormChange(e, index, 'projects')}
                                    style={{ resize: 'none', width: '95%', padding: '10px' }} />
                            </Grid>
                        </React.Fragment>
                    ))}
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                        <AddOutlinedIcon className="plus-icon" onClick={handleAddProjects} />
                    </Grid>

                </Grid>

                <Buttons onClick={handleFormSubmit} >Submit</Buttons>

            </Grid>
        </>
    )
}

export default FormRight