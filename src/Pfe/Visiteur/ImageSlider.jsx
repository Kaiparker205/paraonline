import React, { useState } from 'react';
import { Paper, Typography, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

// The array of image objects
const images = [
  {
    src: '/parapharma_images/523cc22efac7803a93431021dda97ceab7f7d035_slider-anti-pigment.jpg',
    title: 'Image 1',
    description: 'This is the first image',
  },
  {
    src: 'parapharma_images/test.jpg',
    title: 'Image 2',
    description: 'This is the second image',
  },
  {
    src: 'parapharma_images/bd1e8245f882132f8acea6aaebd17ea34716458f_Parapharma-1340x600 (1).jpg',
    title: 'Image 3',
    description: 'This is the third image',
  },
];

// The image slider component
const ImageSlider = () => {
  // The state variable for the image index
  const [activeStep, setActiveStep] = useState(0);

  // The function to change the image index
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // The current image object
  const image = images[activeStep];

  return (
    <Paper
      square
      elevation={0}
      style={{
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <img
        src={image.src}
        alt={image.title}
        style={{
          width: '100%',
          height: 255,
          objectFit: 'cover',
        }}
      />
      <Typography variant="h6" component="h1" style={{ padding: 16 }}>
        {image.title}
      </Typography>
      <Typography variant="body2" style={{ padding: 16 }}>
        {image.description}
      </Typography>
      <MobileStepper
        variant="dots"
        steps={images.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={() => handleStepChange(activeStep + 1)}
            disabled={activeStep === images.length - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={() => handleStepChange(activeStep - 1)}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Paper>
  );
};

export default ImageSlider;
