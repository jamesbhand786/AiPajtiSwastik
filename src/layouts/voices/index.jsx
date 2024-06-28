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
  Checkbox,
  ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import {
} from '@chakra-ui/react'
import {
  useColorModeValue,
} from "@chakra-ui/react";
import Card from 'components/card/Card';
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { MdUpload } from 'react-icons/md';
import Dropzone from "views/admin/profile/components/Dropzone";
import { IoAddCircleOutline } from 'react-icons/io5';
import { ImLab } from "react-icons/im";
import { GiRapidshareArrow } from "react-icons/gi";
import { IoLockClosed } from "react-icons/io5";
import { Progress } from '@chakra-ui/react';
import { GiSpeaker } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
export default function Voices(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();

  // State management for modal 2
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
  const { isOpen: isOpenModal5, onOpen: onOpenModal5, onClose: onCloseModal5 } = useDisclosure();

  return (
    <Box>
      <Box m={8} mt='10rem'>
        <Box mb='2rem'>
          <Box my='1'>
            <Flex>
              <Text fontSize="2xl" fontWeight="600">
                Voices
              </Text>
              <Button fontWeight={400} fontSize={14} ml={'auto'} onClick={onOpenModal1}>
                Add a new voice
              </Button>
            </Flex>
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
                <Card onClick={onOpenModal2} style={{ cursor: 'pointer' }}>
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
          <Modal isOpen={isOpenModal2} onClose={onCloseModal2}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <Text fontSize={'15'} fontWeight="400" >
                  Generate voice
                </Text>
              </ModalHeader>
              <ModalBody>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400">
                    Gender
                  </Text>
                  <Select placeholder='Select gender' size='sm'>
                    <option value='option1'>Male</option>
                    <option value='option2'>Female</option>
                  </Select>
                </Box>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400">
                    Age
                  </Text>
                  <Select placeholder='Select age' size='sm'>
                    <option value='option1'>Young</option>
                    <option value='option2'>Middle Aged</option>
                    <option value='option2'>Old</option>
                  </Select>
                </Box>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400">
                    Accent
                  </Text>
                  <Select placeholder='Select accent' size='sm'>
                    <option value='option1'>American</option>
                    <option value='option2'>Indian</option>
                  </Select>
                </Box>
                <Box my={6}>
                  <Progress size='sm' width={'100%'} value={5} />
                  <Text fontSize={'12'} fontWeight="400">
                    Accent Strength
                  </Text>
                  <Flex direction='row' alignItems={'center'} justifyContent={'space-between'} my={2}>
                    <Text fontSize='xs' fontWeight={400}>Low</Text>
                    <Text fontSize='xs' fontWeight={400}>High</Text>
                  </Flex>
                </Box>
                <Box my={6}>
                  <Textarea placeholder='Here is a sample placeholder' />
                  <Flex direction='row' alignItems={'center'} justifyContent={'space-between'} my={2} opacity={.5}>
                    <Text fontSize='xs' fontWeight={400}>128/1000</Text>
                    <Text fontSize='xs' fontWeight={400}>Total quota remaining: 9987</Text>
                  </Flex>
                </Box>
                <Box my={4}>
                  <Button fontWeight={500} fontSize={14} isFullWidth variant='outline'>
                    Generate
                  </Button>
                </Box>
                <Divider />
                <Box my={4}>
                  <Button fontWeight={500} fontSize={14} rightIcon={<ArrowForwardIcon />} isFullWidth>
                    Use Voice
                  </Button>
                </Box>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenModal3} onClose={onCloseModal3} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <Text fontSize={'15'} fontWeight="400" >
                  Edit voice
                </Text>
              </ModalHeader>
              <ModalBody>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400" mb={1}>
                    Name
                  </Text>
                  <Input placeholder='Nandini' />
                </Box>
                <Box>
                  <Text fontSize={'12'} fontWeight="400" my={2}>
                    Labels 3 / 5
                  </Text>
                </Box>
                <Box my={4}>
                  <Flex>
                    <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                      age :young
                    </Button>
                    <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                      gender :female
                    </Button>
                    <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                      accent :american
                    </Button>
                    <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                      +
                    </Button>
                  </Flex>
                </Box>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400" mb={1}>
                    Description
                  </Text>
                  <Textarea placeholder='Here is a sample placeholder' />

                </Box>
                <Box my={4} textAlign={'end'}>
                  <Button fontWeight={500} fontSize={14} variant='outline'>
                    Cancel
                  </Button>
                  <Button fontWeight={500} fontSize={14} rightIcon={<ArrowForwardIcon />} ml={4}>
                    Edit Voice
                  </Button>
                </Box>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenModal4} onClose={onCloseModal4} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <Text fontSize={'15'} fontWeight="400" >
                  Remove Voice
                </Text>
              </ModalHeader>
              <ModalBody>
                <Box>
                  <Text fontSize={'12'} fontWeight="400" my={2}>
                    Do you really want to remove the voice "Nandini"?
                  </Text>
                </Box>
                <Box mt={4} textAlign={'end'}>
                  <Button fontWeight={500} fontSize={14} variant='outline'>
                    Cancel
                  </Button>
                  <Button fontWeight={500} fontSize={14} ml={4}>
                    Remove Voice
                  </Button>
                </Box>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Modal isOpen={isOpenModal5} onClose={onCloseModal5} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalHeader>
                <Text fontSize={'15'} fontWeight="400" >
                  Add voice
                </Text>
              </ModalHeader>
              <ModalBody>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400" mb={1}>
                    Name
                  </Text>
                  <Input placeholder='Nandini' />
                </Box>
                <Box textAlign={'center'}>
                  <Dropzone
                    w={{ base: "100%", "2xl": "100%" }}
                    maxH={{ base: "150px", lg: "150px", "2xl": "200px" }}
                    minH={{ base: "150px", lg: "150px", "2xl": "200px" }}
                    content={
                      <Box>
                        <Icon as={MdUpload} w="40px" h="40px" color={brandColor} />
                        <Flex justify="center" mx="auto" mb="12px">
                        </Flex>
                        <Box alignItems={'center'} justifyContent={'center'}>
                          <Text fontSize="sm" fontWeight="400" >
                            Click to upload a file or drag and drop
                          </Text>
                          <Text mt={2} fontSize="xs" fontWeight="400" opacity={.5} >
                            Audio or Video files, up to 10MB each
                          </Text>
                        </Box>
                        <Box mt={4}>
                          <Button borderRadius={50} ml={4} onClick={onOpen} variant='outline'>
                            <Text fontSize="sm" fontWeight="400" >
                              Record audio
                            </Text>
                          </Button>
                        </Box>
                      </Box>
                    }
                  />
                </Box>
                <Box my={4}>
                  <Alert status='info' borderRadius={10}>
                    <AlertIcon />
                    <Text fontSize="xs" fontWeight="400" >
                      No items uploaded yet. Upload audio samples of the voice you would like to clone.
                      Sample quality is more important than quantity. Noisy samples may give bad results. Providing more than 5 minutes of audio in total brings little improvement.
                    </Text>
                  </Alert>
                </Box>
                <Box>
                  <Text fontSize={'12'} fontWeight="400" my={2}>
                    Labels 3 / 5
                  </Text>
                  <Box my={4}>
                    <Alert status='info' borderRadius={10}>
                      <AlertIcon />
                      <Text fontSize="xs" fontWeight="400" >

                        No labels. Click + to add a first one.
                      </Text>
                    </Alert>
                  </Box>
                </Box>
                <Box my={6}>
                  <Text fontSize={'12'} fontWeight="400" mb={1}>
                    Description
                  </Text>
                  <Textarea placeholder='Here is a sample placeholder' />
                  <Box my={4}>
                    <Flex alignItems={'flex-start'}>
                      <Checkbox defaultChecked></Checkbox>
                      <Text fontSize={'14'} fontWeight="400" ml={2}>

                        I hereby confirm that I have all necessary rights or consents to upload and clone these voice samples and that I will not use the platform-generated content for any illegal, fraudulent, or harmful purpose. I reaffirm my obligation to abide by ElevenLabs' Terms of Service and Privacy Policy.
                      </Text>
                    </Flex>
                  </Box>
                </Box>
                <Box my={4} textAlign={'end'}>
                  <Button fontWeight={500} fontSize={14} variant='outline'>
                    Cancel
                  </Button>
                  <Button fontWeight={500} fontSize={14} ml={4}>
                    Add Voice
                  </Button>
                </Box>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Box>
            <Text fontSize="md" fontWeight="400">
              Craft lifelike voices, clone your own, and discover community featured ones
            </Text>
          </Box>
        </Box >
        <Tabs>
          <TabList>
            <Tab fontSize={14}>MY VOICES</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box mt={10} position={'relative'}>
                <Flex gap={10}>
                  <Card w={{ base: "50%", md: "33%", xl: "25%" }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Box>
                      <Box textAlign={'center'}>
                        <IoAddCircleOutline style={{ margin: 'auto' }} fontSize={50} />
                        <Box my={2}>
                          <Text fontSize="sm" fontWeight="400" >
                            Add Generative or Cloned Voice
                          </Text>
                        </Box>
                        <Box my={2}>
                          <Text fontWeight={400} fontSize={12} opacity={.6}>1 / 3</Text>
                        </Box>
                      </Box>
                    </Box>
                  </Card>
                  <Card w={{ base: "50%", md: "33%", xl: "25%" }}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                  >
                    <Box>
                      <ImLab />
                      <Text fontSize="16" fontWeight="500" my={2}>
                        Nandini
                      </Text>
                      <Text fontSize="14" fontWeight="400">
                        Young Female with American accent
                      </Text>
                      <Text fontSize="14" fontWeight="400" opacity={.5}>
                        No description provided.
                      </Text>
                      <Box mt={4}>
                        <Button fontWeight={400} leftIcon={<GiSpeaker />} fontSize={14} borderRadius={50} onClick={onOpenModal5}>
                          Use
                        </Button>
                        <Button fontWeight={400} leftIcon={<FiEdit />} fontSize={14} borderRadius={50} ml={2} onClick={onOpenModal3}>
                          Edit
                        </Button>
                        <Button fontWeight={400} leftIcon={<MdDeleteOutline />} fontSize={14} borderRadius={50} ml={2} onClick={onOpenModal4}>
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Flex>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}