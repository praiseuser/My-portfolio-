import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../styles';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant="body2" color="white" align="center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
