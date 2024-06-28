import { HamburgerIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, FormControl, FormLabel, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Progress, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Stack, Switch, Text, Tooltip, VStack, useColorModeValue, useDisclosure, useNumberInput } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaMicrophone, FaUnlockAlt } from 'react-icons/fa'
import {
    Icon,
    SimpleGrid,
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { FaImage } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoPlay } from "react-icons/io5";
import BrainGif from 'assets/img/layout/bii.gif';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';
import { ImAttachment } from 'react-icons/im';
import { TbMicrophone } from "react-icons/tb";

export default function AdminHome() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 0.6,
            defaultValue: 0.5,
            min: 0.1,
            max: 1,
            precision: 0.2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
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
        <Box position={'relative'} height={'95vh'}>
            <Box pt={{ base: "80px", md: "50px", xl: "100px" }}>
                <Box mt={2}>
                    <Box textAlign={'end'}>
                        <Button ref={btnRef} borderRadius={5} onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>
                    </Box>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            {/* <Box m={5}>
                                <Image src={BrainGif} borderRadius='0' />
                                <Flex w="100%" alignItems={'center'}>
                                    <Avatar
                                        bg="#11047A"
                                        size="md"
                                        borderRadius={5} src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80'
                                    />
                                    <Text ml={2}
                                        fontSize="xs"
                                        fontWeight="400"
                                        lineHeight='20px'
                                    >
                                        Model <Text fontSize="sm" fontWeight="500" >
                                            ArtShaper V3
                                        </Text>
                                    </Text>
                                </Flex>
                            </Box>
                            <Divider /> */}
                            <DrawerCloseButton />
                            <DrawerBody sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <Box my={6}>
                                        <Text fontSize='md' fontWeight={500} my={2}>Creativity Heat</Text>
                                        <Flex>
                                            <Slider aria-label='slider-ex-1' defaultValue={1}>
                                                <SliderTrack>
                                                    <SliderFilledTrack />
                                                </SliderTrack>
                                                <SliderThumb />
                                            </Slider>
                                            <Text fontSize='md' fontWeight={500} ml='4'>0.5</Text>
                                        </Flex>
                                    </Box>
                                    <Box my={6}>
                                        <Text fontSize='md' fontWeight={500} my={2}>Intelligence Scale</Text>
                                        <Flex>
                                            <Slider aria-label='slider-ex-1' defaultValue={0}>
                                                <SliderTrack>
                                                    <SliderFilledTrack />
                                                </SliderTrack>
                                                <SliderThumb />
                                            </Slider>
                                            <Text fontSize='md' fontWeight={500} ml='4'>2</Text>
                                        </Flex>
                                    </Box>
                                    <Box sx={{ my: '3rem' }}>
                                        <Text fontSize='xs' fontWeight={400}>Unlock Your Creativity With These Complimentary Resources</Text>
                                    </Box>
                                    {/* <Button borderRadius={5} fontSize="sm">
                                    5{" "}
                                    <Stack direction="row" h="30px" p={2}>
                                        <Divider orientation="vertical" />
                                        <Text fontSize="xs" fontWeight="400">
                                            Tokens Remains
                                        </Text>
                                    </Stack>
                                </Button> */}
                                    <Box mt={8}>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Word Wizardry</Text>
                                                <Text fontSize='xs' fontWeight={500}>2/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={5} />
                                        </Box>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Pictorial Vision </Text>
                                                <Text fontSize='xs' fontWeight={500}>3/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={40} />
                                        </Box>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Audio Artistry</Text>
                                                <Text fontSize='xs' fontWeight={500}>1/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={20} />
                                        </Box>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Cinematic Crafting</Text>
                                                <Text fontSize='xs' fontWeight={500}>0.5/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={10} />
                                        </Box>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Speech Symphony</Text>
                                                <Text fontSize='xs' fontWeight={500}>0.5/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={70} />
                                        </Box>
                                        <Box my={6}>
                                            <Flex direction='row' alignItems={'baseline'} justifyContent={'space-between'}>
                                                <Text fontSize='sm' fontWeight={500} mb={4}>Genius Pulse</Text>
                                                <Text fontSize='xs' fontWeight={500}>0.5/6</Text>
                                            </Flex>
                                            <Progress size='sm' width={'100%'} value={30} />
                                        </Box>
                                    </Box>
                                    {/* <Input placeholder='' /> */}
                                    {/* <Flex w="100%" mt={8}>
                                    <FaUnlockAlt />
                                    <Text ml={4}
                                        fontSize="sm"
                                        fontWeight="500"
                                        lineHeight='20px'
                                    >
                                        Api & Playground requests will not be used to train our models.
                                        <Text fontSize="xs" mt={2} fontWeight="400" >
                                            Learn more

                                        </Text>
                                    </Text>
                                </Flex> */}
                                </Box>
                            </DrawerBody>

                            <DrawerFooter>
                                {/* <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button> */}
                                <Button colorScheme='blue'>Save</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
                <Box textAlign='center' mb='4rem'>
                    <Box my='5'>
                        <Text fontSize="4xl" fontWeight="600">
                            Unleash Your Creativity with AI
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize="1xl" fontWeight="400">
                            Generate your ideas into stunning visuals
                        </Text>
                    </Box>
                </Box >
                <SimpleGrid bgColor={'none'}
                    columns={{ base: 1, md: 3, lg: 4, "2xl": 4 }}
                    gap='40px' display={'flex'} w={'100%'} justifyContent={'center'}>
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='50px'
                                h='50px'
                                m='auto'
                                mb='5'
                                bg={boxBg}
                                icon={
                                    <Icon w='20px' h='20px' as={FaImage} color={brandColor} />
                                }
                            />
                        }
                        name='Highly Accuracy' name2='User Friendly' name3='Renerate quickly' name4='AI Guidelines '
                        value='Creative Chatbot'
                    />
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='50px'
                                h='50px'
                                m='auto'
                                mb='5'
                                bg={boxBg}
                                icon={
                                    <Icon w='20px' h='20px' as={IoChatbubbleEllipsesOutline} color={brandColor} />
                                }
                            />
                        }
                        name='Voiceover' name2='Mic automation' name3='Voice optimization' name4='Audio Clarity'
                        value='Audio Transcription'
                    />
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='50px'
                                h='50px'
                                m='auto'
                                mb='5'
                                bg={boxBg}
                                icon={
                                    <Icon w='20px' h='20px' as={MdOutlineAudiotrack} color={brandColor} />
                                }
                            />
                        }
                        name='Product description' name2='E-mail copy' name3='Whitepaper' name4='Press release'
                        value='Document Creation'
                    />
                    <MiniStatistics
                        startContent={
                            <IconBox
                                w='50px'
                                h='50px'
                                m='auto'
                                mb='5'
                                bg={boxBg}
                                icon={
                                    <Icon w='20px' h='20px' as={IoPlay} color={brandColor} />
                                }
                            />
                        }
                        name='Hashtag Ideas' name2='Brainstorming' name3='Trend analysis' name4='Social media posts'
                        value='Img/Video Generation'
                    />
                </SimpleGrid>
                <Box position={'absolute'} width={'100%'} bottom={'0'} overflow={'hidden'}>
                    <VStack justifyContent="flex-end">
                        {/* <VStack width="100%" display='block' h='75vh' overflowY='auto'>
                            {messages.map((msg, index) => (
                                <ChatMessage key={index} message={msg.text} isBot={msg.isBot} />
                            ))}
                        </VStack> */}
                        {/* <Flex width="100%">
                            <InputGroup>
                                <InputLeftElement children={<Box mt='2'><TbMicrophone cursor="pointer" /></Box>} />
                                <InputRightElement onClick={handleSendMessage}
                                    children={<Flex><Box mr='5' mt='2' onClick={handleFileUpload}><ImAttachment />  <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                    />
                                    </Box><Box mr='20' mt='1'><IoMdSend style={{ transform: 'rotate(-40deg)' }} cursor="pointer" size='20px' /></Box> </Flex>}
                                />
                                <Input size='lg' value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="You can ask me anything! I am here to help." />
                            </InputGroup>
                        </Flex> */}
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}