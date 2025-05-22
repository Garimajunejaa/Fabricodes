import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Canvas from './components/Canvas';
import BottomNavigation from './components/BottomNavigation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ee'
    },
    background: {
      default: '#ffffff'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Header />
        <Box sx={{ 
          flex: 1, 
          overflow: 'hidden',
          position: 'relative'
        }}>
          <Canvas />
        </Box>
        <BottomNavigation />
      </Box>
    </ThemeProvider>
  );
}

export default App;