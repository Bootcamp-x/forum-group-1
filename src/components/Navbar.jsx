import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const linkStyles = {
  color: "white",
  transition: "color 0.15s",
  // lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function Navbar() {
  return (
    <Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
      <Box
        color="white"
        display="flex"
        margin="auto"
        maxW="920px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/" {...linkStyles}>
          Chaos
        </Link>
        <Link to="/login" {...linkStyles}>
          Login
        </Link>
      </Box>
    </Box>
  );
}
export default Navbar;
