import { Box } from '@mui/material';
import React from 'react';
import { styles } from '../styles';

const Header = () => {
    return (
        <Box sx={styles.header}>
            <Box>
                <h1>My Header</h1>
            </Box>
        </Box>
    );
};

export default Header;
