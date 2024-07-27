import React from "react";
import { Flex, Spacer,Box, Center, Stack,useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import UnderNav from "./UnderNav";
// direction="column" justify="start" alignItems="center" minH={"100vh"}
function Home() { 
  const mx = useBreakpointValue({ base: 4, md: 10 });
  
  return (
    <>
      <Navbar/>
      <Stack>  
      <Box mx={mx} mt={14} >
      <Outlet />
      </Box>
      <UnderNav/>
      </Stack>
    </>
  );
}

export default Home;
