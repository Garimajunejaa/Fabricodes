import { 
    Box, 
    Typography, 
    IconButton, 
    InputAdornment, 
    TextField, 
    Drawer,
    Chip,
    Grid,
    Button,
    Dialog,
    AppBar,
    Toolbar,
    Stack
  } from '@mui/material';
  import { alpha } from '@mui/material/styles';
  import SearchIcon from '@mui/icons-material/Search';
  import CloseIcon from '@mui/icons-material/Close';
  import EmailIcon from '@mui/icons-material/Email';
  import LinkIcon from '@mui/icons-material/Link';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import StarIcon from '@mui/icons-material/Star';
  import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
  import FlagIcon from '@mui/icons-material/Flag';
  import AddIcon from '@mui/icons-material/Add';
  import TextFieldsIcon from '@mui/icons-material/TextFields';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import PublicIcon from '@mui/icons-material/Public';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import { useState } from 'react';
  import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
  import PaletteIcon from '@mui/icons-material/Palette';
  import DiamondIcon from '@mui/icons-material/Diamond';
  import ShapeLineIcon from '@mui/icons-material/ShapeLine';
  import AutoGraphIcon from '@mui/icons-material/AutoGraph';
  import TimelineIcon from '@mui/icons-material/Timeline';
  import HexagonIcon from '@mui/icons-material/Hexagon';
  import PentagonIcon from '@mui/icons-material/Pentagon';
  import CircleIcon from '@mui/icons-material/Circle';
  import SquareIcon from '@mui/icons-material/Square';
  import FilterVintageIcon from '@mui/icons-material/FilterVintage';
  import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
  import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
  import BoltIcon from '@mui/icons-material/Bolt';
  import AcUnitIcon from '@mui/icons-material/AcUnit';
  import WavesIcon from '@mui/icons-material/Waves';
  import React from 'react';
  import DesignSection from './DesignSection';

  const ToolPanel = ({ open, onClose, selectedTool }) => {
    const [fullscreenSection, setFullscreenSection] = useState(null);
  
    const recentlyUsedIcons = [
      { icon: <EmailIcon />, label: 'Email' },
      { icon: <LinkIcon />, label: 'Link' },
      { icon: <LocationOnIcon />, label: 'Location' },
      { icon: <LocationOnIcon color="primary" />, label: 'Location Blue' },
      { icon: <CalendarTodayIcon />, label: 'Calendar' },
      { icon: <PublicIcon />, label: 'Globe' },
      { icon: <GitHubIcon />, label: 'GitHub' },
      { icon: <LinkedInIcon />, label: 'LinkedIn' }
    ];
  
    // Remove the old shapes array with CSS components
    const shapes = [
      { icon: <SquareIcon sx={{ fontSize: 30 }} />, label: 'Square' },
      { icon: <CircleIcon sx={{ fontSize: 30 }} />, label: 'Circle' },
      { icon: <PentagonIcon sx={{ fontSize: 30 }} />, label: 'Pentagon' },
      { icon: <HexagonIcon sx={{ fontSize: 30 }} />, label: 'Hexagon' },
      { icon: <DiamondIcon sx={{ fontSize: 30 }} />, label: 'Diamond' },
      { icon: <TimelineIcon sx={{ fontSize: 30 }} />, label: 'Line' },
      { icon: <AutoGraphIcon sx={{ fontSize: 30 }} />, label: 'Graph' },
      { icon: <WavesIcon sx={{ fontSize: 30 }} />, label: 'Wave' },
      { icon: <StarIcon sx={{ fontSize: 30 }} />, label: 'Star' },
      { icon: <FilterVintageIcon sx={{ fontSize: 30 }} />, label: 'Flower' },
      { icon: <LocalFloristIcon sx={{ fontSize: 30 }} />, label: 'Leaf' },
      { icon: <EmojiNatureIcon sx={{ fontSize: 30 }} />, label: 'Nature' },
      { icon: <BoltIcon sx={{ fontSize: 30 }} />, label: 'Bolt' },
      { icon: <AcUnitIcon sx={{ fontSize: 30 }} />, label: 'Snowflake' }
    ];
    const graphics = [
      { icon: <StarIcon sx={{ fontSize: 30 }} />, label: 'Star' },
      { icon: <CardGiftcardIcon sx={{ fontSize: 30 }} />, label: 'Gift' },
      { icon: <FlagIcon sx={{ fontSize: 30 }} />, label: 'Flag' },
      { icon: <EmojiEmotionsIcon sx={{ fontSize: 30 }} />, label: 'Emoji' },
      { icon: <PaletteIcon sx={{ fontSize: 30 }} />, label: 'Palette' },
      { icon: <AutoAwesomeIcon sx={{ fontSize: 30 }} />, label: 'Sparkle' },
      { icon: <FilterVintageIcon sx={{ fontSize: 30 }} />, label: 'Flower' },
      { icon: <LocalFloristIcon sx={{ fontSize: 30 }} />, label: 'Nature' },
      { icon: <BoltIcon sx={{ fontSize: 30 }} />, label: 'Bolt' }
    ];
  
    const renderFullscreenContent = () => {
      const commonGridStyles = {
        p: 3,
        maxWidth: '100%',
        margin: '0 auto'
      };
  
      const commonItemStyles = {
        aspectRatio: '1',
        border: '2px solid',
        borderColor: 'grey.300',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
        cursor: 'pointer',
        minHeight: '80px', // Increased size
        width: '100%',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'scale(1.05)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }
      };
  
      const commonIconStyles = {
        fontSize: 45 // Increased icon size
      };
  
      switch (fullscreenSection) {
        case 'recently':
          return (
            <Grid container spacing={3} sx={commonGridStyles}>
              {[...recentlyUsedIcons, ...recentlyUsedIcons].map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Box sx={commonItemStyles}>
                    {React.cloneElement(item.icon, { sx: commonIconStyles })}
                  </Box>
                  <Typography 
                    variant="caption" 
                    align="center" 
                    sx={{ 
                      display: 'block', 
                      mt: 1.5,
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          );
  
        case 'shapes':
          return (
            <Grid container spacing={3} sx={commonGridStyles}>
              {[...shapes, ...shapes].map((shape, index) => (
                <Grid item xs={4} key={index}>
                  <Box sx={commonItemStyles}>
                    {React.cloneElement(shape.icon, { sx: commonIconStyles })}
                  </Box>
                  <Typography 
                    variant="caption" 
                    align="center" 
                    sx={{ 
                      display: 'block', 
                      mt: 1.5,
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}
                  >
                    {shape.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          );
  
        case 'graphics':
          return (
            <Grid container spacing={3} sx={commonGridStyles}>
              {[...graphics, ...graphics].map((item, index) => (
                <Grid item xs={4} key={index}>
                  <Box sx={commonItemStyles}>
                    {React.cloneElement(item.icon, { sx: commonIconStyles })}
                  </Box>
                  <Typography 
                    variant="caption" 
                    align="center" 
                    sx={{ 
                      display: 'block', 
                      mt: 1.5,
                      fontWeight: 500,
                      fontSize: '1rem'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          );
  
        default:
          return null;
      }
    };
  
    const renderElementsContent = () => {
      return (
        <>
          <Box 
            sx={{ 
              mb: 3,
              '.MuiChip-root': {
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }
              }
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                overflowX: 'auto',
                pb: 1,
                '::-webkit-scrollbar': {
                  height: 6
                },
                '::-webkit-scrollbar-track': {
                  bgcolor: 'background.paper',
                  borderRadius: 3
                },
                '::-webkit-scrollbar-thumb': {
                  bgcolor: theme => alpha(theme.palette.common.black, 0.2),
                  borderRadius: 3,
                  '&:hover': {
                    bgcolor: theme => alpha(theme.palette.common.black, 0.3)
                  }
                }
              }}
            >
              {['Arrow', 'Line', 'Circle', 'Table', 'Box', 'Frame', 'Square', 'Rectangle', 'Graph', 'Star'].map((item) => (
                <Chip 
                  key={item}
                  label={item} 
                  onClick={() => {}} 
                  sx={{
                    borderRadius: '16px',
                    bgcolor: 'background.paper',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    '&:hover': {
                      bgcolor: 'primary.light',
                      color: 'white'
                    },
                    flexShrink: 0
                  }}
                />
              ))}
            </Stack>
          </Box>
  
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <AutoAwesomeIcon color="primary" />
                Recently used
              </Typography>
              <Button 
                color="primary" 
                onClick={() => setFullscreenSection('recently')}
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  textTransform: 'none',
                  borderRadius: 2
                }}
              >
                See all
              </Button>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: 'auto',
                pb: 1,
                '::-webkit-scrollbar': {
                  height: 6
                },
                '::-webkit-scrollbar-track': {
                  bgcolor: 'background.paper',
                  borderRadius: 3
                },
                '::-webkit-scrollbar-thumb': {
                  bgcolor: alpha('#000', 0.2),
                  borderRadius: 3
                }
              }}
            >
              {recentlyUsedIcons.map((item, index) => (
                <Box
                  key={index}
                  sx={{ 
                    minWidth: 60,
                    aspectRatio: '1',
                    border: '2px solid',
                    borderColor: 'grey.300',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {item.icon}
                </Box>
              ))}
            </Stack>
          </Box>
  
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <ShapeLineIcon color="primary" />
                Shapes
              </Typography>
              <Button 
                color="primary" 
                onClick={() => setFullscreenSection('shapes')}
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: 'none' }}
              >
                See all
              </Button>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: 'auto',
                pb: 1,
                '::-webkit-scrollbar': { height: 6 },
                '::-webkit-scrollbar-track': {
                  bgcolor: 'background.paper',
                  borderRadius: 3
                },
                '::-webkit-scrollbar-thumb': {
                  bgcolor: alpha('#000', 0.2),
                  borderRadius: 3
                }
              }}
            >
              {shapes.map((shape, index) => (
                <Box
                  key={index}
                  sx={{ 
                    minWidth: 60,
                    aspectRatio: '1',
                    border: '2px solid',
                    borderColor: 'grey.300',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {shape.icon}
                </Box>
              ))}
            </Stack>
          </Box>
  
          <Box sx={{ mb: 4 }}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mb: 2 
            }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <AutoAwesomeIcon color="primary" />
                Graphics
              </Typography>
              <Button 
                color="primary" 
                onClick={() => setFullscreenSection('graphics')}
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: 'none' }}
              >
                See all
              </Button>
            </Box>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                overflowX: 'auto',
                pb: 1,
                '::-webkit-scrollbar': { height: 6 },
                '::-webkit-scrollbar-track': {
                  bgcolor: 'background.paper',
                  borderRadius: 3
                },
                '::-webkit-scrollbar-thumb': {
                  bgcolor: alpha('#000', 0.2),
                  borderRadius: 3
                }
              }}
            >
              {graphics.map((item, index) => (
                <Box
                  key={index}
                  sx={{ 
                    minWidth: 60,
                    aspectRatio: '1',
                    border: '2px solid',
                    borderColor: 'grey.300',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {item.icon}
                </Box>
              ))}
            </Stack>
          </Box>
  
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>AI image generator</Typography>
            <Box sx={{ 
              border: '1px dashed grey',
              borderRadius: 2,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 2
            }}>
              <Box sx={{ 
                width: 60,
                height: 60,
                border: '1px solid grey',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <AddIcon />
              </Box>
              <Typography>Generate your own</Typography>
            </Box>
            <Box sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              mb: 2
            }}>
            
              
            </Box>
          </Box>
        </>
      );
    };
  
    // Add categories array
    const categories = ['Arrow', 'Line', 'Circle', 'Table', 'Box', 'Frame', 'Square', 'Rectangle', 'Graph', 'Star'];
  
    const renderPanelContent = () => {
      switch (selectedTool) {
        case 'design':
          return <DesignSection setFullscreenSection={setFullscreenSection} />;
        
        case 'elements':
          return renderElementsContent();
          case 'text':
            return renderElementsContent();
            case 'brand':
              return renderElementsContent();
              case 'uploads':
                return renderElementsContent();
                case 'tools':
                  return renderElementsContent();
                  case 'projects':
                    return renderElementsContent();
                    case 'apps':
                      return renderElementsContent();
                      

        default:
          return (
            <>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Text Styles</Typography>
              <Grid container spacing={2}>
                {['Heading', 'Subheading', 'Body', 'Caption'].map((style) => (
                  <Grid item xs={12} key={style}>
                    <Button fullWidth variant="outlined" startIcon={<TextFieldsIcon />}>
                      {style}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </>
          );

        case 'uploads':
          return (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6">Coming Soon</Typography>
              <Typography color="text.secondary">This feature is under development</Typography>
            </Box>
          );

       
      }
    };

    return (
      <>
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
              pt: 2,
              overflow: 'auto'
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
              {selectedTool}
            </Typography>
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
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '100px',
                bgcolor: 'background.paper'
              }
            }}
          />
  
          {renderPanelContent()}
        </Drawer>
  
        <Dialog
          fullScreen
          open={Boolean(fullscreenSection)}
          onClose={() => setFullscreenSection(null)}
        >
          <AppBar sx={{ position: 'relative', bgcolor: 'white', color: 'text.primary' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setFullscreenSection(null)}
                aria-label="close"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
                {fullscreenSection === 'recently' 
                ? 'Recently Used' 
                : fullscreenSection === 'shapes'
                ? 'Shapes'
                : 'Graphics'}
              </Typography>
            </Toolbar>
          </AppBar>
          {renderFullscreenContent()}
        </Dialog>
      </>
    );
  };
  
  export default ToolPanel;

