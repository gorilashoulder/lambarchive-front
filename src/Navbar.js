import React from 'react';
import { Text,useDisclosure,Drawer,DrawerBody,DrawerOverlay,DrawerCloseButton,DrawerFooter,DrawerContent,DrawerHeader,Input,Button,Box, Flex,Center } from '@chakra-ui/react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import PostList from './PostList';
import { useNavigate } from 'react-router-dom';
function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [placement, setPlacement] = useState('left');
    const navigate=useNavigate();

    return (
        <div>
        <Box w={"100%"} border={"1px solid lightgray"}>
            <Flex justify="space-between"
        align="center"
        maxW="3xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={2}>
            <Box ref={btnRef} onClick={onOpen}>
                <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "lightgray",}} />
            </Box>  
            <Box>
                LOGO
            </Box>
            <Box onClick={()=>navigate("login")}>
                로그인
            </Box>
            </Flex> 
        </Box>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
            <Text onClick={()=>navigate("post")}>리스트</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </div>
    );
}

export default Navbar;