import React from "react";
import { Box, Text, Spacer, Image } from "@chakra-ui/react";

const VideoSummary = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Spacer />
      <Text> foooo</Text>
      <Spacer />
      <Box boxSize="sm" margin="20px">
        <Image src="./ytn.jpeg" />
      </Box>
    </Box>
  );
};

export default VideoSummary;
