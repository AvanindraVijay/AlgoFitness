import React from 'react';
import { Box } from '@mui/material';
import HeroBannerImage1 from '../assets/images/banner1.jpg'; // Replace with the correct path

const HeroBanner1 = () => {
  return (
    <Box>
        <img src={HeroBannerImage1} alt="hero-banner1" className="hero-banner-img1" />
    </Box>
  );
};

export default HeroBanner1;
