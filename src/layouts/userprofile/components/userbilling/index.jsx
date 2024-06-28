import {
    Box,
    Button,
    Divider,
    IconButton,
    Image,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Stack,
    Text,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

export default function UserBilling() {
    return (
        <Box pt={{ base: "80px", md: "50px", xl: "150px" }}>

            <Box my={5} />
            <Card w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Stack display='flex' flexDirection='row' alignItems='center' justifyContent={'space-between'} m={2}>
                    <Box>
                        <Text fontSize="md" fontWeight="400" lineHeight='20px'
                        ><Text my={2} fontSize="md" fontWeight="400">
                                Personal Plan — $15.00 Per Month
                            </Text>
                            <Stack display={'flex'} flexDirection={'row'} alignItems={'end'}>
                                <Text fontSize="md" opacity={.5}> You will given 8000 tokens every month                                </Text>
                            </Stack>
                        </Text>
                    </Box>
                </Stack>

            </Card>
            <Box my={5} />
            <Card w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Stack display='flex' flexDirection='row' alignItems='center' justifyContent={'space-between'} m={2}>
                    <Box>
                        <Text fontSize="md" fontWeight="400" lineHeight='20px'
                        ><Text my={2} fontSize="md" fontWeight="400">
                                Active until Dec 09, 2025

                            </Text>
                            <Stack display={'flex'} flexDirection={'row'} alignItems={'end'}>
                                <Text fontSize="md" opacity={.5}> We will send you a notification upon Subscription expiration

                                </Text>
                            </Stack>
                        </Text>
                    </Box>
                    <Box w='30%'>
                        <Text fontSize="xs" opacity={.5} textAlign={'end'}>657 Days Left</Text>
                        <Slider aria-label='slider-ex-1' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                        </Slider>
                    </Box>
                </Stack>

            </Card>
            <Box w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'} my={5}>
                <Stack display='flex' flexDirection='row' alignItems='end' justifyContent={'space-between'}>
                    <Button borderRadius={50} fontSize="sm" variant='outline'>Upgrade Plan</Button>
                    <Button borderRadius={50} fontSize="sm" ml={4}>Cancel Subscription</Button>
                </Stack>
                <Text my={8} fontSize="2xl" fontWeight="500">Payment Methods</Text>
                <Stack display='flex' flexDirection='row' alignItems='end' justifyContent={'space-between'} gap={4}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Stack display='flex' flexDirection='row' alignItems='center' justifyContent={'space-between'}>
                            <Box>
                                <Text fontSize="md" fontWeight="400" lineHeight='20px'
                                ><Text my={2} fontSize="md" fontWeight="400">
                                        Mastercard **** 4658
                                    </Text>
                                    <Stack display={'flex'} flexDirection={'row'} alignItems={'end'}>
                                        <Text fontSize="md" opacity={.5}> Card expires at 03/25</Text>
                                    </Stack>
                                </Text>
                            </Box>
                        </Stack>
                        <Divider my={4} />
                        <IoIosMore />
                    </Card>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Stack display='flex' flexDirection='row' alignItems='center' justifyContent={'space-between'}>
                            <Box>
                                <Text fontSize="md" fontWeight="400" lineHeight='20px'
                                ><Text my={2} fontSize="md" fontWeight="400">
                                        Mastercard **** 4658
                                    </Text>
                                    <Stack display={'flex'} flexDirection={'row'} alignItems={'end'}>
                                        <Text fontSize="md" opacity={.5}> Card expires at 03/25</Text>
                                    </Stack>
                                </Text>
                            </Box>
                        </Stack>
                        <Divider my={4} />
                        <IoIosMore />
                    </Card>
                </Stack>
                <Stack my={4}>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Stack display='flex' flexDirection='column' alignItems='center' justifyContent={'space-between'} my={4}>
                            <AiFillPlusCircle fontSize={'40px'} />
                            <Text my={2} fontSize="md" fontWeight="400">
                                Add New
                            </Text>
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </Box>
    );
}