import { HamburgerIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Text,
    Textarea,
    useDisclosure,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { Avatar, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Stack, Switch, Tooltip, useNumberInput } from '@chakra-ui/react'

export default function AiVideoGeneration() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 2,
            defaultValue: 1,
            min: 1,
            max: 6,
            precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
    return (
        <Box pt={{ base: "80px", md: "50px", xl: "150px" }}>
            <Box textAlign={'end'}>
                <Button ml={3} ref={btnRef} borderRadius={5} onClick={onOpen}>
                    <HamburgerIcon />
                </Button>
            </Box>
            <Card w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Box>
                    <Textarea isInvalid placeholder='Give me a topic, and detailed instructions' rows={8} />
                    <Box textAlign={'end'} my={6}>
                        <Flex alignItems={'center'} justifyContent={'end'}><Box mr={5}><FaMicrophone opacity={.25} cursor="pointer" size='20px' /></Box>
                            <Button rightIcon={<IoMdStarOutline />} variant='outline'>
                                Generate a video
                            </Button>
                        </Flex>
                    </Box>
                </Box>
                <Box>
                    <AspectRatio height={'250px'} ratio={1}>
                        <iframe src="https://www.youtube.com/embed/KLuTLF3x9sA?si=cwc0KcQZuds8M_md" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </AspectRatio>
                </Box>
            </Card>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <Box m={5}>
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
                    <Divider />
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Box mt={5}>
                            <Text fontSize='sm' fontWeight={500} my={2}>Model :</Text>
                            <Select placeholder='Select option' size='sm'>
                                <option value='option1'>Epic Motion (Modelslab)</option>
                                <option value='option2'> VistaVerse (Opensora)</option>
                                <option value='option3'> Visionary Video (DeepAI Video)</option>
                            </Select>
                        </Box>
                        <Box mt={10}>
                            <Text fontSize='sm' fontWeight={500} my={2}>Resolution :</Text>
                            <Select placeholder='For Modelslab' size='sm'>
                                <option value='option1'>HD 720p</option>
                                <option value='option2'>Full HD 1080p </option>
                                <option value='option3'> 4K UHD</option>
                            </Select>
                            <Select placeholder='For Opensora' size='sm' mt={2}>
                                <option value='option1'> HD 720p</option>
                                <option value='option2'> Full HD 1080p</option>
                                <option value='option3'>4K UHD</option>
                            </Select>
                            <Select placeholder='DeepAI Video' size='sm' mt={2}>
                                <option value='option1'>HD 720p</option>
                                <option value='option2'> Full HD 1080p</option>
                            </Select>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}