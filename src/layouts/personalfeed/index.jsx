import {
    Avatar,
    Box,
    Icon,
    Image,
    SimpleGrid,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  // Assets
  // Custom components
  import MiniStatistics from "components/card/MiniStatistics";
  import IconBox from "components/icons/IconBox";
  import React from "react";
  import { FaImage } from "react-icons/fa";
  import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
  
  export default function PersonalFeed() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    return (
      <Box pt={{ base: "80px", md: "50px", xl: "100px" }}>
        <Box m='1.5rem'>
        <Box my='5'>
          <Text fontSize="2xl" fontWeight="600">
          Personal Feed
          </Text>
        </Box>
        </Box >
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 4, "2xl": 4 }}
          gap='20px'>
          <Image src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Image src="https://images.pexels.com/photos/19826939/pexels-photo-19826939/free-photo-of-hand-holding-tray-with-bread-over-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Image src="https://images.pexels.com/photos/23957041/pexels-photo-23957041/free-photo-of-binter.jpeg" />
          <Image src="https://images.pexels.com/photos/24613565/pexels-photo-24613565/free-photo-of-reflection-of-palm-trees-in-swimming-pool.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Image src="https://images.pexels.com/photos/20139722/pexels-photo-20139722/free-photo-of-man-preparing-breakfast-on-camping.jpeg" />
          <Image src="https://images.pexels.com/photos/23105933/pexels-photo-23105933/free-photo-of-a-rock-in-the-ocean-with-waves-crashing-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Image src="https://images.pexels.com/photos/20903462/pexels-photo-20903462/free-photo-of-two-men-walking-down-the-street-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Image src="https://images.pexels.com/photos/24389284/pexels-photo-24389284/free-photo-of-a-pile-of-red-stuffed-animals-with-eyes.jpeg" />
          <Image src="https://images.pexels.com/photos/16801381/pexels-photo-16801381/free-photo-of-cafe-tables-and-chairs-near-building-columns.jpeg" />
          <Image src="https://images.pexels.com/photos/20441501/pexels-photo-20441501/free-photo-of-a-woman-sitting-on-a-red-bench-in-front-of-a-construction-site.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Image src="https://images.pexels.com/photos/24245164/pexels-photo-24245164/free-photo-of-two-pink-roses-are-growing-on-a-plant-with-the-sun-shining-through.jpeg" />
          <Image src="https://images.pexels.com/photos/19054582/pexels-photo-19054582/free-photo-of-model-posing-in-kimono.jpeg" />
        </SimpleGrid>
      </Box>
    );
  }