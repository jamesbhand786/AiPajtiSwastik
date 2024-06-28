import React from "react";

// Chakra imports
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import navImage from 'assets/img/layout/Navbar.png';

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Image src={navImage} borderRadius='0' width={100} mb='10px' />
      <HSeparator mb='10px' />
    </Flex>
  );
}

export default SidebarBrand;
