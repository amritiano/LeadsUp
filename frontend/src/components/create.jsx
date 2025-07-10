import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import { Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../App.css';  // Make sure this path matches where your CSS is
import TextForm from './forms/textform'; // Assuming you have a TextForm component
import Select from './forms/select'; // Assuming you have a Select component
import MultiselectForm from './forms/multiselectform'; // Assuming you have a MultiselectForm component

const Create = () => {
  const [country, setCountry] = useState([]);
  const [league, setLeague] = useState([]);
  const [characteristics, setCharacteristics] = useState([]);

  console.log("country", country);
  console.log("league", league);
  console.log("characteristics", characteristics);

  const Getdata = () => {
    axiosInstance.get('/countries/')
      .then((res) => setCountry(res.data))
      .catch((err) => console.error('Error fetching countries:', err));

    axiosInstance.get('/leagues/')
      .then((res) => setLeague(res.data))
      .catch((err) => console.error('Error fetching leagues:', err));

    axiosInstance.get('/characteristics/')
      .then((res) => setCharacteristics(res.data))
      .catch((err) => console.error('Error fetching characteristics:', err));
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      <Box className="topbar">
        <AddBoxIcon /> 
        create a new club!
      </Box>
     
      <Box className="formbox">
       
        <Box className="formfield">
          <TextForm label="Club Name" />
        </Box>
       
        <Box className="formfield">
          <TextForm label="City" />
        </Box>
       
        <Box className="formfield">
          <Select 
              label="League" 
              options={league.map(l => ({
                label: l.name,
                value: l.id
              }))} />
        </Box>
       
        <Box className="formfield">
          <Select 
              label="Country" 
              options={country.map(c => ({
                label: c.name,
                value: c.id
              }))} />
            </Box>
          
            <Box className="formfield">
               <TextForm label="Attendance" />
           </Box>

        <Box className="formfield">
          <MultiselectForm
            label="Characteristics"
            options={characteristics.map(c => ({
              id: c.id,
              name: c.name
            }))}
          />
      </Box>
      </Box>
    </div>
  );
};

export default Create;
