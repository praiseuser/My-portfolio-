import { colors, fontSizes } from '../../../Theme';

export const heroStyles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: colors.background,
    color: colors.primaryText,
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    width: '100%',
    padding: '24px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: "'Poppins', sans-serif",
  },
  navLinks: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    fontFamily: "'Poppins', sans-serif",
  },
  darkModeButton: {
    color: colors.primaryText,
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 48px',
    gap: '32px',
    flexWrap: 'wrap',
    fontFamily: "'Poppins', sans-serif",
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontFamily: "'Poppins', sans-serif",
  },
  introText: {
    fontSize: fontSizes.medium,
    color: colors.secondaryText,
    fontFamily: "'Poppins', sans-serif",
  },
  largeText: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    lineHeight: 1.1,
    fontFamily: "'Poppins', sans-serif",
  },
  developerAccent: {
    color: colors.accent,
    fontFamily: "'Poppins', sans-serif",
  },
  hiAccent: {
    color: colors.accent, 
    fontFamily: "'Poppins', sans-serif",
  },
  smallText: {
    fontSize: fontSizes.small,
    color: colors.secondaryText,
    marginTop: '12px',
    maxWidth: '500px',
    fontFamily: "'Poppins', sans-serif",
  },
};
