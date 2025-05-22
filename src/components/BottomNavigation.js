import { Paper, Box } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GridViewIcon from '@mui/icons-material/GridView';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import BrushIcon from '@mui/icons-material/Brush';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import AppsIcon from '@mui/icons-material/Apps';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { useState } from 'react';
import ToolPanel from './ToolPanel';

const BottomNavigation = () => {
  const [selectedTool, setSelectedTool] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const tools = [
    { label: 'Design', icon: <DesignServicesIcon />, value: 'design' },
    { label: 'Elements', icon: <GridViewIcon />, value: 'elements' },
    { label: 'Text', icon: <TextFieldsIcon />, value: 'text' },
    { label: 'Brand', icon: <BrushIcon />, value: 'brand' },
    { label: 'Uploads', icon: <CloudUploadIcon />, value: 'uploads' },
    { label: 'Tools', icon: <BuildIcon />, value: 'tools' },
    { label: 'Projects', icon: <FolderIcon />, value: 'projects' },
    { label: 'Apps', icon: <AppsIcon />, value: 'apps' },
    { label: 'Magic Media', icon: <AutoFixHighIcon />, value: 'magic-media' },
    { label: 'Google Photos', icon: <PhotoLibraryIcon />, value: 'google-photos' }
  ];

  const handleToolClick = (value) => {
    setSelectedTool(value);
    setIsPanelOpen(true);
  };

  return (
    <>
      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0,
          borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          bgcolor: 'white'
        }} 
        elevation={3}
      >
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none',
            pb: 1
          }}
        >
          {tools.map((tool) => (
            <Box
              key={tool.value}
              onClick={() => handleToolClick(tool.value)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '80px',
                pt: 1,
                cursor: 'pointer',
                color: selectedTool === tool.value ? 'primary.main' : 'text.secondary',
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              {tool.icon}
              <Box
                component="span"
                sx={{
                  fontSize: '0.75rem',
                  mt: 0.5,
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                {tool.label}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>

      <ToolPanel 
        open={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)}
        selectedTool={selectedTool}
      />
    </>
  );
};

export default BottomNavigation;