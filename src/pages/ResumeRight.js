import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ResumeRight = () => {
    const resumeRightSide = useSelector((state) => state.resumeData.rightFormData);
    // console.log(resumeRightSide)
    const style = {
        Headings: {
            borderBottom: '1px solid',
            color: ' ',
            fontWeight: '600',
            paddingBottom: '12px'
        },

        expHolder: {
            pt: 3,
            position: 'relative',
            '&::after': {
                content: `''`,
                position: 'absolute',
                width: '1px',
                height: '100%',
                left: '-18px',
                top: '36px',
                background: '#000',
            },
            '&::before': {
                content: `''`,
                position: 'absolute',
                width: '14px',
                height: '14px',
                left: '-25px',
                top: '29px',
                background: '#000',
                borderRadius: '50%',
            },
            '&:nth-last-of-type(1)::after': {
                height: 'calc(100% - 45px)',
            }
        }
    }
    return (
        <>
            <Grid>
                {/* ============== summury ==============  */}
                <Box>
                    <Typography variant='h3'>{resumeRightSide.name}</Typography>
                    <Typography variant='h5'>{resumeRightSide.designation}</Typography>
                    <Typography variant='body' sx={{ paddingTop: '16px' }}>{resumeRightSide.description}</Typography>
                </Box>

                {/* ============== Experince ==============  */}
                <Box sx={{ pt: 4, }}>
                    <Typography variant='h4' sx={{ ...style.Headings }}>Experience</Typography>

                    {resumeRightSide.experience.map((item, index) =>

                        <Box key={index} sx={{ ...style.expHolder }}>
                            <Typography variant='body-2' className='time-period'>{item.period}</Typography>
                            <Typography variant='h6' className='company-name'>
                                {item.organization}
                            </Typography>
                            <Typography variant='h6' className='company-designation'>
                                {item.designation}
                            </Typography>
                            <Typography variant='body' className='exp-desc'>{item.description}</Typography>
                        </Box>
                    )}

                </Box>

                {/* ============== Projects ==============  */}
                <Box sx={{ py:3}}>
                    <Typography variant='h4' sx={{ ...style.Headings }}>Projects</Typography>
                    {resumeRightSide.projects.map((item, index) =>
                    <Box key={index} className='project-holder'>
                        <Typography variant='h6' className='company-name' sx={{ pt: 2 }}>
                            {item.name}
                        </Typography>
                        <Typography variant='body' className='exp-desc'>{item.description}</Typography>
                        {item.link != '' && (
                            <Typography variant='h6' className='key-features' sx={{ fontSize: '18px', pt: 1 }}>Link :  <a href={item.link} target='_blank'>{item.link}</a>
                        </Typography>
                        )}
                        
                    </Box>
                    )}
                </Box>
            </Grid>
        </>
    )
};

export default ResumeRight