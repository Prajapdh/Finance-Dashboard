import {ReactNode, useState} from 'react';
import { Link } from 'react-router-dom';
import PixIcon from '@mui/icons-material/Pix'
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';


const Navbar = () => {
    const {palette} = useTheme();
    const [selected, setSelected] = useState('dashboard');
  return (
    <FlexBetween mb="0.25rem" 
                p='0.5rem 0rem' 
                color={palette.grey[300]}>
        {/* Left Side */}
        <FlexBetween gap='0.75rem'>
            <PixIcon sx={{fontSize: '2rem'}} />
            <Typography variant='h4' fontSize='16px'>Fintrack</Typography>
        </FlexBetween>

        {/* Right Side */}
        <FlexBetween gap='1.5rem'>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                <Link to='/'
                    onClick={()=> setSelected("dashboard")}
                    style={{
                        color: selected === 'dashboard' ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}>Dashboard</Link>
            </Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                <Link to='/predictions'
                    onClick={()=> setSelected("dashboard")}
                    style={{
                        color: selected === 'dashboard' ? "inherit" : palette.grey[700],
                        textDecoration: "inherit"
                    }}>Predictions</Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
