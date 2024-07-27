import React, { useState } from 'react';
import {
  Center,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  useToast,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';

function AddRepository(props) {
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');
  const [invitedFriends, setInvitedFriends] = useState([]);
  const [friendNickname, setFriendNickname] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 제출 로직 추가
    toast({
      title: "Repository created.",
      description: "We've created your repository for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const addFriend = () => {
    if (friendNickname && !invitedFriends.includes(friendNickname)) {
      setInvitedFriends([...invitedFriends, friendNickname]);
      setFriendNickname('');
    }
  };

  const removeFriend = (nickname) => {
    setInvitedFriends(invitedFriends.filter(friend => friend !== nickname));
  };

  return (
    <Center>
      <Box w="455px" p={6} borderWidth="1px" borderRadius="lg" boxShadow="md">
        <VStack spacing={4} align="stretch">
          <Heading size="lg">Create New Repository</Heading>
          <FormControl>
            <FormLabel>Repository Name</FormLabel>
            <Input value={repoName} onChange={(e) => setRepoName(e.target.value)} placeholder="Enter repository name" />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter repository description" />
          </FormControl>
          <FormControl>
            <FormLabel>Invite Friends (by nickname)</FormLabel>
            <HStack>
              <Input 
                value={friendNickname}
                onChange={(e) => setFriendNickname(e.target.value)} 
                placeholder="Enter friend's nickname" 
              />
              <Button onClick={addFriend} variant='outline'>+</Button>
            </HStack>
          </FormControl>
          <Box>
            {invitedFriends.map((friend, index) => (
              <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="green" m={1}>
                <TagLabel>{friend}</TagLabel>
                <TagCloseButton onClick={() => removeFriend(friend)} />
              </Tag>
            ))}
          </Box>
          <Button colorScheme="gray" onClick={handleSubmit}>Create Repository</Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default AddRepository;