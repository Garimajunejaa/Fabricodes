import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Stack
} from '@mui/material';
import TableChartIcon from '@mui/icons-material/TableChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PieChartIcon from '@mui/icons-material/PieChart';

const DesignSection = () => {
  const templates = [
    {
      title: 'SWOT Analysis',
      category: 'Table',
      icon: <TableChartIcon sx={{ fontSize: 48, color: '#6C63FF' }} />
    },
    {
      title: 'Meeting Workshop',
      category: 'Table',
      icon: <TimelineIcon sx={{ fontSize: 48, color: '#6C63FF' }} />
    },
    {
      title: 'Comparison Chart',
      category: 'Table',
      icon: <InsertChartIcon sx={{ fontSize: 48, color: '#6C63FF' }} />
    }
  ];

  const categories = [
    { label: 'Table', icon: <TableChartIcon sx={{ fontSize: 24 }} /> },
    { label: 'Timeline', icon: <TimelineIcon sx={{ fontSize: 24 }} /> },
    { label: 'Chart', icon: <InsertChartIcon sx={{ fontSize: 24 }} /> },
    { label: 'Flow chart', icon: <AccountTreeIcon sx={{ fontSize: 24 }} /> },
    { label: 'Pie chart', icon: <PieChartIcon sx={{ fontSize: 24 }} /> }
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#fff' }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          mb: 4,
          pb: 1,
          overflowX: 'auto',
          '::-webkit-scrollbar': {
            height: 6
          },
          '::-webkit-scrollbar-track': {
            bgcolor: '#f1f1f1',
            borderRadius: 3
          },
          '::-webkit-scrollbar-thumb': {
            bgcolor: '#888',
            borderRadius: 3,
            '&:hover': {
              bgcolor: '#555'
            }
          }
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.label}
            variant="text"
            sx={{
              minWidth: 'auto',
              px: 2,
              py: 1,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(108, 99, 255, 0.08)'
              }
            }}
          >
            {category.icon}
            <Typography variant="caption" sx={{ whiteSpace: 'nowrap' }}>
              {category.label}
            </Typography>
          </Button>
        ))}
      </Stack>

      <Grid container spacing={2}>
        {templates.map((template, index) => (
          <Grid item xs={6} key={index}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 2,
                p: 3,
                height: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: '#6C63FF',
                  boxShadow: '0 4px 20px rgba(108, 99, 255, 0.15)'
                }
              }}
            >
              <Box 
                sx={{ 
                  mb: 2,
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)'
                  }
                }}
              >
                {template.icon}
              </Box>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#333'
                }}
              >
                {template.title}
              </Typography>
              <Typography 
                variant="caption"
                sx={{ 
                  color: 'text.secondary',
                  mt: 0.5 
                }}
              >
                {template.category}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignSection;
  