import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import { HeroContent } from './HeroContent';

const HeroSection = () => {
  return (
    <>
      <Container maxWidth="lg">
        {/* Blog Title and Metadata */}
        <Box mt={4} mb={2}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            How Data Analytics Helps in Entrepreneurship
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={1}>
            Updated on 03rd July, 2024 • 5k views • 11 Min read
          </Typography>
        </Box>

        {/* Blog Image */}
        <Box position="relative" width="100%" height={450} mb={4}>
          <Image
            src="/images/heroImage.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
      </Container>

      {/* Content Below Image */}
      <HeroContent />
    </>
  );
};

export default HeroSection;
