import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppContext from "../components/AppContext";
import ModalHome from "../components/ModalHome";

function Home() {
  const [discussions, setDiscussions] = React.useState(
    JSON.parse(localStorage.getItem("discussions") || "[]")
  );

  return (
    <Box>
      <OrderedList
        backgroundColor={"white"}
        color="white"
        width="900px"
        margin="auto"
      >
        {discussions.map((d, index) => (
          <ListItem
            height="81px"
            borderBottom={"1px solid rgb(238, 238, 238)"}
            listStyleType="none"
            width="900px"
            padding={"20px 15px"}
            key={index}
          >
            <Heading
              fontSize="15px"
              fontWeight={"normal"}
              color={"rgb(52, 73, 94)"}
              fontFamily={"Roboto"}
              lineHeight={"20px"}
              width="900px"
            >
              {d.title}
            </Heading>
            <Text
              fontSize="12.75px"
              color={"rgb(153, 153, 153)"}
              fontFamily={"Roboto"}
              width="900px"
            >
              {d.body}
            </Text>
          </ListItem>
        ))}
      </OrderedList>
      <AppContext.Provider value={{ setDiscussions }}>
        <ModalHome></ModalHome>
      </AppContext.Provider>
    </Box>
  );
}

export default Home;
