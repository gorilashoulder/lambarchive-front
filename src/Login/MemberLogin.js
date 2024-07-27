import { Center,Box, Input,Button, Stack ,Text, Flex, Spacer,Image} from '@chakra-ui/react';
import React from 'react';

function MemberLogin(props) {
    return (
        <div>
            <Center w={"100%"} h={"550px"}>
                <Stack  w={"300px"}>
                <Center>
                <Image
  src="/Loginlogo.png"
  alt="Logo"
  w={"250px"}
  objectFit="contain"
/>
                </Center>
               
                <Input placeholder='Email'>
                </Input>
                <Input placeholder='Password'>
                </Input>
                <Button>LOGIN</Button>
                <Center>

                
        <Text color={'lightgrey'}>
        Forgot password?</Text>
        <Text ml={4} color={'lightgray'}>Sign in</Text>
                </Center>
        
                </Stack>
            </Center>
        </div>
    );
}

export default MemberLogin;