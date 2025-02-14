"use client";

import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AccordionMenu from "./AccordionMenu";
import MoreAccordion from "./MoreAccordion";

const Header = () => {
  const bootcamps = [
    { name: "Data Science Bootcamp", duration: "4 Months", icon: "/bootcamp-icon.png" },
    { name: "Data Analyst Bootcamp", duration: "4 Months", icon: "/bootcamp-icon.png" },
    { name: "Full Stack Development Bootcamp", duration: "4 Months", icon: "/bootcamp-icon.png" },
    { name: "Digital Marketing Bootcamp", duration: "4 Months", icon: "/bootcamp-icon.png" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo and Title */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Typography variant="h6">
            <Link href="/" passHref>
              Lejhro Bootcamp
            </Link>
          </Typography>

          {/* AccordionMenu placed just beside the title */}
          <Box ml={2}>
            <AccordionMenu title="Courses" items={bootcamps} />
          </Box>
        </Box>

        {/* Navigation Links */}
        <Button color="inherit">
          <Link href="/refer-and-earn" passHref>
          Refer And Earn
          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/event" passHref>
          Free Masterclass

          </Link>
        </Button>
        <Button color="inherit">
          <Link href="/contact" passHref>
          Enterprise
          </Link>
        </Button>

        <MoreAccordion />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
