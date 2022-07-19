import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: "rgb(242, 243, 245)",
        color: "rgb(52, 73, 94)",
        fontFamily: "'Roboto', sans-serif",
      },
    }),
  },
});
