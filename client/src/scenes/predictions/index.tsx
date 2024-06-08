import DashboardBox from '@/components/DashboardBox';
import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Predictions = () => {
    const {palette} = useTheme();
  return (
    <DashboardBox height='100%' width='100%' p='1rem'>
      <Typography variant="h1" color={palette.grey[300]}>I am currently working on getting predictions.</Typography>
    </DashboardBox>
  )
}

export default Predictions;

