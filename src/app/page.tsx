"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Paper,
  IconButton,
  Avatar,
  Divider,
  Fab,
  Tooltip,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  LocationOn,
  Code as CodeIcon,
} from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Stack spacing={6}>
          {/* Hero Section */}
          <Box textAlign="center">
            <Typography variant="h2" component="h1" gutterBottom>
              Hello, I'm Kayra Güler
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Ongoing Computer Scientist & Developer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <LocationOn sx={{ verticalAlign: "middle" }} /> Based in Munich, Germany
            </Typography>
          </Box>

          {/* About Section */}
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
              <Avatar
                src="/profile.jpg" // Add your profile image to the public folder
                alt="Profile Picture"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
              <Box>
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm a passionate developer with 3 years of experience in Software Developement. I have experience in building web applications using React, developing ChatBot applications and using Python scripts.
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm currently pursuing a Bachelor's degree in Computer Science at the University of Applied Sciences in Karlsruhe (DHBW Karlsruhe). Currently primarely using Python and react.js. Worked projects include a ChatBot as a web-app for a company and a voluntary website project for the German "Die Linke" Party.
                </Typography>
                <Typography variant="body1">
                  When I'm not coding, you can find me working on personal projects (like this one), playing video games and consuming all sorts of culture (movies, music, books, etc).
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Contact Section */}
          <Box>
            <Typography variant="h4" gutterBottom textAlign="center">
              Let's Connect
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                href="https://github.com/hallowelt100"
                target="_blank"
                aria-label="GitHub"
                sx={{ color: "white" }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/hallowelt100"
                target="_blank"
                aria-label="LinkedIn"
                sx={{ color: "white" }}
              >
                <LinkedIn />
              </IconButton>
        
            </Stack>
            <Box textAlign="center" mt={4}>
              <Button
                variant="contained"
                startIcon={<Email />}
                href="mailto:kayra.gueler32@gmail.com"
                size="large"
                color="primary"
              >
                Get in Touch
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
      
      <Tooltip title="View Source Code of this page" placement="left">
        <Fab
          color="primary"
          aria-label="source code"
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
          }}
          href="https://github.com/hallowelt100/personalsite"
          target="_blank"
        >
          <CodeIcon />
        </Fab>
      </Tooltip>
    </>
  );
}
