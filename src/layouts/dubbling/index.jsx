import { AddIcon, ArrowForwardIcon, ChevronRightIcon, SettingsIcon } from '@chakra-ui/icons'
import {
    AspectRatio, Box, Icon, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, FormControl, FormLabel, Image, Input, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useDisclosure, useNumberInput,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Divider,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import {
} from '@chakra-ui/react'
import {
    useColorModeValue,
} from "@chakra-ui/react";
import Card from 'components/card/Card';
import { IoAddCircleOutline } from 'react-icons/io5';
import { ImLab } from "react-icons/im";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoLockClosed } from "react-icons/io5";
import { Progress } from '@chakra-ui/react';
import { GiSpeaker } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function Dubbling(props) {
    const { used, total, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const brandColor = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();

    return (
        <Box>
            <Box m={8} mt='10rem'>
                <Box my='1'>
                    <Text fontSize="2xl" fontWeight="600">
                        Dubbling
                    </Text>
                    <Text fontSize="md" fontWeight="400">
                        Translate your content across 29 languages in seconds with voice translation, speaker detection, and audio dubbing.
                    </Text>
                </Box>
                <Divider my={6}/>
                <Card>
                    <Flex>
                        
                    </Flex>
                </Card>
            </Box>

            <Modal isOpen={isOpenModal1} onClose={onCloseModal1} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>
                        <Text fontSize={'15'} fontWeight="400" >
                            Type of voice to create
                        </Text>
                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            <Flex alignItems={'center'}>
                                <ImLab />
                                <Text fontSize="16" fontWeight="500" ml={2} >
                                    Voice Design
                                </Text>
                            </Flex>
                            <Box my={4}>
                                <Text fontSize="13" fontWeight="400" opacity={.8}>
                                    Design entirely new voices by adjusting their parameters. Every voice you create is randomly generated and is entirely unique even if the same settings are applied.
                                </Text>
                            </Box>
                        </Card>
                        <Card mt={4}>
                            {/* <Flex alignItems={'center'}>
                    <GiRapidshareArrow />
                    <Text fontSize="16" fontWeight="500" ml={2} >
                      Instant Voice Cloning
                    </Text>
                  </Flex> */}
                            <Flex alignItems={'center'} my={2}>
                                <IoLockClosed fontSize="12" />
                                <Text fontSize="13" fontWeight="400" ml={2} >
                                    Starter + only. Subscribe?
                                </Text>
                            </Flex>
                            <Box my={4}>
                                <Text fontSize="13" fontWeight="400" opacity={.8}>
                                    Clone a voice from a clean sample recording. Samples should contain 1 speaker and be over 1 minute long and not contain background noise.
                                </Text>
                            </Box>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}