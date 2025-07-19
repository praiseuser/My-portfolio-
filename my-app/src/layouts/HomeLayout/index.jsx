import { Box } from "@mui/material";
import { styles } from "../styles";

const HomeLayout = ({ children }) => {
    return (
        <Box sx={styles.wrap}>
            
            <Box component="main" sx={styles.content}>
                {children}
            </Box>
        </Box>
    );
};

export default HomeLayout;
