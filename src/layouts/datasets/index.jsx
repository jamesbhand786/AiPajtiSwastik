import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, FormControl, FormLabel, Image, Input, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useNumberInput } from '@chakra-ui/react'
import React from 'react'
import { GoDatabase } from 'react-icons/go'
import NoDatasets from 'assets/img/layout/nodata.svg';
import {
} from '@chakra-ui/react'
import {
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
import Uploadset from './components/uploadset';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import Banner from 'views/admin/profile/components/Storage';
import UploadStepper from './components/uploadstepper';
export default function DataSets(props) {
    const { used, total, ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const brandColor = useColorModeValue("brand.500", "white");
    const textColorSecondary = "gray.400";
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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

    return (
        <Box>
            <Box m={8} mt='10rem'>
                <Tabs>
                    <TabList>
                        <Tab><GoDatabase style={{ marginRight: '10px' }} /> My Datasets</Tab>
                    </TabList>
                    <SearchBar my={5} sx={{ border: '1px solid #808080', borderRadius: '8px' }}
                        borderRadius="30px"
                    />
                    <SimpleGrid
                        columns={{ base: 1, md: 3, lg: 4, "2xl": 4 }}
                        gap='20px'>
                        <Banner />
                    </SimpleGrid>
                    {/* <TabPanels>
                        <TabPanel>
                            <Box textAlign={'center'}>
                                <Box>
                                    <Image m={'auto'} width={150} src={NoDatasets} borderRadius='0' />
                                </Box>
                                <Text fontSize='lg' fontWeight={500} my={5}>No Datasets</Text>
                                <Text fontSize='md' fontWeight={400} my={5}>Create one to start exploring your data.</Text>
                                <Button my={2} leftIcon={<AddIcon width={'10px'} />} variant="outline" onClick={onOpen}>
                                    <Text fontSize={12} fontWeight={400}>
                                        Dataset
                                    </Text>{" "}
                                </Button>
                            </Box>
                        </TabPanel>
                    </TabPanels> */}
                </Tabs>
                <Drawer size='lg'
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Text fontSize='md' fontWeight={500} my={5}>Create Dataset</Text>
                            <UploadStepper/>
                        </DrawerBody>
                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    )
}