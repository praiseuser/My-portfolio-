import React from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { heroStyles } from '../HeroStyles';

const MobileDrawer = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      PaperProps={{
        sx: {
          ...heroStyles.mobileDrawer,
          backgroundColor: '#0a192f', // Reverted to original color
          color: 'white', // Adjusted text color for contrast
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1100,
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2, minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            aria-label="close drawer"
            onClick={() => setMobileMenuOpen(false)}
            sx={{ color: 'white' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7a1 1 0 1 0-1.41 1.41L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </IconButton>
        </Box>
        {navItems.map((item) => (
          <Typography
            key={item}
            sx={{
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 600,
              padding: '12px 0',
              color: 'white',
              '&:hover': { color: '#00BFFF' },
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </Typography>
        ))}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <IconButton sx={{ ...heroStyles.socialIcon, color: '#00BFFF', borderColor: 'rgba(0, 191, 255, 0.3)' }}>
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ ...heroStyles.socialIcon, color: '#00BFFF', borderColor: 'rgba(0, 191, 255, 0.3)' }}>
            <WhatsAppIcon fontSize="small" />
          </IconButton>
          <IconButton sx={{ ...heroStyles.socialIcon, color: '#00BFFF', borderColor: 'rgba(0, 191, 255, 0.3)' }}>
            <InstagramIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;