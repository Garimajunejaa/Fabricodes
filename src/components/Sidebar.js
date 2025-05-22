import { Box, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import GridViewIcon from '@mui/icons-material/GridView';
import BrushIcon from '@mui/icons-material/Brush';

const menuItems = [
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <FolderIcon />, label: 'Projects' },
  { icon: <GridViewIcon />, label: 'Templates' },
  { icon: <BrushIcon />, label: 'Brand' }
];

const Sidebar = () => {
  return (
    <Box sx={{ 
      width: '72px',
      bgcolor: '#fff',
      borderRight: '1px solid rgba(0,0,0,0.12)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item, index) => (
          <ListItem 
            key={index}
            button
            sx={{ 
              flexDirection: 'column',
              height: '72px',
              justifyContent: 'center',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
            }}
          >
            <ListItemIcon sx={{ minWidth: 'auto', color: 'text.primary' }}>
              {item.icon}
            </ListItemIcon>
            <Typography variant="caption" sx={{ mt: 0.5 }}>
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;