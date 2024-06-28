import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Divider,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function FaqsnHelp() {
    return (
        <Box pt={{ base: "80px", md: "50px", xl: "100px" }}>
            <Box m='1.5rem'>
                <Box my='5'>
                    <Text fontSize="2xl" fontWeight="600">
                        FAQs
                    </Text>
                </Box>
            </Box >

            <Box m={5}>
            <Accordion allowToggle>
                <AccordionItem py={5}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Question 1
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem py={5}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Question 2
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem py={5}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Question 3
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem py={5}>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                Question 4
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Box my='5'>
                    <Text fontSize="2xl" fontWeight="500">
                        Help
                    </Text>
                </Box>
            <Text opacity={.5} fontSize="sm">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>
            </Box>
        </Box>
    );
}