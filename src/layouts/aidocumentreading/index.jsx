import React, { useRef, useState } from 'react';
import { ChakraProvider, Flex, Input, Button, VStack, Text, InputGroup, InputRightElement, Box, useColorModeValue, Spacer, StackDivider, Divider, Menu, MenuButton, MenuItem, MenuList, ButtonGroup, IconButton } from "@chakra-ui/react";
import { IoSendOutline } from 'react-icons/io5';
import { IoIosMore, IoMdSend } from 'react-icons/io';
import { ImAttachment } from 'react-icons/im';
import { AddIcon } from '@chakra-ui/icons';

const ChatMessage = ({ message, isBot }) => {
    let menuBg = useColorModeValue("white", "secondaryGray.600");

    return (
        <Flex>
            <Text my={2}
                bg={menuBg}
                p={3}
                fontSize='md'
                maxW='95%'
                borderRadius="lg"
                boxShadow="md"
            >
                {message}
            </Text>
        </Flex>
    );
};

const Chatbot = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addMessage = (text, isBot = false) => {
        setMessages([...messages, { text, isBot }]);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;
        addMessage(inputValue);
        // Here you can add logic for handling bot responses
        setInputValue("");
    };
    const fileInputRef = useRef(null);

    const handleFileUpload = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      // Handle file upload logic here
      console.log("File selected:", file);
    };
  

    return (
        <Flex mt='20'>
            <Box w='75%'>
                <VStack p={4} pb='0' maxH="85vh" justifyContent="flex-end">
                    <VStack width="100%" display='block' h='75vh' overflowY='auto'>
                        {messages.map((msg, index) => (
                            <ChatMessage key={index} message={msg.text} isBot={msg.isBot} />
                        ))}
                    </VStack>
                    <Flex width="100%">
                        <InputGroup>
                            <InputRightElement onClick={handleSendMessage}
                                children={<Flex><Box mr='5' mt='2'><IoMdSend cursor="pointer" size='20px' /></Box> </Flex>}
                            />
                            <Input size='lg' value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Send a message ..." />
                        </InputGroup>
                        {/* <Button onClick={handleSendMessage} colorScheme="blue">
                    Send
                </Button> */}
                    </Flex>
                </VStack>
            </Box>
            <Box w='25%'>
                <Button leftIcon={<AddIcon />} variant='outline' borderRadius={5} isFullWidth>
                    NEW CHAT
                </Button>
                <Divider my='10' />
                <ButtonGroup my={2} size='lg' isFullWidth isAttached variant='outline' w='100%'>
                    <Button borderRadius={5} sx={{ width: '-webkit-fill-available' }} fontSize='md' fontWeight='500'>Chat Bot Definition</Button>
                    <IconButton borderRadius={5} aria-label='Add to friends' icon={<ButtonWithMenu />} />
                </ButtonGroup>
                <ButtonGroup my={2} size='lg' isFullWidth isAttached variant='outline' w='100%'>
                    <Button borderRadius={5} sx={{ width: '-webkit-fill-available' }} fontSize='md' fontWeight='500'>Chat Bot Definition</Button>
                    <IconButton borderRadius={5} aria-label='Add to friends' icon={<ButtonWithMenu />} />
                </ButtonGroup>
                <ButtonGroup my={2} size='lg' isFullWidth isAttached variant='outline' w='100%'>
                    <Button borderRadius={5} sx={{ width: '-webkit-fill-available' }} fontSize='md' fontWeight='500'>Chat Bot Definition</Button>
                    <IconButton borderRadius={5} aria-label='Add to friends' icon={<ButtonWithMenu />} />
                </ButtonGroup>
            </Box>
        </Flex>
    );
};
const ButtonWithMenu = () => {
    return (
        <Menu>
            <MenuButton >
            <IoIosMore/> 
            </MenuButton>
            <MenuList>
                <MenuItem >Edit</MenuItem>
                <MenuItem>Delete</MenuItem>
            </MenuList>
        </Menu>
    );
};

const AiDocumentReading = () => {
    return (
        <Box>
            <Chatbot />
        </Box>
    );
};

export default AiDocumentReading;