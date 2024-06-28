import React, { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Table,
    TableCaption,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Tfoot,
    TableContainer,
    ModalOverlay,
    ModalContent,
    Modal,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import PriceList from './pricinglist';
import GeneralInformation from 'views/admin/profile/components/General';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function PricingPage() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <Box>
            <ModalOverlay
                bg='none'
                backdropFilter='auto'
                backdropInvert='80%'
                backdropBlur='2px'
            />
        </Box>
    )

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    return (
        <Box mt={100}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Simple Pricing, Unbeatable Value
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    Start small and free, upgrade as you go. Take control of everything.
                </Text>
            </VStack>
            <Stack mt={5}
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Trial Plan
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                0
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                (for 1 Month)
                            </Text>
                        </HStack>
                        <Box mt={5}>
                            <Text fontSize="md" color="gray.500">
                                5 image generations
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="md" fontWeight="600">

                                </Text>
                                <Text fontSize="md" fontWeight="900">
                                    1                                </Text>
                                <Text fontSize="md" color="gray.500">
                                    Free Use


                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                    <Box m={5} pt={7}>
                        <Button w="full" variant="outline" fontSize='sm' fontWeight='400' onClick={() => {
                            setOverlay(<OverlayTwo />)
                            onOpen()
                        }} borderRadius={50}>
                            Buy Trial
                        </Button>
                        <Text onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }} fontSize={'xs'} cursor={'pointer'} my={4}>View Plan Details</Text>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl">
                                Most Popular
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Basic Plan
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    29.99
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /Month
                                </Text>
                            </HStack>
                            <Box mt={5}>
                                <Text fontSize="md" color="gray.500">
                                    5 image generations
                                </Text>
                                <HStack justifyContent="center">
                                    <Text fontSize="md" fontWeight="600">

                                    </Text>
                                    <Text fontSize="md" fontWeight="900">
                                        1                                </Text>
                                    <Text fontSize="md" color="gray.500">
                                        Free Use


                                    </Text>
                                </HStack>
                            </Box>
                        </Box>
                        <Box m={5} pt={7}>
                            <Button w="full" variant="outline" fontSize='sm' onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                            }} fontWeight='400' borderRadius={50}>
                                Buy Basic
                            </Button>
                            <Text onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                            }} fontSize={'xs'} cursor={'pointer'} my={4}>View Plan Details</Text>
                        </Box>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Standard
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                79.99
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /Month
                            </Text>
                        </HStack>
                        <Box mt={5}>
                            <Text fontSize="md" color="gray.500">
                                5 image generations
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="md" fontWeight="600">

                                </Text>
                                <Text fontSize="md" fontWeight="900">
                                    1                                </Text>
                                <Text fontSize="md" color="gray.500">
                                    Free Use


                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                    <Box m={5} pt={7}>
                        <Button w="full" variant="outline" fontSize='sm' fontWeight='400' borderRadius={50}>
                            Buy Standard
                            
                        </Button>
                        <Text onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                        }} fontSize={'xs'} cursor={'pointer'} my={4}>View Plan Details</Text>
                    </Box>
                </PriceWrapper>
            </Stack>
            {/* <PriceList/> */}
            {/* <Box pt={20}>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Trial Plan</Th>
                                <Th>Basic Plan</Th>
                                <Th>Standard Plan</Th>
                                <Th>Premium Plan</Th>
                                <Th>Scale Plan</Th>
                                <Th>Enterprise Plan</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Th>Price</Th>
                                <Td>$0 (for 1 Month)</Td>
                                <Td>$29.99/month              </Td>
                                <Td>$79.99/month              </Td>
                                <Td>$199.99/month              </Td>
                                <Td>$599.99/month              </Td>
                                <Td>Custom pricing (starting at $3000/month)              </Td>
                            </Tr>
                            <Tr>
                                <Th>Tokens</Th>
                                <Td>500 Tokens</Td>
                                <Td>10,00,000 tokens/month              </Td>
                                <Td>              50,00,000 tokens/month              </Td>
                                <Td>                  1,00,00,000 tokens/month </Td>
                                <Td>              2,00,00,000 tokens/month              </Td>
                                <Td>              Custom amount              </Td>
                            </Tr>
                            <Tr>
                                <Th>Genius generations</Th>
                                <Td>1 Free Use</Td>
                                <Td>5 uses/month              </Td>
                                <Td>10 uses/month</Td>
                                <Td>Unlimited, subject to token availability              </Td>
                                <Td>Unlimited, subject to token availability              </Td>
                                <Td>Unlimited, subject to token availability              </Td>
                            </Tr>
                            <Tr>
                                <Th>Brainpower levels</Th>
                                <Td>1-3</Td>
                                <Td>1-3</Td>
                                <Td>1-5</Td>
                                <Td>1-6</Td>
                                <Td>1-6</Td>
                                <Td>1-6</Td>
                            </Tr>
                            <Tr>
                                <Th>Features</Th>
                                <Td>Basic Al agent functions (text generation, database management) <hr style={{ border: '0', marginBottom: '5px' }} />
                                    10 minutes of text generation (10,000 characters) <hr style={{ border: '0', marginBottom: '5px' }} />
                                    5 image generations <hr style={{ border: '0', marginBottom: '5px' }} />
                                    10 minutes of speech generation <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Limited ASR and voice cloning <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Automatic translation (max 5 texts) <hr style={{ border: '0', marginBottom: '5px' }} /></Td>
                                <Td>Basic Al agent functions (text generation, database management) <hr style={{ border: '0', marginBottom: '5px' }} />
                                    10 minutes of text generation (10,000 characters) <hr style={{ border: '0', marginBottom: '5px' }} />
                                    5 image generations <hr style={{ border: '0', marginBottom: '5px' }} />
                                    10 minutes of speech generation <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Limited ASR and voice cloning <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Automatic translation (max 5 texts) <hr style={{ border: '0', marginBottom: '5px' }} /></Td>

                                <Td>Advanced Al agent functions (text generation, database management)                <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Advanced internet search capabilities<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Document handling (max 30 uploads/month, max 50 MB documents)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Advanced Python integration for sophisticated calculations and programming <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Long-term memory and context understanding <hr style={{ border: '0', marginBottom: '5px' }} />
                                    Automatic translation (max 5 texts) <hr style={{ border: '0', marginBottom: '5px' }} /></Td>

                                <Td>Advanced Al agent functions (text generation, database management)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Extensive internet search capabilities<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Document and image handling (max 100 uploads/month, max 100 MB documents)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Advanced Python integration for sophisticated calculations and programming<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Long-term memory and context understanding<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Priority customer support<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Audio, image, and video generation<hr style={{ border: '0', marginBottom: '5px' }} />
                                </Td>

                                <Td>Advanced Al agent functions (multiple language model integration, complex tasks)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Document and image handling (unlimited uploads, max 200 MB documents)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Professional Python integration for sophisticated calculations and programming<hr style={{ border: '0', marginBottom: '5px' }} />
                                    20,000,000 characters (-40 hours of text)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    2,000 image generations<hr style={{ border: '0', marginBottom: '5px' }} />
                                    40 hours of speech generation<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Extensive voice cloning and ASR<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Extensive translation services<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Dedicated account manager<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Audio, image, and video generation<hr style={{ border: '0', marginBottom: '5px' }} />
                                </Td>

                                <Td>Full Al agent capabilities (integration of all language models, full functionality)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Document and image handling (unlimited uploads, custom document size)<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Custom character and token limits<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Custom image and speech generation<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Full access to all services<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Dedicated account manager and premium support<hr style={{ border: '0', marginBottom: '5px' }} />
                                    Audio, image, and video generation<hr style={{ border: '0', marginBottom: '5px' }} />
                                </Td>

                            </Tr>
                            <Tr>
                                <Th>Free generations</Th>
                                <Td>NA</Td>
                                <Td>50,000 characters of text, 10 images, <hr style={{ border: '0', marginBottom: '5px' }} /> 10 minutes of speech, 1
                                    video, 1 hour of ASR, 1 Genius</Td>
                                <Td>2,00,000 characters of text, 50 images, <hr style={{ border: '0', marginBottom: '5px' }} /> 30 minutes of speech, 3 videos, 5 hours of
                                    ASR, 5 Genius</Td>
                                <Td>5,00,000 characters of text, 100 images,  <hr style={{ border: '0', marginBottom: '5px' }} /> 60 minutes of speech, 10 videos, 10 hours of
                                    ASR, 10 Genius</Td>

                                <Td>                10,00,000 characters of text, 500 images,   <hr style={{ border: '0', marginBottom: '5px' }} /> 120 minutes of speech, 20 videos, 20 hours
                                    of ASR, 15 Genius</Td>
                                <Td>Based on custom agreement</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
            </Box> */}
            <Box>
                <Modal size='6xl' isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'>
                    {overlay}
                    <ModalContent>
                        <ModalHeader>Trial Plan</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <GeneralInformation />
                        </ModalBody>
                        <ModalFooter>
                            <Button borderRadius={6} onClick={onClose}>Select Plan</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    );
}