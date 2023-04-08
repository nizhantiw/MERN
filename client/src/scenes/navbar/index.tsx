import React from 'react'
import {useState} from 'react'
import {Link} from "react-router-dom"
import {Box, Typography, useTheme} from "@mui/material"
import FlexBetween from '@/components/FlexBetween';
import ApiIcon from '@mui/icons-material/Api';

type Props = {};
const Navbar=(props: Props) => {
    const {palette} = useTheme();
    const[selected, setSelected]=useState("dashboard");

return( 
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0..75rem">
            {/*Left side of board */}
            <ApiIcon sx={{fontSize: "30px"}}/>
            <Typography variant='h4' fontSize='16px'>
            Finance Dashboard
            </Typography>
        </FlexBetween>
        {/*Right side of board */}
        <FlexBetween gap="2rem">
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link to="/" onClick={() => setSelected("dashboard")}
                style={{
                    color: selected === "dashboard" ? "inherit" : palette.grey[700],
                    textDecoration: "inherit"
                }}>
                Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover": {color: palette.primary[100]}}}>
                <Link to="/forecast" onClick={() => setSelected("forecast")}
                style={{
                    color: selected === "forecast" ? "inherit" : palette.grey[700],
                    textDecoration: "inherit"
                }}>
                Forecast
                </Link>
            </Box>
        </FlexBetween>
    </FlexBetween>
    );
}; 
export default Navbar;
