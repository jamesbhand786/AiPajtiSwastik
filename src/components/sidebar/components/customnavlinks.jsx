import React from 'react';
import { Box, VStack, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';

const CustomNavlinks = () => {
  return (
    <Box bg="gray.200" w="200px" h="100vh" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading size="md">Groups</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdArrowForward} />
            <Text>Group 1</Text>
            <List spacing={2} pl={4}>
              <ListItem>
                <ListIcon as={MdArrowForward} />
                <Text>Item 1</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowForward} />
                <Text>Item 2</Text>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <ListIcon as={MdArrowForward} />
            <Text>Group 2</Text>
            <List spacing={2} pl={4}>
              <ListItem>
                <ListIcon as={MdArrowForward} />
                <Text>Item 3</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={MdArrowForward} />
                <Text>Item 4</Text>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </VStack>
    </Box>
  );
};

export default CustomNavlinks;
