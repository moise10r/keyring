import React from 'react';
import Home from './Pages/Home/Home';
import './assets/scss/main.scss';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1dc9d4',
        light: '#a1a1a1',
        dark: '#1dc9d4',
      },
      secondary: {
        main: '#a6a6a6',
        light: '#a6a6a6',
        dark: '#a6a6a6',
      },
      success: {
        main: '#1dc9d4',
        light: '#a1a1a1',
        dark: '#1dc9d4',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
