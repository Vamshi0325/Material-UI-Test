import { Box } from '@mui/material'
import React from 'react'

const HeroImage = () => {
    return (
        <Box sx={{
            // border: '1px solid black',
            display: 'flex',
            width: { xs: '100%', md: '100%' },
            height: { xs: "100%", sm: "100%", md: "100%" },
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img
                src="assets/AI IMAGE.png"
                alt=""
                style={{
                    width: '100%',
                    height: { xs: "100%", sm: "100%", md: "80%" },

                }} />
        </Box>
    )
}

export default HeroImage