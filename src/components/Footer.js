import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="0px" bgcolor="black" id="footer" >
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', color: 'white' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px', color: 'white' } }} mt="41px" textAlign="center" pb="40px">
      Made by Avanindra Vijay
    </Typography>
  </Box>
);

export default Footer;
