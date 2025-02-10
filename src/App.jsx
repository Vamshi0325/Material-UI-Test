import './App.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LandingPage from './main/pages/LandingPage';
import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

function App() {

  const [mode, setMode] = React.useState('light');

  const darkMode = createTheme({
    palette: {
      mode: mode
    }
  })


  return (
    <ThemeProvider theme={darkMode}>
      <Box bgcolor={"background.default"}>
        <LandingPage mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>

  )
}

export default App

