import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import "@fontsource/literata";
import "@fontsource/inter";
import "@fontsource/caveat";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Video from "./Video";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
