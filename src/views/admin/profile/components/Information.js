// Chakra imports
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";

export default function Information(props) {
  const { title, value, ...rest } = props;
  // Chakra Color Mode
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  const textColorPrimary = useColorModeValue("secondaryGray.800", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.100");
  return (
    <Card  bgColor={boxBg} {...rest}>
      <Box>
        <Text fontWeight='500' color={textColorSecondary} fontSize='sm'>
          {title}
        </Text>
        <Text color={textColorPrimary} fontWeight='500' fontSize='md'>
          {value}
        </Text>
      </Box>
    </Card>
  );
}
