import {
    Box,
    Button,
    Flex,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { ImUpload } from "react-icons/im";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { IoCloudUploadOutline, IoCopyOutline } from "react-icons/io5";
// Assets
import { MdUpload } from "react-icons/md";
import { RiFileUploadLine } from "react-icons/ri";
import Dropzone from "views/admin/profile/components/Dropzone";
import {  Tab, TabList, TabPanel, TabPanels, Tabs,   } from '@chakra-ui/react'
import UploadCardBox from "./uploadcardbox";

export default function Uploadset(props) {
    const { used, total, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const brandColor = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Box>
                <Text fontSize='md' fontWeight={500} my={5}>Configure Data Sources</Text>
                <Box my={2}>
                    <Alert status='info'>
                        <AlertIcon />
                        This step is optional but we recommend you to add some data to the dataset.
                    </Alert>
                </Box>
                <Box my={8}>
                    <Tabs>
                        <TabList>
                            <Tab>Files</Tab>
                            <Tab>Web Pages</Tab>
                            <Tab>Text</Tab>
                            <Tab>SQL Databases</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Flex justifyContent={'space-around'}>
                                    <Card>
                                        <Text my={4} textAlign={'center'} fontSize={'1xl'} fontWeight={'500'}>Welcome to Audio Transcription</Text>
                                        <Box textAlign={'center'}>
                                            <Dropzone
                                                w={{ base: "100%", "2xl": "100%" }}
                                                maxH={{ base: "100px", lg: "120px", "2xl": "140px" }}
                                                minH={{ base: "100px", lg: "120px", "2xl": "140px" }}
                                                content={
                                                    <Box>
                                                        <Icon as={MdUpload} w="40px" h="40px" color={brandColor} />
                                                        <Flex justify="center" mx="auto" mb="12px">
                                                        </Flex>
                                                        <Flex alignItems={'center'} justifyContent={'center'} my={8}>
                                                            <ImUpload fontSize={14} />
                                                            <Text ml={3} fontSize="xs" fontWeight="400" >
                                                                Drag and drop files to upload them into TurboScribe
                                                            </Text>
                                                        </Flex>
                                                    </Box>
                                                }
                                            />
                                            {/* <Button leftIcon={<RiFileUploadLine />} variant='outline' mt={4} fontSize='14' fontWeight='400'>
                                                Choose File
                                            </Button> */}
                                        </Box>
                                    </Card>
                                </Flex>
                                <UploadCardBox/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Box>
            </Box>
        </Box>
    );
}