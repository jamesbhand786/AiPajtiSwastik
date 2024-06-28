import { AddIcon, ChevronRightIcon, SettingsIcon } from '@chakra-ui/icons'
import { AspectRatio, Box, Icon, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, Flex, FormControl, FormLabel, Image, Input, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useDisclosure, useNumberInput } from '@chakra-ui/react'
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
import HistorySpeech from './components/history';

export default function SpeechTrans(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const options = ["Adam", "Allice", "Bill", "Callum"];

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

  const SelectWithSearch = ({ options }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    return (
      <Select placeholder="Select an option" onChange={(e) => console.log(e.target.value)} borderRadius={50} fontSize={14}>
        <Input
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search options..."
        />
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  };

  return (
    <Box>
      <Box m={8} mt='10rem'>
        <Box mb='2rem'>
          <Box my='1'>
            <Text fontSize="2xl" fontWeight="600">
              Speech Synthesis
            </Text>
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="400">
              Generate your ideas into stunning visuals
            </Text>
          </Box>
        </Box >
        <Tabs>
          <TabList>
            <Tab fontSize={14}>GENERATE</Tab>
            <Tab fontSize={14}>HISTORY</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box mt={10} position={'relative'}>
                <Card w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'}
                  direction={{ base: 'column', sm: 'row' }}
                  overflow='hidden'
                  variant='outline'
                >
                  <Box>
                    <Box position={'absolute'} right={5}>
                      <Text fontSize="sm" fontWeight="400" >
                        Quota remaining: 10,000
                      </Text>
                    </Box>
                    <Tabs>
                      <TabList>
                        <Tab fontSize={14}>TEXT TO SPEECH</Tab>
                        <Tab fontSize={14}>SPEECH TO SPEECH</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <Box my={6}>
                            <Textarea isInvalid placeholder='Start typing here or paste any text you want to turn into lifelike speech.' rows={4} />
                          </Box>
                        </TabPanel>
                        <TabPanel>
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
                                      Drag and drop an audio file
                                    </Text>
                                    <Text mt={2} fontSize="xs" fontWeight="400" >
                                      Audio file up to 50mb
                                    </Text>
                                  </Box>
                                  <Box mt={4}>
                                    <Button borderRadius={50} onClick={onOpen} variant='outline'>
                                      <Text fontSize="sm" fontWeight="400" >
                                        Upload audio
                                      </Text>
                                    </Button>
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
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                    <Box textAlign={'end'} my={6}>
                      <Flex alignItems={'center'} justifyContent={'space-between'}>
                        <Box mr={5}>
                          <Flex>
                            <Box>
                              <SelectWithSearch options={options} />
                              {/* Other components or content */}
                            </Box>
                            <Button variant='outline' fontWeight={400} fontSize={14} borderRadius={50} ml={4} ref={btnRef} onClick={onOpen}>
                              Settings
                            </Button>
                            <Drawer
                              isOpen={isOpen}
                              placement='right'
                              onClose={onClose}
                              size='sm'
                              finalFocusRef={btnRef}
                            >
                              <DrawerOverlay />
                              <DrawerContent>
                                <Box m={5}>
                                  <Flex w="100%" alignItems={'center'}>
                                    <SettingsIcon />
                                    <Text ml={3}
                                      fontSize="md"
                                      fontWeight="500"
                                      lineHeight='20px'
                                    >
                                      Settings
                                    </Text>
                                  </Flex>
                                </Box>
                                <DrawerCloseButton />
                                <DrawerBody>
                                  <Box mt={5}>
                                    <Text fontSize='sm' fontWeight={500} my={2}>Model</Text>
                                    <Card>
                                      <Box>
                                        <Text fontSize='sm' fontWeight={500} my={2}>Eleven Multilingual v2</Text>
                                        <Flex alignItems={'center'}>
                                          <Text fontSize='xs' fontWeight={400} my={2} opacity={.5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                                          <ChevronRightIcon />
                                        </Flex>
                                        <Flex>
                                          <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                                            English
                                          </Button>
                                          <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                                            Japanese
                                          </Button>
                                          <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                                            Chinese
                                          </Button>
                                          <Button size='xs' fontWeight={400} fontSize={12} borderRadius={50} ml={2}>
                                            +26 more
                                          </Button>
                                        </Flex>
                                      </Box>
                                    </Card>
                                  </Box>
                                </DrawerBody>
                                <DrawerFooter>
                                  <Button variant='outline' fontWeight={400} fontSize={14} borderRadius={50} ml={2}>
                                    Reset                            </Button>
                                  <Button fontWeight={400} fontSize={14} borderRadius={50} ml={2}>
                                    Generate Speech
                                  </Button>
                                </DrawerFooter>
                              </DrawerContent>
                            </Drawer>
                          </Flex>
                        </Box>
                        <Box>
                          <Flex alignItems={'center'}>
                            <Text fontWeight={400} fontSize={12} opacity={.6}>0 / 5000</Text>
                            <Button fontWeight={400} fontSize={14} borderRadius={50} ml={2}>
                              Add a new voice
                            </Button>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  </Box>
                </Card>
              </Box>
            </TabPanel>
            <TabPanel>
              <HistorySpeech />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}