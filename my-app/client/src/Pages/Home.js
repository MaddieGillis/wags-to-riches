import React from "react";
// import Navbar from "../components/Navbar";

// import Footer from "../components/Footer";

import { Image, Box, Heading } from "@chakra-ui/react";

function Home  ()  {
  return (
    <div>
      {/* <Navbar /> */}
      <header>
        <Heading color={"white"} fontFamily={"Times New Roman"}>
          Hayden Dillon-Lloyd
        </Heading>
      </header>

      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
