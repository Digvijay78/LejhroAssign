import React from "react";
import { Container, Typography, Link, Box, Grid, Button } from "@mui/material";
import { Twitter, Facebook, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "#fff", padding: "40px 0", borderTop: "3px solid #d32f2f" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Company
            </Typography>
            <Typography variant="body2">
              <Link href="/about" color="inherit" underline="none">
                About
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/blogs" color="inherit" underline="none">
                Blogs
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/enterprise" color="inherit" underline="none">
                Enterprise
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/recruiter" color="inherit" underline="none">
                Lejhro Recruiter
              </Link>
            </Typography>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Support
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" color="inherit" underline="none">
                Contact
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/terms" color="inherit" underline="none">
                Terms of Use
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/privacy" color="inherit" underline="none">
                Privacy Statement
              </Link>
            </Typography>
          </Grid>

          {/* Connect With Us Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Connect with us
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <Link href="#" color="inherit">
                <Twitter fontSize="small" />
              </Link>
              <Link href="#" color="inherit">
                <Facebook fontSize="small" />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn fontSize="small" />
              </Link>
              <Link href="#" color="inherit">
                <YouTube fontSize="small" />
              </Link>
            </Box>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: "#000",
                color: "#000",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#f0f0f0", borderColor: "#000" },
              }}
            >
              Refer and Earn
            </Button>
          </Grid>

          {/* Bootcamp Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" fontWeight="bold">
              Bootcamp
            </Typography>
            <Typography variant="body2">
              <Link href="/data-science" color="inherit" underline="none">
                Data Science Bootcamp
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/data-analyst" color="inherit" underline="none">
                Data Analyst Bootcamp
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/full-stack" color="inherit" underline="none">
                Full Stack Development Bootcamp
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/digital-marketing" color="inherit" underline="none">
                Digital Marketing Bootcamp
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            © 2025 LEJHRO. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
