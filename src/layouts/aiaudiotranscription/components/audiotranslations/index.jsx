import { Box, Flex, Grid, Heading, SimpleGrid, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { MdDriveFileRenameOutline, MdOutlineCreateNewFolder, MdOutlineTranslate } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { FiDelete, FiMoreVertical } from 'react-icons/fi';
import { MdReport } from 'react-icons/md';
import { CiFileOn } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CiEdit, CiShare2, CiTrash } from "react-icons/ci";
import { IoIosInfinite } from 'react-icons/io';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { FiDownload } from "react-icons/fi";
import { BsFiletypeDocx, BsFiletypeTxt, BsFiletypePdf, BsFiletypeCsv, BsStopwatch } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import Card from 'components/card/Card';
function AudioTranslations() {

    return (
        <>
            <Box>
                <Flex direction={'row'} gap={5}>
                    <Card width={'20%'}>
                        <Stack direction='column' spacing={4}>
                            <Box>
                                <Text fontSize="14" fontWeight="600" >
                                    Shortcuts
                                </Text>
                                <Button my={2} leftIcon={<BsGrid3X3Gap />} variant='solid' fontWeight="400">
                                    Recent Files
                                </Button>
                            </Box>
                            <Box>
                                <Text fontSize="14" fontWeight="600" >
                                    Folder
                                </Text>
                                <Button my={2} leftIcon={<MdOutlineCreateNewFolder />} variant='solid' fontWeight="400">
                                    New Folder
                                </Button>
                            </Box>
                        </Stack>
                    </Card>
                    <Card width={'50%'}>
                        <Text fontSize="32" fontWeight="600" >
                            Learn English through Story Level 1 English stories English listening practice audio story
                        </Text>
                        <Text my={6} fontSize="16" fontWeight="400" >
                            Jun 7, 2024, 11:27 AM
                        </Text>
                        <Text opacity={.8} fontSize="16" fontWeight="400" >
                            Once upon a time there was a little girl named Lily. Lily was a kind and curious girl who loved to explore the world around her. One day while playing in the park she found a small key lying on the ground.
                            She picked it up and examined it closely. The key was old and rusty but it looked important. Lily searched around the park to see if anyone had dropped the key but there was no one around.
                            She decided to take the key home and ask her parents about it. When she got home she showed the key to her parents. They were surprised to see it and asked Lily where she had found it.
                            Lily explained that she had found it in the park and wanted to know what it was for. Her parents examined the key and tried it in every lock in the house but it didn't fit anywhere. They told Lily that it was probably a key to a very old and special place.
                            Lily was excited and wanted to find out where the key belonged. She decided to go on an adventure to find the lock that matched the key. She packed a backpack with some snacks, a water bottle, and a map of the town.
                        </Text>
                    </Card>
                    <Card width={'30%'}>
                        <Box>
                            <Card>
                                <Text fontSize="18" fontWeight="600" >
                                    Export
                                </Text>
                                <Box mt={6}>
                                    <Flex my={2}>
                                        <Button leftIcon={<BsFiletypePdf style={{ fontSize: '25px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Export as PDF
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>

                                        <Button leftIcon={<BsFiletypeDocx style={{ fontSize: '25px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Export as DOCX
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button leftIcon={<BsFiletypeTxt style={{ fontSize: '25px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Export as TXT
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button leftIcon={<BsFiletypeCsv style={{ fontSize: '25px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Export as CSV
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button leftIcon={<IoCopyOutline style={{ fontSize: '20px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Export as SRT
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button textAlign={'left'} leftIcon={<FiDownload style={{ fontSize: '20px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Advanced Export <Text mt={1} fontSize="12px" fontWeight="400" >
                                                    Export with timestamps
                                                    and in more formats
                                                </Text>
                                            </Text>
                                        </Button>
                                    </Flex>
                                </Box>
                                <Text fontSize="18" fontWeight="600" >
                                    More
                                </Text>
                                <Box mt={6}>
                                    <Flex my={2}>
                                        <Checkbox />
                                        <Button variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Show Timestamps
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button textAlign={'left'} leftIcon={<MdOutlineTranslate style={{ fontSize: '20px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Translate <Text mt={1} fontSize="12px" fontWeight="400" >
                                                    Translate this transcript to 134+ languages
                                                </Text>
                                            </Text>
                                        </Button>
                                    </Flex>
                                    <Flex my={2}>
                                        <Button textAlign={'left'} leftIcon={<MdDriveFileRenameOutline style={{ fontSize: '20px' }} />} variant='ghost'>
                                            <Text fontSize="sm" fontWeight="400" >
                                                Rename File
                                            </Text>
                                        </Button>
                                    </Flex>
                                </Box>
                            </Card>
                        </Box>
                    </Card>
                </Flex>
            </Box>
        </>
    );
}

export default AudioTranslations;