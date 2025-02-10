import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroText = () => {
    return (
        <Box sx={{
            // border: '1px solid blue',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant='h2' fontWeight={'700'}
                sx={{
                    color: '#993662',
                    backgroundImage: 'linear-gradient(45deg, #993662 21%, #cf52fa 83%, #09a57d 95%, #ea6e01 12%, #d37ded 33%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}
            >
                Artificial Intelligence
            </Typography>
        </Box >
    )
}

export default HeroText