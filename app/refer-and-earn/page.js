"use client";

import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion ";
import { Box, Typography } from "@mui/material";

const ReferAndEarn = () => {
  return (
    <>
    <Box
      sx={{
          backgroundColor: "#D32F2F",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          padding: "20px",
        }}
        >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
        Refer a Friend - Be Rewarded
      </Typography>
      <Typography sx={{ mb: 4, textAlign: "center", maxWidth: "600px" }}>
        You will get up to a ₹5000 Amazon gift voucher for every friend who enrolls.
        Your friends get up to 20% discount on their first course.
      </Typography>

      {/* Contact Form */}
      <ContactForm />

    </Box>
      <FAQAccordion />
        </>
  );
};

export default ReferAndEarn;
