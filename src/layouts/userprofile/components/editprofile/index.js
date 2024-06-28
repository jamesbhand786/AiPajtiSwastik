// Chakra imports
import {
  AbsoluteCenter,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdAlternateEmail, MdUpload } from "react-icons/md";
import Dropzone from "views/admin/profile/components/Dropzone";

export default function EditProfile(props) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "gray.400";
  return (
      <Box mt={8}>
        <Flex h="100%" direction={{ base: "column", "2xl": "row" }} justifyContent={'space-around'}>
        <Dropzone
          w={{ base: "100%", "2xl": "268px" }}
          me="36px"
          maxH={{ base: "60%", lg: "50%", "2xl": "100%" }}
          minH={{ base: "60%", lg: "50%", "2xl": "268px" }}
          content={
            <Box>
              <Icon as={MdUpload} w="80px" h="80px" color={brandColor} />
              <Flex justify="center" mx="auto" mb="12px">
                <Text fontSize="xl" fontWeight="700" color={brandColor}>
                  Drag & Drop a Image
                </Text>
              </Flex>
              <Text fontSize="xs" fontWeight="400">
                <Box position="relative" padding="10">
                  <Divider />
                  <AbsoluteCenter bg="transparent">Or</AbsoluteCenter>
                </Box>
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
        />
        <Flex direction="column" textAlign={"start"}>
          <Box my={3}>
            <Text mb="3px" fontSize="sm">
              Name{" "}
            </Text>
            <Input placeholder="Caden Smith" type="text" />
          </Box>
          <Box my={3}>
            <Text mb="3px" fontSize="sm">
              Username{" "}
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MdAlternateEmail color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="mailiaddress" />
            </InputGroup>
          </Box>
          <Box my={3}>
            <Text mb="3px" fontSize="sm">
              Email Address{" "}
            </Text>
            <Input placeholder="cadensmith@gmail.com" type="email" />
          </Box>
          <Box my={3}>
            <Text mb="3px" fontSize="sm">
              Password{" "}
            </Text>
            <Input placeholder="cadensmith@gmail.com" type="password" />
          </Box>
          <Checkbox my={2} defaultChecked> I approve all changes</Checkbox>
          <Flex w="100%">
            <Button borderRadius={50} fontSize="sm" variant="outline" my={6}>
              Save Changes
            </Button>
          </Flex>
        </Flex>
      </Flex>
      </Box>
  );
}
