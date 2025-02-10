import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
    return (
        <Stack direction='row'
            spacing={2}
            justifyContent={'space-between'}
            sx={{
                // border: '1px solid red',
                width: '90%',
                height: { md: '600px', sm: '500px', xs: '600px' },
                marginTop: { xs: '50px', sm: '50px', md: '50px', lg: '10px' },
                marginLeft: 'auto',
                marginRight: 'auto',
                display: { xs: 'block', sm: 'block', md: 'flex' }
            }} >
            <Box flex={2}>
                <HeroText />
            </Box>
            <Box flex={1} sx={{ display: { xs: 'block', sm: 'block', md: 'block' } }}>
                <HeroImage />
            </Box>
        </Stack>
    )
}

export default HeroSection