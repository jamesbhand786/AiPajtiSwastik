import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import Card from "components/card/Card";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { FaImage, FaImages } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "80px", md: "50px", xl: "100px" }}>
      <Box textAlign='center' mb='5rem'>
      <Box my='5'>
        <Text fontSize="4xl" fontWeight="600">
          Unleash Your Creativity with AI
        </Text>
      </Box>
      <Box>
        <Text fontSize="1xl" fontWeight="400">
          Generate your ideas into stunning visuals
        </Text>
      </Box>
      </Box >
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 4, "2xl": 4 }}
        gap='20px' display={'flex'} w={'75%'}>
        <MiniStatistics
          startContent={
            <IconBox
              w='75px'
              h='75px'
              m='auto'
              mb='5'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={FaImage} color={brandColor} />
              }
            />
          }
          name='This field of AI combines deep learning algorithms and generative models to create new images that resemble real-world photographs or exhibit creative and imaginative qualities.'
          value='Image Generation'
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='75px'
              h='75px'
              m='auto'
              mb='5'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={IoChatbubbleEllipsesOutline} color={brandColor} />
              }
            />
          }
          name='An AI chatbot, short for artificial intelligence chatbot, is a computer program designed to simulate human-like conversations and provide automated responses to user queries or prompts.'
          value='AI Chat Bot'
        />
        {/* <MiniStatistics
          startContent={
            <IconBox
              w='75px'
              h='75px'
              m='auto'
              mb='5'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={IoChatbubbleEllipsesOutline} color={brandColor} />
              }
            />
          }
          name='AI document reading utilizes advanced machine learning algorithms to interpret and analyze text within documents. This technology streamlines the process of extracting relevant information, enabling quick data retrieval and facilitating the automation of document-intensive tasks.'
          value='AI Document Reading'
        /> */}
        <MiniStatistics
          startContent={
            <IconBox
              w='75px'
              h='75px'
              m='auto'
              mb='5'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={IoChatbubbleEllipsesOutline} color={brandColor} />
              }
            />
          }
          name='AI text generation involves using natural language processing models to produce coherent and contextually relevant text based on input data. This technology powers applications such as content creation, automated customer service responses, and personalized communication.'
          value='AI Video Generation'
        />
      </SimpleGrid>
      {/* 
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}