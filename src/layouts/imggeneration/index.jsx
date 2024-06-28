import { HamburgerIcon, QuestionOutlineIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Stack, Switch, Text, Tooltip, useDisclosure, useNumberInput } from '@chakra-ui/react'
import React from 'react'
import { FaMicrophone } from 'react-icons/fa'

export default function ImgGeneration() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 3,
            defaultValue: 3,
            min: 1,
            max: 5,
            precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <Box>
            <Box m={8} mt='10rem'>
                <Flex>
                    <Box>
                        <Text fontSize="2xl" fontWeight="500">
                            Image Generation
                        </Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <Flex alignItems={'center'}>
                            <Text fontSize="xs" fontWeight="500">
                                This will use 4 tokens
                            </Text>
                            <Button ml={3} ref={btnRef} borderRadius={5} onClick={onOpen}>
                                <HamburgerIcon />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
                <Stack spacing={5} my={5}>
                    <InputGroup>
                        <InputRightElement
                            children={<Flex><Box mr='5' mt='2'><FaMicrophone opacity={.25} cursor="pointer" size='20px' /></Box> </Flex>}
                        />
                        <Input size='lg'
                            placeholder="" />
                    </InputGroup>
                    <InputGroup>
                        <InputRightElement
                            children={<Flex><Box mr='5' mt='2'><FaMicrophone opacity={.25} cursor="pointer" size='20px' /></Box> </Flex>}
                        />
                        <Input size='lg'
                            placeholder="" />
                    </InputGroup>
                </Stack>

                <FormControl display='flex' alignItems='center' justifyContent={'end'}>
                    <Switch id='email-alerts' />
                    <FormLabel fontSize="sm" htmlFor='email-alerts' mb='0' ml='4'>
                        Negative Prompt
                    </FormLabel>
                    <Button borderRadius={50} fontSize="sm" variant='outline'>Generate Button</Button>
                </FormControl>
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
                                <option value='option1'>Creative Canvas (DALLE)</option>
                                <option value='option2'>Fluid Fantasy (Stable Diffusion)</option>
                                <option value='option3'>Imaginarium (Imagen)</option>
                                <option value='option3'>Deep Dreamer (DeepAI)</option>
                            </Select>
                            </Box>
                                <Box mt={10}>
                                <Text fontSize='sm' fontWeight={500} my={2}>Resolution :</Text>
                            <Select placeholder='For dalle' size='sm'>
                                <option value='option1'>HD 1024×1024</option>
                                <option value='option2'>HD 1024×1792 </option>
                                <option value='option3'>1792×1024</option>
                            </Select>
                            <Select placeholder='For Stable Diffusion/Imagen/DeepAI' size='sm' mt={2}>
                                <option value='option1'>512 x 512px </option>
                                <option value='option2'>768 x 768px </option>
                                <option value='option3'>512×1024px</option>
                                <option value='option3'>768×1024px</option>
                                <option value='option3'>1024×1024px</option>
                            </Select>

                                </Box>
                            <Box mt={10} w={'60%'}>
                            <Text fontSize='sm' fontWeight={500} my={2}>Number of Images</Text>
                                <HStack>
                                <Button {...dec}>-</Button>
                                    <Text>
                                    <Input {...input} />
                                    </Text>
                                    <Button {...inc}>+</Button>
                                </HStack>
                            </Box>
                            <Box mt={10}>
                            <Text fontSize='sm' fontWeight={500} my={2}>Styles :</Text>
                            <Select placeholder='For Stable Diffusion/Imagen/DeepAI' size='sm'>
                                <option value='option1'>Fantasy Character Generator</option>
                                <option value='option2'>Anime Portrait Generator</option>
                                <option value='option3'>Old Drawing Generator</option>
                                <option value='option3'>3d Objects Generator</option>
                                <option value='option3'>Abstract Painting Generator</option>
                                <option value='option3'>3d Character Generator</option>
                                <option value='option3'>AI Logo Generator</option>
                                <option value='option3'>3D Cartoon Character Generator</option>
                                <option value='option3'>Haunted Portrait Generator</option>
                                <option value='option3'>Children’s Book Illustration Generator</option>
                                <option value='option3'>Romantic Art Generator</option>
                                <option value='option3'>Solar System Generator</option>
                                <option value='option3'>Zodiac Design Generator</option>
                            </Select>
                            </Box>
                            {/* <Text fontSize='md' fontWeight={500} my={5}>Image Dimensions <Tooltip label='Select the resolution of images' fontSize='xs'>
                                <QuestionOutlineIcon ml='1' fontSize='sm' />
                            </Tooltip></Text>
                            <Flex>
                                <Slider aria-label='slider-ex-1' defaultValue={30}>
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                                <Text fontSize='md' fontWeight={500} ml='4'>12</Text>
                            </Flex>
                            <Box my='6'>
                                <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                                    <FormLabel fontSize="sm" htmlFor='email-alerts' mb='0'>
                                        Prompt Magic  <Tooltip label='Select the resolution of images' fontSize='xs'>
                                            <QuestionOutlineIcon ml='1' fontSize='sm' />
                                        </Tooltip>
                                    </FormLabel>
                                    <Switch id='email-alerts' />
                                </FormControl>

                            </Box>
                            <Box my='6'>
                                <FormControl display='flex' alignItems='center' justifyContent={'space-between'}>
                                    <FormLabel fontSize="sm" htmlFor='email-alerts' mb='0'>
                                        High Contrast  <Tooltip label='Select the resolution of images' fontSize='xs'>
                                            <QuestionOutlineIcon ml='1' fontSize='sm' />
                                        </Tooltip>
                                    </FormLabel>
                                    <Switch id='email-alerts' />
                                </FormControl>

                            </Box> */}
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
            <Divider />
        </Box>
    )
}