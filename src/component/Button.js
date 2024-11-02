import React from 'react';
import Button from '@mui/material/Button';

const Buttons = ({ variant='outlined' , size='large', onClick , children , sx}) => {
  return (
    <Button variant={variant} size={size} sx={sx} onClick={onClick}>
      {children}
   </Button>
  )
}

export default Buttons