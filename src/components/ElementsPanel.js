import { 
  Box, 
  Typography, 
  TextField, 
  InputAdornment, 
  Drawer,
  Chip,
  Grid,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const ElementsPanel = ({ open, onClose }) => {
  const categories = ['Arrow', 'Line', 'Circle', 'Table', 'Box', 'Frame'];
  
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
        <Typography variant="h6">Elements</Typography>
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

      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        {categories.map((category) => (
          <Chip key={category} label={category} onClick={() => {}} />
        ))}
      </Box>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>Recently used</Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={2}>
          <Box component="img" src="/icons/email.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/link.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/location.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/map.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/calendar.png" sx={{ width: '100%' }} />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>Shapes</Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={2}>
          <Box sx={{ width: '100%', aspectRatio: '1', bgcolor: 'black' }} />
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ width: '100%', aspectRatio: '1', bgcolor: 'black', borderRadius: 2 }} />
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ width: '100%', height: 2, bgcolor: 'black', mt: 3 }} />
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ width: '100%', height: 2, bgcolor: 'black', mt: 3 }}>→</Box>
        </Grid>
        <Grid item xs={2}>
          <Box sx={{ width: '100%', aspectRatio: '1', bgcolor: 'black', borderRadius: '50%' }} />
        </Grid>
      </Grid>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>Graphics</Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box component="img" src="/icons/star.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/gift.png" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={2}>
          <Box component="img" src="/icons/bunting.png" sx={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default ElementsPanel;