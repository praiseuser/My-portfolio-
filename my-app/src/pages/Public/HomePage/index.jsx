import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import MainContent from './MainContent';
import MobileDrawer from './MobileDrawer';
import { heroStyles } from './HeroStyles';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <Box sx={heroStyles.container}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <MainContent />
      <MobileDrawer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: #00BFFF; }
        }
      `}</style>
    </Box>
  );
};

export default HomePage;