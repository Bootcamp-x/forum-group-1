import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import AppContext from "./AppContext";
function ModalHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const setDiscussionTitle = (e) => {
    setTitle(e.target.value);
  };
  const setDiscussionBody = (e) => {
    setBody(e.target.value);
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <AppContext.Consumer>
      {({ setDiscussions }) => {
        const createDiscussion = () => {
          let username = localStorage.getItem("username");
          username = "userasdasd";
          let date = new Date().toISOString();
          let discussion = { username, title, body, date };
          setDiscussions((state) => {
            const newState = [...state, discussion];
            localStorage.setItem("discussions", JSON.stringify(newState));
            return newState;
          });
        };
        return (
          <>
            <Button {...AddButtonStyles} onClick={onOpen}>
              +
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent
                minW={"514px"}
                minH="360.8px"
                borderRadius={"0px"}
                margin="auto"
                padding={"2rem"}
              >
                <ModalHeader
                  fontSize={"2rem"}
                  fontWeight="normal"
                  margin={"0"}
                  padding="0"
                  maxHeight={"38.4px"}
                >
                  New Discussion
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody pb={6} padding="0">
                  <FormControl padding="0" margin="2em 0px">
                    <Input
                      onInput={setDiscussionTitle}
                      padding={"0.5rem"}
                      ref={initialRef}
                      placeholder="Discussion title"
                      {...InputBorderStyles}
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <Textarea
                      onInput={setDiscussionBody}
                      padding={"0.5rem"}
                      height="91.6px"
                      placeholder="Body title"
                      resize={"none"}
                      {...InputBorderStyles}
                    />
                  </FormControl>
                </ModalBody>

                <ModalFooter padding={"0"}>
                  <Button {...CreateButtonStyles} onClick={createDiscussion}>
                    CREATE EMPLOYEE
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        );
      }}
    </AppContext.Consumer>
  );
}
const AddButtonStyles = {
  color: "white",
  backgroundColor: "rgb(255, 102, 0)",
  height: "55px",
  width: "55px",
  borderRadius: "50%",
  fontSize: "35px",
  fontFamily: "Arial",
  fontWeight: "normal",
  position: "fixed",
  bottom: "25px",
  right: "25px",
};

const CreateButtonStyles = {
  backgroundColor: "rgb(255, 102, 0)",
  minW: "450px",
  margin: "0",
  borderRadius: "0.25rem",
  color: "white",
  fontWeight: "normal",
  fontSize: "12.8px",
  fontFamily: "Arial",
};
const InputBorderStyles = {
  _active: {
    outline: "rgba(255, 102, 0, 0.5);",
    borderColor: "rgba(255, 102, 0, 0.5);",
    boxShadow: "none",
  },
  _focus: {
    outline: "rgba(255, 102, 0, 0.5);",
    borderColor: "rgba(255, 102, 0, 0.5);",
    boxShadow: "none",
  },
};
export default ModalHome;
