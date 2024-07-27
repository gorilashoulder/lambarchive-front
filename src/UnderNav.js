import React from 'react';
import { Box, Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { FaHome, FaUser, FaList, FaBell, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UnderNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      bg={useColorModeValue('white', 'gray.800')}
      borderTop={1}
      borderStyle="solid"
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      zIndex="1000"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="3xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={2}
      >
        <NavItem icon={FaUser} label="마이" onClick={() => navigate("/profile")} />
        <NavItem icon={FaCalendarAlt} label="예약" onClick={() => navigate("/booking")} />
        <NavItem icon={FaHome} label="Home" onClick={() => navigate("/")} />
        <NavItem icon={FaList} label="Menu" onClick={() => navigate("/menu")} />
        <NavItem icon={FaBell} label="알림" onClick={() => navigate("/notifications")} />
      </Flex>
    </Box>
  );
};

const NavItem = ({ icon, label, onClick }) => {
  return (
    <Flex direction="column" align="center" onClick={onClick}>
      <IconButton
        icon={React.createElement(icon)}
        variant="ghost"
        aria-label={label}
        fontSize="20px"
        mb={1}
        color={useColorModeValue('gray.600', 'gray.200')}
      />
      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.200')}>{label}</Text>
    </Flex>
  );
};

export default UnderNav;