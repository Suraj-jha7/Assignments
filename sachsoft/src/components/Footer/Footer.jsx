import { Box, Typography, Button, TextField, Grid, Chip } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        padding: "50px",
        backgroundColor: "#5909b2",
        color: "white",
      }}
    >
      {/* Left Side */}
      <Box sx={{ flex: 1, paddingRight: { md: "50px" } }}>
        <Typography variant="h5" gutterBottom>
          GET IN TOUCH
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Have a project?
          <br />
          We would love to help
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <Typography variant="h6" gutterBottom>
          I’m interested in...
        </Typography>
        <Box sx={{ marginBottom: "20px" }}>
          <Chip
            label="Development"
            variant="outlined"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <Chip
            label="Web/Product Design"
            variant="outlined"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <Chip
            label="E-Commerce"
            variant="outlined"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Work E-mail" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Contact" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tell us about your project"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
