import { 
  Box, 
  Typography, 
  TextField, 
  InputAdornment, 
  Drawer,
  Grid,
  IconButton,
  Tabs,
  Tab,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import TableChartIcon from '@mui/icons-material/TableChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useState } from 'react';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const DesignPanel = ({ open, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('templates');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const templates = [
    {
      category: 'Table',
      icon: <TableChartIcon sx={{ fontSize: 40 }} />,
      items: [
        { title: 'SWOT Analysis', icon: <AssessmentIcon sx={{ fontSize: 60 }} /> },
        { title: 'Meeting Workshop', icon: <TableChartIcon sx={{ fontSize: 60 }} /> },
        { title: 'Pricing Table', icon: <TableChartIcon sx={{ fontSize: 60 }} /> }
      ]
    },
    {
      category: 'Timeline',
      icon: <TimelineIcon sx={{ fontSize: 40 }} />,
      items: [
        { title: 'Project Timeline', icon: <TimelineIcon sx={{ fontSize: 60 }} /> },
        { title: 'Process Flow', icon: <AccountTreeIcon sx={{ fontSize: 60 }} /> }
      ]
    },
    {
      category: 'Chart',
      icon: <InsertChartIcon sx={{ fontSize: 40 }} />,
      items: [
        { title: 'Bar Chart', icon: <BarChartIcon sx={{ fontSize: 60 }} /> },
        { title: 'Line Chart', icon: <ShowChartIcon sx={{ fontSize: 60 }} /> },
        { title: 'Bubble Chart', icon: <BubbleChartIcon sx={{ fontSize: 60 }} /> }
      ]
    },
    {
      category: 'Flow chart',
      icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
      items: [
        { title: 'Process Flow', icon: <AccountTreeIcon sx={{ fontSize: 60 }} /> },
        { title: 'Decision Tree', icon: <AccountTreeIcon sx={{ fontSize: 60 }} /> }
      ]
    },
    {
      category: 'Pie chart',
      icon: <PieChartIcon sx={{ fontSize: 40 }} />,
      items: [
        { title: 'Pie Chart', icon: <PieChartIcon sx={{ fontSize: 60 }} /> },
        { title: 'Donut Chart', icon: <DonutLargeIcon sx={{ fontSize: 60 }} /> }
      ]
    }
  ];

  const renderContent = () => {
    if (selectedTab === 'templates') {
      return (
        <>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            {templates.map((category) => (
              <Button
                key={category.category}
                variant={selectedCategory === category.category ? "contained" : "outlined"}
                startIcon={category.icon}
                onClick={() => setSelectedCategory(category.category)}
                sx={{ 
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 2
                }}
              >
                {category.category}
              </Button>
            ))}
          </Box>

          <Box sx={{ overflowY: 'auto', pb: 4 }}>
            {(selectedCategory ? templates.filter(t => t.category === selectedCategory) : templates).map((category) => (
              <Box key={category.category} sx={{ mb: 4 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                  {category.category}
                </Typography>
                <Grid container spacing={2}>
                  {category.items.map((item, index) => (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          bgcolor: '#f5f5f5',
                          borderRadius: 2,
                          p: 2,
                          height: 200,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }
                        }}
                      >
                        {item.icon}
                        <Typography sx={{ mt: 2 }}>{item.title}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </>
      );
    } else {
      return (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6">Coming Soon</Typography>
          <Typography color="text.secondary">This feature is under development</Typography>
        </Box>
      );
    }
  };

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: '90vh',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          px: 2,
          pt: 2
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Design</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <TextField
        fullWidth
        size="small"
        placeholder="Search elements"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 2 }}
      />

      <Tabs 
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
        sx={{ mb: 3 }}
      >
        <Tab label="Templates" value="templates" />
        <Tab label="Styles" value="styles" />
      </Tabs>

      {renderContent()}
    </Drawer>
  );
};

export default DesignPanel;