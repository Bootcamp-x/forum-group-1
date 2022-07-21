import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import ModalHome from "../components/ModalHome";
import AppContext from "../components/AppContext";

function Home() {
  if (!localStorage.getItem("username")) {
    window.location = "/login";
  }
  return (
    <AppContext.Consumer>
      {({ discussions }) => {
        return (
          <Box>
            <Container maxW="60%" bg="white" padding={"0"}>
              <OrderedList width={"100%"} padding="0" margin="0">
                <Discussions discussions={discussions}></Discussions>
              </OrderedList>
            </Container>
            <ModalHome></ModalHome>
          </Box>
        );
      }}
    </AppContext.Consumer>
  );
}
function Discussions({ discussions }) {
  return discussions.map((d, index) => (
    <ListItem {...ListItemStyles} key={index}>
      <Link to={`/discussion/${d.id}`} {...HeadingStyles}>
        {d.title}
      </Link>
      <Text {...TextStyles}>{`by ${d.username} ${new Date(
        d.date
      ).toLocaleDateString()}| 1 comments`}</Text>
    </ListItem>
  ));
}

const ListItemStyles = {
  height: "81px",
  borderBottom: "1px solid rgb(238, 238, 238)",
  listStyleType: "none",
  width: "900px",
  padding: "20px 15px",
};
const HeadingStyles = {
  fontSize: "15px",
  fontWeight: "normal",
  color: "rgb(52, 73, 94)",
  fontFamily: "Roboto",

  width: "900px",
  color: "red",
};
const TextStyles = {
  fontSize: "12.75px",
  color: "rgb(153, 153, 153)",
  fontFamily: "Roboto",
  width: "900px",
};
export default Home;
