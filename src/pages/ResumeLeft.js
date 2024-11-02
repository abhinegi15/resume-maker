import { Box, Grid, Typography } from '@mui/material'
import React , {forwardRef} from 'react';
import { useSelector } from 'react-redux';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';


const ResumeLeft = ()=> {

  const leftHeadingColor = useSelector((state) => state.resume.leftHeadingColor);
  const leftTextColor = useSelector((state) => state.resume.leftTextColor);

  //  data selectors
  const formData = useSelector((state) => state.resumeData.formData)

  const style = {
    leftHeadings: {
      color: leftHeadingColor,
      borderBottom: `1px solid ${leftHeadingColor}`,
    },
    leftText: {
      color: leftTextColor,
    }
  }

  const profilePicture = useSelector((state) => state.resume.profile);

  const contactInfo = [
    {
      id: 'phone',
      title: 'Phone',
      content: formData.contactData.number,
      icon: <PhoneOutlinedIcon />,
    },

    {
      id: 'email',
      title: 'Email',
      content: formData.contactData.email,
      icon: <EmailOutlinedIcon />
    },

    {
      id: 'address',
      title: 'Address',
      content: formData.contactData.address,
      icon: <HomeOutlinedIcon />
    },

  ]

  // const educationData = formData.educationData;
  const educationData = formData.educationData || []; // Default to an empty array

  const skillData = formData.skillsData || [];
  // console.log(skillData);
  


  return (
    <Grid>
      <Box className='user'>
        <img src={profilePicture} alt='profile' />
      </Box>

      <Box className='contact-holder'>
        <Typography variant='h4' sx={{ pb: 1, ...style.leftHeadings }} > Contact </Typography>
        {contactInfo.map((item) =>
          <Box className='contact-detail-wrapper' key={item.id} >
            {item.icon}
            <Box>
              <Typography variant='h6' sx={{ ...style.leftText }} > {item.title} </Typography>
              {item.id === 'address' ?
                (
                  <Typography variant='h6' sx={{ ...style.leftText }}> {item.content} </Typography>
                )
                :
                (
                  <a href={item.id === 'phone' ? `tel:${item.content}` : `mailto:${item.content}`} target='_blank' rel="noreferrer" style={{ ...style.leftText }}>{item.content}</a>
                )}

            </Box>
          </Box>
        )}

      </Box>

      <Box className='contact-holder' sx={{ pt: 4 }}>
        <Typography variant='h4' sx={{ pb: 1, ...style.leftHeadings }} > Education </Typography>

        <Box className='education' >
          {educationData.length > 0 ? (
            educationData.map((item , index) => (
              <Box key={index} sx={{ pt: 2 }}>
                <Typography variant='h6' className='year' sx={{ ...style.leftText }}>{item.year}</Typography>
                <Typography variant='h4' className='degree' sx={{ ...style.leftText }}>{item.degree}</Typography>
                <Typography variant='h5' className='university' sx={{ ...style.leftText }}>{item.university}</Typography>
              </Box>
            ))
          ) : (
            <Typography variant='h6' sx={{ ...style.leftText }}>No education data available.</Typography>
          )}
        </Box>
      </Box>

      <Box className='contact-holder' sx={{ pt: 4 }}>
        <Typography variant='h4' sx={{ pb: 1, ...style.leftHeadings }} > Skills </Typography>

        <Box className='skills' >
          {skillData.map((item , index) =>
            <Box key={index}>
              <Typography variant='h5' sx={{ ...style.leftText }}>{item.skill}</Typography>
              <Box className='rating'>
                {/* Display filled stars based on rating */}
                {[...Array(parseInt(item.rating))].map((_, index) => (
                  <StarOutlinedIcon key={index} sx={{ color: 'gold' }} />
                ))}
                {/* Display outlined stars for the remaining up to 5 */}
                {[...Array(5 - parseInt(item.rating))].map((_, index) => (
                  <StarOutlineOutlinedIcon key={index +  item.rating} />
                ))}
              </Box>
            </Box>
          )}
        </Box>


      </Box>
    </Grid>

  )
};

export default ResumeLeft