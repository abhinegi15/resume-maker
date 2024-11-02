import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { setProfile } from '../store/slices/ResumeSlice';
import { useDispatch  } from 'react-redux';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload = ( { title } )=> {
    const dispatch = useDispatch();
    
    const handleFileUpload = (e)=> {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        dispatch(setProfile(url));
    }

  return (
    <>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        {title}
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileUpload}
          multiple
        />
      </Button>
      

      
    </>
  );
}

export default InputFileUpload;