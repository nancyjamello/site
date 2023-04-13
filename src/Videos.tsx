import React from "react";
import { Box, Text } from "@chakra-ui/react";

import VideoSummary from "./VideoSummary";

const Videos = () => {
  return (
    <Box
        w="100vw"
        h="100%"
        display="flex"
        flexDirection="column"
      >
      <VideoSummary />
      <VideoSummary />
      <VideoSummary />
      <VideoSummary />
    </Box>
  );
};

export default Videos;
