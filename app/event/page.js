import React from "react";
import { Box, Typography, Grid, Card, CardContent, Link as MuiLink } from "@mui/material";
import { School, Star, Assignment, LiveTv, TrendingUp } from "@mui/icons-material";
import Link from "next/link";

const MasterclassSection = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100%",
        position: "relative",
        left: 0,
        background: "linear-gradient(to bottom, #4a00e0, #8e2de2)",
        color: "#fff",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* Title Section */}
      <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "28px", md: "40px" } }}>
        <MuiLink
          component={Link}
          href="/masterclass"
          underline="none"
          color="inherit"
          sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}
        >
          LEJHRO MASTERCLASS
          <School fontSize="large" />
        </MuiLink>
      </Typography>
      <Typography variant="subtitle1" sx={{ mt: 1, fontSize: "18px", opacity: 0.9 }}>
        Learn tech concepts from industry leaders who have been there and done that!
      </Typography>

      {/* Why Join Section */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 6, fontSize: { xs: "22px", md: "30px" } }}>
        WHY JOIN
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: "20px", fontWeight: "500", opacity: 0.9 }}>
        Lejhro Masterclass
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {[
          { icon: <Assignment />, title: "Real", subtitle: "World Topics" },
          { icon: <Star />, title: "Top", subtitle: "Instructors" },
          { icon: <School />, title: "Lejhro", subtitle: "Certificate" },
          { icon: <LiveTv />, title: "Live", subtitle: "Quizzes" },
          { icon: <TrendingUp />, title: "Bonus", subtitle: "Resources" },
        ].map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={2.4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              <CardContent>
                <Box sx={{ fontSize: "50px", color: "#4a00e0", mb: 1 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "18px", color: "#333" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", fontSize: "14px" }}>
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Category Navigation */}
      <Box sx={{ mt: 5, display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
        {["All (16)", "Data Science", "Data Analytics", "Digital Marketing", "Full Stack Development"].map((category, index) => (
          <MuiLink
            key={index}
            href="#"
            underline="none"
            sx={{
              fontWeight: index === 0 ? "bold" : "normal",
              color: "#fff",
              fontSize: "16px",
              padding: "5px 10px",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { opacity: 0.8 },
            }}
          >
            {category}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

export default MasterclassSection;
