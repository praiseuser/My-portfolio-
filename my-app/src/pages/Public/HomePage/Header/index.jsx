import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { heroStyles } from '../HeroStyles';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <Box sx={heroStyles.header}>
      <Box component="img" src="/logo.jpg" alt="Logo" sx={heroStyles.logo} />
      <Box sx={heroStyles.navLinks}>
        {navItems.map((item) => (
          <Typography key={item} sx={{ cursor: 'pointer' }}>
            {item}
          </Typography>
        ))}
        <IconButton sx={heroStyles.darkModeButton} aria-label="toggle dark mode">
          <DarkModeIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
        <IconButton sx={heroStyles.darkModeButton} aria-label="toggle dark mode">
          <DarkModeIcon />
        </IconButton>
        <IconButton
          sx={heroStyles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="open mobile menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;