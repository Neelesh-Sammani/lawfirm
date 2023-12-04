import React from 'react';
import logo from '../assets/logo.svg';
import './header.css';
import {Link,Button} from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <div className='header-content'>
        <Link sx={{ color: 'white', textDecoration: 'none', cursor:'pointer' }}>Home</Link>
        <Link sx={{ color: 'white', textDecoration: 'none',cursor:'pointer' }}>Attorneys</Link>
        <Link sx={{ color: 'white', textDecoration: 'none',cursor:'pointer' }}>Practice Areas</Link>
        <Link sx={{ color: 'white', textDecoration: 'none',cursor:'pointer' }}>About us</Link>
      </div>
      <div className='contactBtn'>
        <Button sx={{border:'2px solid white',color:'white',width:'172px',height:'47px'}}>
            Contact now
        </Button>
      </div>
    </div>
  )
}

export default Header;
