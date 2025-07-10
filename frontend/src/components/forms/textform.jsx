import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textform({label}) {
  return (
   
      <TextField id="standard-basic" 
      label={label} 
      sx ={{ width: '100%' }}
      variant="outlined" />
      
    
  );
}
