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
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Added import
import { useRef, useState } from 'react'; // Added useState import


const Canvas = () => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null); // Added state for uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      setUploadedImage(URL.createObjectURL(file)); // Set the image URL to state
      // TODO: Add logic to process and display the uploaded image on the canvas
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

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
          borderRadius: 1,
          display: 'flex', // Added for centering content
          alignItems: 'center', // Added for centering content
          justifyContent: 'center', // Added for centering content
          position: 'relative', // Added for positioning the image
          overflow: 'hidden' // To ensure image does not overflow its container
        }}
      >
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded design"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto', // Ensures image scales down to fit width
              height: 'auto', // Ensures image scales down to fit height
              objectFit: 'contain', // Scales image while maintaining aspect ratio
            }}
          />
        ) : (
          <>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              accept="image/*" // Accepts any image type
            />
            <Button
              variant="contained"
              startIcon={<CloudUploadIcon />}
              onClick={triggerFileUpload}
            >
              Upload Image
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Canvas;