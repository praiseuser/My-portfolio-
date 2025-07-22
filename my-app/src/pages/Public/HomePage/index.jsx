import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import { heroStyles } from './HeroStyles';
import { Drawer } from '@mui/material';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];
const TYPER_TEXT = 'Developer';

const HomePage = () => {
    const [typedText, setTypedText] = useState('');
    const [typing, setTyping] = useState(true);
    const [index, setIndex] = useState(0);
    const [pause, setPause] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                if (index < TYPER_TEXT.length) {
                    setTypedText((prev) => prev + TYPER_TEXT.charAt(index));
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

    const responsiveStyles = {
        container: {
            minHeight: '100vh',
            width: '100%',
            padding: { xs: '8px', sm: '16px', md: '24px' },
            background: '#0a192f',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: { xs: '12px 8px', sm: '16px 12px', md: '20px 16px' },
            position: 'relative',
        },
        logo: {
            height: { xs: 35, sm: 45, md: 50 },
            width: { xs: 35, sm: 45, md: 50 },
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(255,255,255,0.3)',
        },
        navLinks: {
            display: { xs: 'none', md: 'flex' },
            gap: { md: 3, lg: 4 },
            alignItems: 'center',
            '& > *': {
                color: 'white',
                fontSize: { md: '14px', lg: '16px' },
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                    color: '#00BFFF',
                    transform: 'translateY(-2px)',
                },
            },
        },
        mobileMenuButton: {
            display: { xs: 'flex', md: 'none' },
            color: 'white',
            padding: '8px',
        },
        mobileMenu: {
            display: { xs: mobileMenuOpen ? 'flex' : 'none', md: 'none' },
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '16px',
            flexDirection: 'column',
            gap: 2,
            minWidth: '150px',
            zIndex: 1000,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        },
        mainContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: { xs: '20px 8px', sm: '40px 16px', md: '60px 24px' },
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { xs: 'center', lg: 'flex-start' },
            justifyContent: 'space-between',
            width: '100%',
            gap: { xs: 4, sm: 5, md: 6, lg: 8 },
            textAlign: { xs: 'center', lg: 'left' },
        },
        leftContent: {
            flex: 1,
            maxWidth: { xs: '100%', lg: '600px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', lg: 'flex-start' },
        },
        introText: {
            fontSize: { xs: '18px', sm: '20px', md: '24px', lg: '28px' },
            fontWeight: 600,
            color: 'white',
            marginBottom: { xs: 1, sm: 2 },
            fontFamily: "'Poppins', 'Inter', sans-serif",
        },
        hiAccent: {
            color: '#00BFFF',
            fontSize: { xs: '20px', sm: '22px', md: '26px', lg: '30px' },
        },
        largeText: {
            fontSize: { xs: '24px', sm: '32px', md: '42px', lg: '48px', xl: '56px' },
            fontWeight: 800,
            color: 'white',
            marginBottom: { xs: 2, sm: 3 },
            fontFamily: "'Poppins', 'Inter', sans-serif",
            lineHeight: 1.2,
        },
        developerAccent: {
            color: '#00BFFF',
            textShadow: '0 0 20px rgba(0,191,255,0.5)',
        },
        smallText: {
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            color: 'rgba(255,255,255,0.9)',
            marginBottom: { xs: 3, sm: 4 },
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            maxWidth: { xs: '100%', sm: '500px' },
        },
        buttonContainer: {
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            marginBottom: { xs: 3, sm: 4 },
            flexDirection: { xs: 'column', sm: 'row' },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: '300px', sm: 'none' },
        },
        primaryButton: {
            backgroundColor: '#00BFFF',
            color: 'white',
            width: { xs: '100%', sm: '160px', md: '180px' },
            height: { xs: '44px', sm: '48px', md: '52px' },
            borderRadius: '12px',
            fontFamily: "'Poppins', 'Inter', sans-serif",
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: '0 4px 20px rgba(0,191,255,0.3)',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#009ACD',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(0,191,255,0.4)',
            },
        },
        secondaryButton: {
            borderColor: '#00BFFF',
            color: '#00BFFF',
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            width: { xs: '100%', sm: '160px', md: '180px' },
            height: { xs: '44px', sm: '48px', md: '52px' },
            borderRadius: '12px',
            fontFamily: "'Poppins', 'Inter', sans-serif",
            fontSize: { xs: '14px', sm: '15px', md: '16px' },
            fontWeight: 600,
            textTransform: 'none',
            border: '2px solid #00BFFF',
            transition: 'all 0.3s ease',
            '&:hover': {
                borderColor: '#009ACD',
                backgroundColor: 'rgba(0,191,255,0.1)',
                transform: 'translateY(-2px)',
            },
        },
        socialContainer: {
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            alignItems: 'center',
        },
        socialIcon: {
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            color: '#00BFFF',
            border: '1px solid rgba(0,191,255,0.3)',
            width: { xs: '40px', sm: '44px', md: '48px' },
            height: { xs: '40px', sm: '44px', md: '48px' },
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#00BFFF',
                color: 'white',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px rgba(0,191,255,0.4)',
            },
        },
        darkModeButton: {
            color: 'white',
            padding: '8px',
            '&:hover': {
                color: '#00BFFF',
                transform: 'rotate(180deg)',
            },
            transition: 'all 0.3s ease',
        },
    };

    return (
        <Box sx={responsiveStyles.container}>
            {/* Header */}
            <Box sx={responsiveStyles.header}>
                <Box
                    component="img"
                    src="/logo.jpg"
                    alt="Logo"
                    sx={responsiveStyles.logo}
                />

                {/* Desktop Navigation */}
                <Box sx={responsiveStyles.navLinks}>
                    {navItems.map((item) => (
                        <Typography key={item} sx={{ cursor: 'pointer' }}>
                            {item}
                        </Typography>
                    ))}
                    <IconButton sx={responsiveStyles.darkModeButton} aria-label="toggle dark mode">
                        <DarkModeIcon />
                    </IconButton>
                </Box>

                {/* Mobile Menu Button */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                    <IconButton sx={responsiveStyles.darkModeButton} aria-label="toggle dark mode">
                        <DarkModeIcon />
                    </IconButton>
                    <IconButton
                        sx={responsiveStyles.mobileMenuButton}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="open mobile menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* Mobile Menu */}
                <Box sx={responsiveStyles.mobileMenu}>
                    {navItems.map((item) => (
                        <Typography
                            key={item}
                            sx={{
                                cursor: 'pointer',
                                color: '#333',
                                fontSize: '16px',
                                fontWeight: 500,
                                padding: '8px 0',
                                '&:hover': {
                                    color: '#00BFFF',
                                },
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={responsiveStyles.mainContent}>
                <Box sx={responsiveStyles.contentWrapper}>
                    {/* Left Content */}
                    <Box sx={responsiveStyles.leftContent}>
                        <Typography sx={responsiveStyles.introText}>
                            <span style={responsiveStyles.hiAccent}>Hi</span> I'm Praise Nwachukwu!
                        </Typography>

                        <Typography sx={responsiveStyles.largeText}>
                            Frontend{' '}
                            <span style={{ ...responsiveStyles.developerAccent, whiteSpace: 'nowrap' }}>
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

                        <Typography sx={responsiveStyles.smallText}>
                            "I'm a young frontend developer passionate about building clean and responsive user interfaces.
                            I work mainly with tools like React, MUI, and Tailwind to bring modern web designs to life.
                            I enjoy turning ideas into real products that users can easily interact with."
                        </Typography>

                        {/* Buttons */}
                        <Box sx={responsiveStyles.buttonContainer}>
                            <Button
                                variant="contained"
                                sx={responsiveStyles.primaryButton}
                            >
                                View Projects
                            </Button>

                            <Button
                                variant="outlined"
                                sx={responsiveStyles.secondaryButton}
                            >
                                Contact Me
                            </Button>
                        </Box>

                        {/* Social Icons */}
                        <Box sx={responsiveStyles.socialContainer}>
                            <IconButton sx={responsiveStyles.socialIcon}>
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={responsiveStyles.socialIcon}>
                                <WhatsAppIcon fontSize="small" />
                            </IconButton>
                            <IconButton sx={responsiveStyles.socialIcon}>
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                        </Box>
                        {/* Mobile Drawer */}

                        <Drawer
                            anchor="right"
                            open={mobileMenuOpen}
                            onClose={() => setMobileMenuOpen(false)}
                            PaperProps={{
                                sx: {
                                    backgroundColor: '#0a192f',
                                    color: 'white',
                                    width: '80vw',
                                    maxWidth: 300,
                                    padding: 2,
                                    borderRadius: '16px 0 0 16px',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton
                                        aria-label="close drawer"
                                        onClick={() => setMobileMenuOpen(false)}
                                        sx={{ color: 'white' }}
                                    >
                                        {/* Cancel Icon */}
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
                                            '&:hover': {
                                                color: '#00BFFF',
                                            },
                                        }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                    <IconButton sx={responsiveStyles.socialIcon}>
                                        <FacebookIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton sx={responsiveStyles.socialIcon}>
                                        <WhatsAppIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton sx={responsiveStyles.socialIcon}>
                                        <InstagramIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                    <style>{`
                        @keyframes blink {
                            0%, 100% { border-color: transparent; }
                            50% { border-color: #00BFFF; }
                        }
                    `}</style>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;