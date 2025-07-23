import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { heroStyles } from '../HeroStyles';

const MainContent = () => {
  const [typedText, setTypedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const FIRST_TEXT = 'Developer';

  useEffect(() => {
    if (pause) {
      const pauseTimeout = setTimeout(() => {
        setPause(false);
        setTyping(false);
        setIndex(index);
      }, 8000);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (typing) {
        if (index < FIRST_TEXT.length) {
          setTypedText((prev) => prev + FIRST_TEXT.charAt(index));
          setIndex(index + 1);
        } else {
          setPause(true);
        }
      } else {
        if (index > 0) {
          setTypedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        } else {
          setTyping(true);
        }
      }
    }, typing ? 150 : 200);

    return () => clearTimeout(timeout);
  }, [index, typing, pause]);

  return (
    <Box sx={heroStyles.mainContent}>
      <Box sx={heroStyles.contentWrapper}>
        <Box sx={heroStyles.leftContent}>
          <Typography sx={heroStyles.introText}>
            <span style={heroStyles.hiAccent}>Hi</span> I'm Praise Nwachukwu!
          </Typography>
          <Typography sx={heroStyles.largeText}>
            Frontend{' '}
            <span style={{ ...heroStyles.developerAccent, whiteSpace: 'nowrap' }}>
              {typedText}
              {(typing || !pause) && (
                <span
                  style={{
                    borderRight: '2px solid #00BFFF',
                    animation: 'blink 1s step-end infinite',
                    marginLeft: '2px',
                  }}
                />
              )}
            </span>
          </Typography>
          <Typography sx={heroStyles.smallText}>
            I am a young frontend developer passionate about building clean and responsive user interfaces.
            I work mainly with tools like React, MUI, and Tailwind to bring modern web designs to life.
            I enjoy turning ideas into real products that users can easily interact with.
          </Typography>
          <Box sx={heroStyles.buttonContainer}>
            <Button variant="contained" sx={heroStyles.primaryButton}>
              View Projects
            </Button>
            <Button variant="outlined" sx={heroStyles.secondaryButton}>
              Contact Me
            </Button>
          </Box>
          <Box sx={heroStyles.socialContainer}>
            <IconButton sx={heroStyles.socialIcon}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton sx={heroStyles.socialIcon}>
              <WhatsAppIcon fontSize="small" />
            </IconButton>
            <IconButton sx={heroStyles.socialIcon}>
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;