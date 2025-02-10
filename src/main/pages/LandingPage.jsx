import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navsection/NavBar'
import HeroSection from '../components/hero/HeroSection'
import ControlledAccordions from '../components/ControlledAccordions'
import CardDisplay from '../components/cardSection/CardDisplay'
import BasicTabs from '../components/tabSection/BasicTabs'

const LandingPage = ({ mode, setMode }) => {
    return (
        <Container maxWidth='xl'
        // sx={{ border: '1px solid red' }}
        >
            <Box>
                <NavBar mode={mode} setMode={setMode} />
                <HeroSection />
                <ControlledAccordions />
                <CardDisplay />
                <BasicTabs />
            </Box>
        </Container>
    )
}

export default LandingPage