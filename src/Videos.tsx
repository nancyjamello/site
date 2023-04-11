import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Videos = () => {
  return (
    <Box as="main" w="100%" h="100%">
      <Box
        w="100vw"
        h="100%"
        bgImage={`url(./ytn.jpeg)`}
        bgSize="cover"
        bgPosition="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
      </Box>
    </Box>
  );
};

export default Videos;
