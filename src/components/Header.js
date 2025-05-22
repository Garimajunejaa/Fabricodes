import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BarChartIcon from '@mui/icons-material/BarChart';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)({
  minHeight: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  background: 'linear-gradient(90deg, #00C4CC 0%, #7D2AE8 100%)',
  color: 'white'
});

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', gap: 1, ml: 1 }}>
            <IconButton color="inherit" size="small">
              <UndoIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <RedoIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" size="small">
            <BarChartIcon />
          </IconButton>
          <IconButton color="inherit" size="small">
            <ChatIcon />
          </IconButton>
          <IconButton color="inherit" size="small">
            <ShareIcon />
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;