import {
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React, { useState } from "react";
import { ImUpload } from "react-icons/im";
import { IoCloudUploadOutline, IoCopyOutline, IoFishSharp, IoLogoAmplify } from "react-icons/io5";
// Assets
import { MdAlternateEmail, MdCheckCircle, MdSettings, MdUpload } from "react-icons/md";
import { RiFileUploadLine } from "react-icons/ri";
import Dropzone from "views/admin/profile/components/Dropzone";
import { GiDolphin, GiTiger } from "react-icons/gi";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import AudioRecentfile from "./components/fileuploaded";
import AudioTranslations from "./components/audiotranslations";
import { FaFileAudio } from "react-icons/fa";
export default function AiAudioTrans(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showRow, setShowRow] = useState(false);
  return (
    <Box mt={'10rem'}>
      {/* <AudioTranslations/> */}

      { showRow && 
        <Box mt={5}>
          <AudioRecentfile />
        </Box>
      }

      {  showRow === false &&
      <Box mt={'20rem'}>
        <Flex justifyContent={'space-around'}>
          <Card w='50%'>
            <Text my={4} textAlign={'center'} fontSize={'2xl'} fontWeight={'500'}>Welcome to Audio Transcription</Text>
            <Box textAlign={'center'}>
              <Dropzone
                w={{ base: "100%", "2xl": "100%" }}

                maxH={{ base: "250px", lg: "250px", "2xl": "250px" }}
                minH={{ base: "250px", lg: "250px", "2xl": "268px" }}
                content={
                  <Box>
                    <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
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
              <Button leftIcon={<RiFileUploadLine />} mt={4} onClick={onOpen} variant='outline'>
                <Text fontSize="sm" fontWeight="400" >
                  Transcribe Your First File
                </Text>
              </Button>
            </Box>
          </Card>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader pb={0}>
                <Flex justifyContent={'center'} alignItems={'center'}>
                  <IoCloudUploadOutline fontSize={18} />
                  <Text ml={2} fontSize="16" fontWeight="600" >
                    Transcribe Files
                  </Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'} mt={6}>
                  <Text ml={3} fontSize="sm" fontWeight="400" >
                    Audio / Video Files
                  </Text>
                  <IoCopyOutline fontSize={14} />
                </Flex>
              </ModalHeader>

              <ModalBody>
                <Dropzone
                  maxH={{ base: "200px", lg: "250px", "2xl": "150px" }}
                  minH={{ base: "200px", lg: "250px", "2xl": "150px" }}

                  content={
                    <Box>
                      <Flex justify="center" mx="auto" mb="12px">
                      </Flex>
                      <Flex alignItems={'center'} justifyContent={'center'}>
                        <ImUpload fontSize={14} />
                        <Text ml={3} fontSize="sm" fontWeight="500" >
                          Drag & Drop
                        </Text>
                      </Flex>
                      <Text my={4} fontSize="xs" fontWeight="400" >
                        MP3, MP4, M4A, MKV
                      </Text>
                      <Button variant='outline' mt={1} size="sm" fontWeight='400'>
                        Browse Files
                      </Button>
                    </Box>
                  }
                />
                <Text my={1} mt={4} fontSize="xs" fontWeight="400" >
                  Audio Language
                </Text>
                <Select placeholder='Select language' size="sm">
                  <option value='option1'>English</option>
                  <option value='option2'>Spanish</option>
                  <option value='option3'>French</option>
                  <option value='option3'>German</option>
                  <option value='option3'>Hindi</option>
                  <option value='option3'>Turkish</option>

                </Select>
                <Text my={1} mt={5} fontSize="xs" fontWeight="400" >
                  Transcription Mode
                </Text>
                <Flex>
                  <Card>
                    <Flex divider={<Divider orientation='vertical' />} justifyContent={'space-around'} textAlign={'center'}>
                      <Box cursor={'pointer'}>
                        <IoLogoAmplify style={{ margin: 'auto' }} />
                        <Text fontSize='sm' >
                          AIPajti ASR
                        </Text>
                        <Text fontSize='xs'>
                          Fastest
                        </Text>
                      </Box>
                      <Box cursor={'pointer'}>
                        <FaFileAudio style={{ margin: 'auto' }} />
                        <Text fontSize='sm'>
                          Sonic Scribe
                        </Text>
                        <Text fontSize='xs'>
                          (OpenAI ASR)
                        </Text>
                      </Box>
                    </Flex>
                  </Card>
                </Flex>
                <Accordion allowToggle mt={4}>
                  <AccordionItem border={0}>
                    <Text >
                      <AccordionButton fontSize={12}>
                        <Box as='span' flex='1' textAlign='left'>
                          Speaker Recognition & More Settings
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </Text>
                    <AccordionPanel pb={2}>
                      <List spacing={3}>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color='green.500' />
                          Lorem ipsum dolor sit amet,
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color='green.500' />
                          Assumenda, quia temporibus
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdCheckCircle} color='green.500' />
                          Quidem, ipsam illum quis se
                        </ListItem>
                        <ListItem>
                          <ListIcon as={MdSettings} color='green.500' />
                          Quidem, ipsam illum quis
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setShowRow(true)} isFullWidth >
                  <Text fontSize="sm" fontWeight="400" >
                    TRANSCRIBE
                  </Text></Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box> }
    </Box>
  );
}