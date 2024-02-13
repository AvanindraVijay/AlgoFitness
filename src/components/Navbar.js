import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '980px', xs: '40px'}, mt: {sm:'32px', xs: '20px'}, justifyContent: 'none'}} px="20px" id="Navbar">
      <Link to="/">
        <img src={Logo} alt="logo" style={{width: '110px', height: '110px', margin: '2px 20px'}} />
      </Link>
      <Stack 
      direction="row"
      gap="65px"
      fontSize="30px"
      alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'white', borderBottom: '3px solid #FF2625' }} sx={{borderBottom: '3px solid #FF2625', '&:hover': {borderBottom: '3px solid #FF2625', color: '#FF2625'}}} className='nav'>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: 'white' }} sx={{borderBottom: '3px solid #FF2625', '&:hover': {borderBottom: '3px solid #FF2625', color: '#FF2625'}}} className='nav'>Exercises</a>
        <a href="#health" style={{textDecoration: 'none', color: 'white'}} sx={{borderBottom: '3px solid #FF2625', '&:hover': {borderBottom: '3px solid #FF2625', color: '#FF2625'}}} className='nav'>Health</a>
        <a href="#shop" style={{textDecoration: 'none', color: 'white'}} sx={{borderBottom: '3px solid #FF2625', '&:hover': {borderBottom: '3px solid #FF2625', color: '#FF2625'}}} className='nav'>Shop</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
