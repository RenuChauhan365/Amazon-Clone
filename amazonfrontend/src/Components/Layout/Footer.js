import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled('footer')({
  backgroundColor: 'black',
  color: 'white',
  padding: theme => theme.spacing(2),
  marginTop: 'auto',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Typography variant="body1">
          © {new Date().getFullYear()} Your Website Name. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
