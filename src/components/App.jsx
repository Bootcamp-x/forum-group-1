import { Box, ChakraProvider, Heading, Link } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import theme from "./Theme";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* move this to navbar component */}
      <Box as="nav" background="#ff6600" p="16px" mb="32px" width="100%">
        <Box
          color="white"
          display="flex"
          margin="auto"
          maxW="920px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" {...linkStyles}>
            Chaos news
          </Link>
          <Link href="/login" {...linkStyles}>
            Login
          </Link>
        </Box>
      </Box>
      {/* end navbar component */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
