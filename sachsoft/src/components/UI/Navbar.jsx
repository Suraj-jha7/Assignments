import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
  TextField,
} from "@mui/material";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            SACHISOFT
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Careers</Button>
          <Button color="inherit">Let's talk</Button>
        </Toolbar>
      </AppBar>
      <Container>
        {/* Banner Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h3" gutterBottom>
            AT SACHISOFT
          </Typography>
          <Typography variant="h5" gutterBottom>
            We revolutionize your technological ideas into reality
          </Typography>
          <Button variant="contained" color="secondary">
            Get in touch
          </Button>
        </Box>

        {/* Services Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="h6">Our Services</Typography>
              <ul>
                <li>E-Commerce</li>
                <li>Marketing</li>
                <li>Enterprise Solutions</li>
                <li>UI/UX Design</li>
                <li>Digital Automation Services (DAS)</li>
                <li>Mobile Services (MS)</li>
                <li>SEO</li>
                <li>Cloud & Project Management</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* Add your illustration here */}
          </Grid>
        </Grid>

        {/* Process Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h4">OUR PROCESS</Typography>
          <Typography variant="h6">
            We bring your ideas to life through built
          </Typography>
          <Typography variant="body1">
            We harness cutting-edge tech to craft resilient, scalable, and
            business-centric IT solutions with expertise.
          </Typography>
        </Box>

        {/* Testimonials Section */}
        <Box my={4}>
          <Typography variant="h4" textAlign="center">
            TESTIMONIALS
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: 16 }}>
                <Typography variant="body1">
                  "Sacchsoft has truly transformed the way we do business. Fast,
                  reliable, and innovative. They've resolved our tech issues
                  swiftly and efficiently, every time."
                </Typography>
                <Typography variant="subtitle1">
                  John Doe, CEO, XYZ Company
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} style={{ padding: 16 }}>
                <Typography variant="body1">
                  "Sacchsoft has truly transformed the way we do business. Fast,
                  reliable, and innovative. They've resolved our tech issues
                  swiftly and efficiently, every time."
                </Typography>
                <Typography variant="subtitle1">
                  Alice Rockwood, CEO, ABC
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Team Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h4">OUR TEAM</Typography>
          <Grid container spacing={3}>
            {/* Add team member photos and details here */}
          </Grid>
        </Box>

        {/* Clients Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h4">OUR CLIENTS</Typography>
          <Grid container spacing={3}>
            {/* Add client logos here */}
          </Grid>
        </Box>

        {/* Blog Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h4">OUR BLOG</Typography>
          <Grid container spacing={3}>
            {/* Add blog post previews here */}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h4">CONTACT US</Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </form>
        </Box>

        {/* Footer Section */}
        <Box my={4} textAlign="center">
          <Typography variant="h5">10+ INDUSTRY YEARS</Typography>
          <Typography variant="h5">
            $10M REVENUE GENERATED FOR CLIENTS
          </Typography>
          <Typography variant="h6">You dream it. We build it.</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default App;
