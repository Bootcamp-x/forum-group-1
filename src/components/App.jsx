import { Box, ChakraProvider, Heading, Link } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import theme from "./Theme";
import Discussion from "../pages/Discussion";

const linkStyles = {
  color: "#ffffffcc",
  transition: "color 0.15s",
  lineHeight: "24px",
  _hover: { color: "#ffffff" },
};

function App() {
  let username = JSON.parse(localStorage.getItem("username") || "{}");

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
          <Box>
            <Link {...linkStyles} marginRight="10px">
              {username.username}{" "}
            </Link>
            <LoginState></LoginState>
          </Box>
        </Box>
      </Box>
      {/* end navbar component */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
function LoginState() {
  let username = JSON.parse(localStorage.getItem("username") || "{}");
  console.log(username.username);
  if (username.username == null) {
    return (
      <Link href="/login" {...linkStyles}>
        Login
      </Link>
    );
  } else {
    return (
      <Link href="/login" {...linkStyles} onClick={Logout}>
        Logout
      </Link>
    );
  }
}

function Logout() {
  localStorage.removeItem("username");
}
export default App;
