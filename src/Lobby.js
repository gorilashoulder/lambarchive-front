
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer,
  Button,
  Center
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function Lobby(props) {
  const navigate=useNavigate();
  return (
    <div>
      <Center>
       <Box h={"1000px"} w={"455px"}>
       <Flex justifyContent="flex-end" mb={2}>
  <Button colorScheme='gray' variant='outline' onClick={()=>navigate("addRepo")}>
    +
  </Button>
</Flex>
       <Box borderWidth="1px" borderRadius="lg" p={4} maxWidth="500px" bg="white" boxShadow="md">
      <Flex>
      <Box border={"1px solid black"} w={"60%"}>
      <Heading as="h3" size="sm" mb={2} border={"1px solid black"}>
        Date
      </Heading>
      <Spacer></Spacer>
      <Heading as="h2" size="lg" mb={4} border={"1px solid black"}>
        Heading
      </Heading>
      <Flex align="center">
        <Flex align="center">
          <StarIcon mr={2} />
          <Text border={"1px solid black"}>Menu Label</Text>
        </Flex>
      </Flex>
      </Box>
      <Spacer></Spacer>
      <Box w={"25%"} border={"1px solid black"}>
        HELLO
      </Box>
      </Flex>
    </Box>
        
       </Box>
      </Center>
    </div>
  );
}

export default Lobby;