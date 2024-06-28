import {
    Box,
    Button,
    Divider,
    IconButton,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { GoGear } from "react-icons/go";
import EditProfile from "./components/editprofile";
import UserBilling from "./components/userbilling";

export default function UserProfile() {
    return (
        <Box pt={{ base: "80px", md: "50px", xl: "150px" }}>
            <Card w={{ base: "100%", md: "75%", xl: "50%" }} m={'auto'}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Stack display='flex' flexDirection='row' alignItems={'center'}>

                    <Box>
                        <Image
                            objectFit='cover' borderRadius={5}
                            maxW={{ base: '100%', sm: '300px' }}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />
                    </Box>
                    <Box w={'100%'}>
                        <Stack display='flex' flexDirection='row' alignItems='baseline'>
                            <Box mx={10}>
                                <Text fontSize="md" fontWeight="400" lineHeight='20px'
                                ><Text my={2} fontSize="sm" fontWeight="400" opacity={.5}>
                                        NAME
                                    </Text>
                                    Caden Smith
                                </Text>
                            </Box>
                            <Box mx={10}>
                                <Text fontSize="md" fontWeight="400" lineHeight='20px'
                                ><Text my={2} fontSize="sm" fontWeight="400" opacity={.5}>
                                        USERNAME
                                    </Text>
                                    @caddeomyth
                                </Text>
                            </Box>
                        </Stack>
                        <Stack display='flex' flexDirection='row' alignItems='baseline' mt={5}>
                            <Box mx={10}>
                                <Text fontSize="md" fontWeight="400" lineHeight='20px'
                                ><Text my={2} fontSize="sm" fontWeight="400" opacity={.5}>
                                        EMAIL ADDRESS
                                    </Text>
                                    cadensmith@gmail.com
                                </Text>
                            </Box>
                        </Stack>
                    </Box>
                    <IconButton aria-label='Add to friends' icon={<GoGear />} alignSelf={'baseline'} />

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
                        ><Text my={2} fontSize="sm" fontWeight="400" opacity={.5}>
                                YOUR PLAN
                            </Text>
                           <Stack display={'flex'} flexDirection={'row'} alignItems={'end'}>
                           <Text> Personal Plan </Text> <Text fontSize="sm" fontWeight="400" opacity={.5} pl={2}>
                                  - You will give 8000 tokens every month
                            </Text>
                           </Stack>
                        </Text>
                    </Box>
                    <Button borderRadius={50} fontSize="sm" variant='outline' ml={4}>Upgrade</Button>
                </Stack>

            </Card>
            {/* <EditProfile />
            <UserBilling/> */}
        </Box>
    );
}