"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Why Refer?",
    answer:
      "We’ve heard that many learners have amplified the impact of their program by taking it alongside friends and colleagues. Both you and your friend will receive a discount on your program fees. You can refer as many friends as you like.",
  },
  {
    question: "Who can Refer?",
    answer: "Anyone who is enrolled in our programs can refer a friend.",
  },
  {
    question: "Can I still refer friends if I have already taken a course?",
    answer: "Yes, you can still refer your friends even if you have completed a course.",
  },
  {
    question: "How to Refer?",
    answer:
      "Simply share your referral link with your friends. When they sign up using your link, you will be eligible for a reward.",
  },
  {
    question: "How will I receive the reward?",
    answer: "You will receive the reward via email or as a discount on your next purchase.",
  },
  {
    question: "Will I get referral credit if a friend already exists in Lejhro's database?",
    answer: "No, referral rewards are only applicable for new users.",
  },
  {
    question: "Do my friends need to use a special coupon code?",
    answer: "Yes, they need to use your unique referral code during checkout.",
  },
];

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            marginBottom: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden", // Prevents sharp corners when expanded
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              backgroundColor: "#f8f8f8",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "20px" }}>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQAccordion;
