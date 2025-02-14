"use client";

import { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call here
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Refer Friends and Empower them
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />
        <TextField
          label="Your Email"
          name="email"
          fullWidth
          required
          variant="outlined"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="warning" fullWidth>
          Start Referring
        </Button>
      </form>
    </Paper>
  );
};

export default ContactForm;
