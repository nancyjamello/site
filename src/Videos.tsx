import React from "react";
import { Box } from "@chakra-ui/react";

import VideoSummary from "./VideoSummary";

const Videos = () => {
  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        background="#f8f8f8"
        gap="5px"
      >
      <VideoSummary index={0}/>
      <VideoSummary index={1}/>
      <VideoSummary index={2}/>
      <VideoSummary index={3}/>
    </Box>
  );
};

export default Videos;
