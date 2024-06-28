// chakra imports
import { Icon, Flex, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { MdUpgrade } from "react-icons/md";
import React from "react";

export function ItemContent(props) {
  const textColor = useColorModeValue("navy.700", "white");
  return (
    <>
      {/* <Flex
        justify='center'
        align='center'
        borderRadius='16px'
        minH={{ base: "60px", md: "70px" }}
        h={{ base: "60px", md: "70px" }}
        minW={{ base: "60px", md: "70px" }}
        w={{ base: "60px", md: "70px" }}
        me='14px'
        bg='linear-gradient(135deg, #868CFF 0%, #ffc600 100%)'>
        <Icon as={MdUpgrade} color='white' w={8} h={14} />
      </Flex> */}
       <Box   maxH={{ base: "60px", md: "200px" }} overflowY='auto'
       >
       <Text bgColor={"secondaryGray.600"} borderRadius='5'
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
          English (EN)
        </Text>
       <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
          Hungarian (HU)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Spanish (ES)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        French (FR)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        German (DE)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Italian (IT)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Portuguese (PT)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Polish (PL)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Turkish (TR)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Russian (RU)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Dutch (NL)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Czech (CS)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Arabic (AR)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Chinese (ZH-CN)
        </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
                Japanese (JA)
                </Text>
        <Text
          color={textColor} fontWeight='500' p='8px' ml='5px'
          fontSize={{ base: "xs", md: "sm" }}>
        Korean (KO)
        </Text>       </Box>


        {/* <Flex alignItems='center'>
          <Text
            fontSize={{ base: "sm", md: "sm" }}
            lineHeight='100%'
            color={textColor}>
            A new update for your downloaded item is available!
          </Text>
        </Flex> */}
    </>
  );
}
