import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import { Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../App.css';  // Make sure this path matches where your CSS is

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
      
    </div>
  );
};

export default Create;
