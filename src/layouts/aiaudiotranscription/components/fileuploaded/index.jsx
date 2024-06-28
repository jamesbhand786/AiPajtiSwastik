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

const AudioRecentfile = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: '3m 23s' },
    // { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: '2m 53s' },
    // { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: '1m 12s' },
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleActionClick = (action) => {
    // Replace with actual action handling logic
    console.log(`Performing ${action} action on item`, selectedItem);
  };

  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();

  // State management for modal 2
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();

  return (
    <Box m={2}>
      <Flex justifyContent='space-between'>
        <Text my={4} fontSize={'xl'} fontWeight={'500'}>Recent Files</Text>
        <Button leftIcon={<IoIosInfinite />} mt={4} variant='outline'>
          <Text fontSize="sm" fontWeight="400" >
            Go Unlimited
          </Text>
        </Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Uploaded</Th>
            <Th>Duration</Th>
            <Th>Mode</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.role}</Td>
              <Td>{item.role}</Td>
              <Td>{ }</Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FiMoreVertical />}
                    variant="outline"
                    size="xs"
                  />
                  <MenuList>
                    <MenuItem onClick={() => handleSelectItem(item)}>
                      <CiFileOn style={{ marginRight: '5px' }} /> Open Transcript
                    </MenuItem>
                    <MenuItem onClick={onOpenModal1}>
                      <CiExport style={{ marginRight: '5px' }} />
                      Export Transcript
                      <Modal isOpen={isOpenModal1} onClose={onCloseModal1} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <ModalHeader textAlign={'center'}>
                            <Text fontSize="16" fontWeight="600" >
                              Export 1 Transcript
                            </Text>
                          </ModalHeader>
                          <ModalBody>
                            <Text textAlign={'center'} fontSize="14" fontWeight="400" >
                              Choose one or more formats.
                            </Text>
                            <Box mt={6}>
                              <Flex my={2}>
                                <Checkbox defaultChecked />
                                <Button leftIcon={<BsFiletypePdf style={{ fontSize: '25px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as PDF
                                  </Text>
                                </Button>
                              </Flex>
                              <Flex my={2}>
                                <Checkbox />
                                <Button leftIcon={<BsFiletypeDocx style={{ fontSize: '25px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as DOCX
                                  </Text>
                                </Button>
                              </Flex>
                              <Flex my={2}>
                                <Checkbox />
                                <Button leftIcon={<BsFiletypeTxt style={{ fontSize: '25px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as TXT
                                  </Text>
                                </Button>
                              </Flex>
                              <Flex my={2}>
                                <Checkbox defaultChecked />
                                <Button leftIcon={<BsFiletypeCsv style={{ fontSize: '25px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as CSV
                                  </Text>
                                </Button>
                              </Flex>
                              <Flex my={2}>
                                <Checkbox />
                                <Button leftIcon={<IoCopyOutline style={{ fontSize: '20px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as SRT
                                  </Text>
                                </Button>
                              </Flex>
                              <Flex my={2}>
                                <Checkbox />
                                <Button leftIcon={<IoCopyOutline style={{ fontSize: '20px' }} />} variant='ghost'>
                                  <Text fontSize="sm" fontWeight="400" >
                                    Export as VTT
                                  </Text>
                                </Button>
                              </Flex>
                            </Box>
                            <Box mt={2}>
                              <Text textAlign={'center'} fontSize="14" fontWeight="400" >
                                Settings
                              </Text>
                              <Flex my={2}>
                                <Checkbox />
                                <Box>
                                  <Button leftIcon={<BsStopwatch style={{ fontSize: '16px' }} />} variant='ghost'>
                                    <Text fontSize="sm" fontWeight="400" >
                                      Section Timestamps
                                    </Text>
                                  </Button>
                                  <Text fontSize="11" ml={4} fontWeight="400" >
                                    Add timestamps before each section in PDF, DOCX, and TXT formats.
                                  </Text>
                                </Box>
                              </Flex>
                            </Box>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClose={onCloseModal1} isFullWidth leftIcon={<FiDownload style={{ fontSize: '18px' }} />}  >
                              <Text fontSize="sm" fontWeight="400" >
                                DOWNLOAD
                              </Text></Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </MenuItem>
                    <MenuItem onClick={onOpenModal2}>
                      <CiEdit style={{ marginRight: '5px' }} />
                      Rename File
                      <Modal isOpen={isOpenModal2} onClose={onCloseModal2} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <ModalHeader textAlign={'center'}>
                            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                              <CiEdit style={{ marginRight: '8px' }} />
                              <Text fontSize="16" fontWeight="600" >
                                Rename File
                              </Text>
                            </Flex>
                          </ModalHeader>
                          <ModalBody>
                            <Text fontSize="14" fontWeight="400" >
                              Name
                            </Text>
                            <Input placeholder='medium size' size='md' />

                          </ModalBody>
                          <ModalFooter>
                            <Button onClose={onCloseModal1} isFullWidth>
                              <Text fontSize="sm" fontWeight="400" >
                                RENAME FILE
                              </Text></Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </MenuItem>
                    <MenuItem onClick={onOpenModal4}>
                      <CiShare2 style={{ marginRight: '5px' }} />
                      Share Transcript
                      <Modal isOpen={isOpenModal4} onClose={onCloseModal4} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <ModalHeader textAlign={'center'}>
                            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                              <CiShare2 style={{ marginRight: '8px' }} />
                              <Text fontSize="16" fontWeight="600" >
                                Share Transcript
                              </Text>
                            </Flex>
                          </ModalHeader>
                          <ModalBody>
                            <Text fontSize="14" fontWeight="400" >
                              Anyone with the following secure link can view this transcript, the
                              associated media file, and your email address
                              (nandiniagrawal2802@gmail.com).
                            </Text>
                            <Box mt={4}>
                              <Text fontSize="14" fontWeight="400" >
                                Secure Link
                              </Text>
                              <Input placeholder='https://turboscribe.ai/transcript/share/79263353441' size='md' />
                            </Box>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClose={onCloseModal1} isFullWidth leftIcon={<IoCopyOutline style={{ fontSize: '18px' }} />}  >
                              <Text fontSize="sm" fontWeight="400" >
                                COPY LINK
                              </Text></Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </MenuItem>
                    <MenuItem onClick={onOpenModal3}>
                      <CiTrash style={{ marginRight: '5px' }} />
                      Delete File
                      <Modal isOpen={isOpenModal3} onClose={onCloseModal3} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalCloseButton />
                          <ModalHeader textAlign={'center'}>
                            <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                              <MdDeleteOutline style={{ marginRight: '8px' }} />
                              <Text fontSize="16" fontWeight="600" >
                                Delete File
                              </Text>
                            </Flex>
                          </ModalHeader>
                          <ModalBody>
                            <Text fontSize="14" fontWeight="400" >
                              Are you sure you want to delete Learn English through
                              Story Level 1 English stories English listening
                              practice audio story?
                              This can't be undone.
                            </Text>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClose={onCloseModal1} isFullWidth>
                              <Text fontSize="sm" fontWeight="400" >
                                DELETE FILE
                              </Text></Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AudioRecentfile;