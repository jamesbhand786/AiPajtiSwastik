import { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Text,
    Box,
    Button,
    Flex,
    Modal,
    Stack,
    Avatar,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Divider,
} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { FiDelete, FiMoreVertical } from 'react-icons/fi';
import { MdHistory, MdManageSearch, MdReport } from 'react-icons/md';
import { CiFileOn } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CiEdit, CiShare2, CiTrash } from "react-icons/ci";
import { IoIosInfinite } from 'react-icons/io';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { FiDownload } from "react-icons/fi";
import { BsFiletypeDocx, BsFiletypeTxt, BsFiletypePdf, BsFiletypeCsv, BsStopwatch, BsPlay } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { DownloadIcon, PhoneIcon, TimeIcon } from '@chakra-ui/icons';
import { FaHistory } from 'react-icons/fa';

const HistorySpeech = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com • 4 days ago', role: '3m 23s' },
        { id: 2, name: 'John Doe', email: 'johnkjkjkjjohn.doe@example.com • 4 days ago', role: '3m 23s' },
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: '3m 23s' },
        { id: 2, name: 'John Doe', email: 'john.doe@example.com', role: '3m 23s' },
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: '3m 23s' },
        { id: 2, name: 'John Doe', email: 'john.doe@example.com', role: '3m 23s' },

    ];

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    const handleActionClick = (action) => {
        // Replace with actual action handling logic
        console.log(`Performing ${action} action on item`, selectedItem);
    };

    return (
        <Box m={'auto'} width={'60%'} mt={10}>
            <Flex justifyContent='space-between'>
                <Text my={4} fontSize={'md'} fontWeight={'500'}>
                    Speech Synthesis History
                </Text>
                <Box>
                    <Tooltip label='Manage histoy' hasArrow fontSize='xs '>
                        <TimeIcon />
                    </Tooltip>
                </Box>
            </Flex>
            <Table variant="simple">
                <Tbody>
                    {data.map((item) => (
                        <Tr key={item.id}>
                            <Td><Checkbox ></Checkbox></Td>
                            <Td p={0}>
                            <Avatar size="sm"
                                borderRadius={8} src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80'
                            />
                            </Td>
                            <Td>{item.name}
                                <Text opacity={.6} fontSize={13} fontWeight={400}>{item.email}</Text>
                            </Td>
                            <Td justifyContent={'end'} display={'flex'}>
                                <Stack direction='row' spacing={4}>
                                    <Button borderRadius={50}>
                                    <BsPlay fontSize={20} />
                                    </Button>
                                    <Button borderRadius={50}>
                                    <DownloadIcon fontSize={18} />
                                    </Button>
                                </Stack>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default HistorySpeech;