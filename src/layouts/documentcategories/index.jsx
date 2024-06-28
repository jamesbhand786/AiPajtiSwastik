import React from "react";
// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Flex,
    Button,
    Icon,
    Image,
    Text,
    useColorModeValue,
    HStack,
    Grid,
} from "@chakra-ui/react";
// Assets
import { MdTimer } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FcDocument } from "react-icons/fc";

function DocumentCategories() {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let secondaryGray = useColorModeValue("gray.50", "whiteAlpha.100");
    let mainText = useColorModeValue("gray.800", "white");
    let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
    let iconColor = useColorModeValue("brand.200", "white");
    return (
        <Box mt={'10rem'} mx={5}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} width={'100%'}>                <Box>
                <Flex
                    borderRadius='20px'
                    bg={boxBg}
                    h='345px'
                    w={{ base: "30%", md: "100%" }}
                    direction='column'>
                    <Box p='20px'>
                        <Flex w='100%' mb='10px'>
                            <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                            <Button
                                w='38px'
                                h='38px'
                                align='center'
                                justify='center'
                                borderRadius='12px'
                                me='12px'
                                bg={iconBox}>
                                <Icon
                                    w='24px'
                                    h='24px'
                                    as={IoEllipsisHorizontalSharp}
                                    color={iconColor}
                                />
                            </Button>
                        </Flex>
                        <Box>
                            <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                Document Cards
                            </Text>
                            <AvatarGroup
                                size='sm'
                                max={4}
                                color={iconColor}
                                fontSize='9px'
                                fontWeight='700'>
                                <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                            </AvatarGroup>
                        </Box>
                    </Box>
                    <Flex
                        bg={boxBg}
                        w='100%'
                        p='20px'
                        borderBottomLeftRadius='inherit'
                        borderBottomRightRadius='inherit'
                        height='100%'
                        direction='column'>
                        <Text
                            fontSize='sm'
                            color='gray.500'
                            lineHeight='24px'
                            pe='40px'
                            fontWeight='500'
                            mb='auto'>
                            You have the opportunity to play this game of life you need to
                            appreciate every moment.
                        </Text>
                        <Flex>
                            {/* <Flex me='25px'>
                                <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                    85 mins
                                </Text>
                            </Flex> */}
                            <Flex>
                                <Icon
                                    as={FcDocument}
                                    w='20px'
                                    h='20px'
                                    me='6px'
                                    color='red.500'
                                />
                                <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                    .Txt Format
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box>
                    <Flex
                        borderRadius='20px'
                        bg={boxBg}
                        h='345px'
                        w={{ base: "30%", md: "100%" }}
                        direction='column'>
                        <Box p='20px'>
                            <Flex w='100%' mb='10px'>
                                <Image w={25} h={25} src='https://cdn-icons-png.flaticon.com/256/5968/5968517.png' me='auto' />
                                <Button
                                    w='38px'
                                    h='38px'
                                    align='center'
                                    justify='center'
                                    borderRadius='12px'
                                    me='12px'
                                    bg={iconBox}>
                                    <Icon
                                        w='24px'
                                        h='24px'
                                        as={IoEllipsisHorizontalSharp}
                                        color={iconColor}
                                    />
                                </Button>
                            </Flex>
                            <Box>
                                <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
                                    Document Cards
                                </Text>
                                <AvatarGroup
                                    size='sm'
                                    max={4}
                                    color={iconColor}
                                    fontSize='9px'
                                    fontWeight='700'>
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                    <Avatar src='https://i.ibb.co/CmxNdhQ/avatar1.png' />
                                    <Avatar src='https://i.ibb.co/cFWc59B/avatar2.png' />
                                    <Avatar src='https://i.ibb.co/vLQJVFy/avatar3.png' />
                                    <Avatar src='https://i.ibb.co/8mcrvQk/avatar4.png' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Flex
                            bg={boxBg}
                            w='100%'
                            p='20px'
                            borderBottomLeftRadius='inherit'
                            borderBottomRightRadius='inherit'
                            height='100%'
                            direction='column'>
                            <Text
                                fontSize='sm'
                                color='gray.500'
                                lineHeight='24px'
                                pe='40px'
                                fontWeight='500'
                                mb='auto'>
                                You have the opportunity to play this game of life you need to
                                appreciate every moment.
                            </Text>
                            <Flex>
                                {/* <Flex me='25px'>
                                    <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        85 mins
                                    </Text>
                                </Flex> */}
                                <Flex>
                                    <Icon
                                        as={FcDocument}
                                        w='20px'
                                        h='20px'
                                        me='6px'
                                        color='red.500'
                                    />
                                    <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
                                        .Txt Format
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>

            </Grid>        </Box>
    );
}

export default DocumentCategories;