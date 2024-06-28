import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Link,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { MdCurrencyBitcoin } from "react-icons/md";
import { QuestionOutlineIcon, SettingsIcon } from "@chakra-ui/icons";
import PricingPage from "layouts/pricing";
import { GoHome } from "react-icons/go";
import Card from "components/card/Card";
import SidebarLinks from "./Links";

export default function SidebarCard(props) {
  const { routeSupportData} = props
  let menuBg = useColorModeValue ('white', 'navy.800');

  const bgColor = "linear-gradient(135deg, #868CFF 0%, #ffc600 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue ('secondaryGray.900', 'white');

  const routes = [
    {
      name: "Home",
      layout: "/admin",
      path: "/pricing-plan",
      icon: (
        <Icon as={GoHome} width="16px" height="16px" mt="1.5" color="inherit" />
      ),
      component: PricingPage,
    },
  ];

  return (
    <Box  ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
      <Box>
        <Text
          my={2}
          fontSize="xs"
          letterSpacing={1}
          fontWeight="400"
          opacity={0.5}
        >
          SUPPORT
        </Text>
      </Box>

      <SidebarLinks routes={routeSupportData} />







      {/* <Box my={1.65}>
        <Button
          component={Link}
          to="/pricing-plan"
          fontWeight={"regular"}
          fontSize={14}
          leftIcon={
            <Box mr={1.5}>
              <MdCurrencyBitcoin fontSize={16} />
            </Box>
          }
          variant="outline"
          border={0}
        >
          Pricing
        </Button>
      </Box> */}
      {/* <a href='/pricing-plan'>viren</a>
      <NavLink to={'admin/pricing-plan'}>vvvvvvvvvvv</NavLink> */}
      {/* <Box my={1.65}>
        <Button
          fontWeight={"regular"}
          fontSize={14}
          leftIcon={
            <Box mr={1.5}>
              <QuestionOutlineIcon fontSize={16} />
            </Box>
          }
          variant="outline"
          border={0}
        >
          FAQ & Help
        </Button>
      </Box> */}
      {/* <Box my={1.65}>
        <Button
          fontWeight={"regular"}
          fontSize={14}
          leftIcon={
            <Box mr={1.5}>
              <IoMdLogOut fontSize={16} />
            </Box>
          }
          variant="outline"
          border={0}
        >
          Log Out
        </Button>
      </Box> */}
      {/* <Box m={2} ml={0}>
        <Card align="center" bgColor={boxBg}>
          <Text fontSize="md" fontWeight={500} mb={2}>
            Free Plan{" "}
            <Tooltip label="Upgrade the plan" fontSize="xs">
              <QuestionOutlineIcon ml="1" fontSize="sm" />
            </Tooltip>
          </Text>
          <Divider mb={4} />
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Text my={3} fontSize={14}>
            0 of 3 Projects Created
          </Text>
          <Button borderRadius={5} fontWeight={400} fontSize={14}>
            Upgrade to Standard
          </Button>
        </Card>
      </Box> */}
      <Box bgColor={boxBg} borderRadius={8} padding={3} mr={8}>
      <Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
          <Text
            fontSize="sm"
            fontWeight="500"
            color={textColor}
          >
            Caden Smith <Text fontSize="xs" fontWeight="400">
              Enterprise Plan
            </Text>
          </Text>
          <SettingsIcon cursor={'pointer'} />

          </Flex>
      </Box>
    </Box>
  );
}