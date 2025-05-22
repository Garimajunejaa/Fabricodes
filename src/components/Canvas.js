import { 
  Box, 
  Typography,
  IconButton,
  Button,
  Stack,
  Paper
} from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


const Canvas = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        overflow: 'auto'
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1600/1133',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
          borderRadius: 1
        }}
      >
        {/* Canvas content will go here */}
      </Box>
    </Box>
  );
};

export default Canvas;