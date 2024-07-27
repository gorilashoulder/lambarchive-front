import { Center,Box, Input,Button, Stack ,Text, Flex, Spacer} from '@chakra-ui/react';
import React from 'react';

function MemberLogin(props) {
    return (
        <div>
            <Center w={"100%"} h={"700px"}>
                <Stack  w={"300px"}>
               
                <Input placeholder='이메일'>
                </Input>
                <Input placeholder='비밀번호'>
                </Input>
                <Button>LOGIN</Button>
                <Center>

                
        <Text color={'lightgrey'}>비밀번호찾기</Text>
        <Text ml={4} color={'lightgray'}>회원가입</Text>
                </Center>
        
                </Stack>
            </Center>
        </div>
    );
}

export default MemberLogin;