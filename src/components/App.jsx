import { Box, ChakraProvider, Heading, Link, Switch} from "@chakra-ui/react";
import theme from "./Theme";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Discussion() {
  const { id } = useParams();
  return (
    <Box color={"red"} maxW="920px" margin="auto" fontSize={"20px"}>
      Hola {id}
    </Box>
  );
}
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
         {/* cosas dinamicas  */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discussion/:id" element={<Discussion />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
