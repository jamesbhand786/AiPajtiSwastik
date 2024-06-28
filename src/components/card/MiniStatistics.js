// Chakra imports
// Chakra imports
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, name2, name3, name4, growth, value } =
    props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Box p="20px" align="center">
      <Box
        mx="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "0" : "0"}>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "1xl",
            }}
          >
            {value}
          </StatNumber>
          <Flex my={5} direction={"column"}>
            <Button my={2} rightIcon={<ArrowForwardIcon />} variant="outline">
              <Text fontSize={12} fontWeight={400}>
                {name}
              </Text>
            </Button>
            <Button my={2} rightIcon={<ArrowForwardIcon />} variant="outline">
              <Text fontSize={12} fontWeight={400}>
                {name2}
              </Text>
            </Button>
            <Button my={2} rightIcon={<ArrowForwardIcon />} variant="outline">
              <Text fontSize={12} fontWeight={400}>
                {name3}
              </Text>
            </Button>
            <Button my={2} rightIcon={<ArrowForwardIcon />} variant="outline">
              <Text fontSize={12} fontWeight={400}>
                {name4}
              </Text>{" "}
            </Button>
          </Flex>

          {/* <StatLabel
            mt={4}
            lineHeight="20px"
            color={textColorSecondary}
            fontSize={{
              base: "10px",
            }}
          >
            {name}
          </StatLabel> */}
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Box>
    </Box>
  );
}
