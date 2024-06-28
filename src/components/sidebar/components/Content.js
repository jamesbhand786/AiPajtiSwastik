// chakra imports
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
// import SidebarCard from "components/sidebar/components/SidebarCard";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
import {
  IoChatbubbleEllipsesOutline,
  IoImageOutline,
  IoPlay,
} from "react-icons/io5";
import { MdCurrencyBitcoin } from "react-icons/md";
import SidebarCard from "./SidebarCard";
// import SidebarUserLinks from "./LinksUser";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;

  const routeAdminData = routes.length > 0 ? routes.filter(i => i.type === 'admin'):[]
  const routeUserData = routes.length > 0 ? routes.filter(i => i.type === 'usertools') :[]
  const routeAccountData = routes.length > 0 ? routes.filter(i => i.type === 'account') :[]
  const routeSupportData = routes.length > 0 ? routes.filter(i => i.type === 'support') :[]
  // SIDEBAR
  return (
    <Flex
      direction="column"
      height="100%"
      pt="25px"
      px="16px"
      borderRadius="30px"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="8px">
        <Box ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
          <Box>
            <Text
              my={2}
              fontSize="xs"
              letterSpacing={1}
              fontWeight="400"
              opacity={0.5}
            >
              START HERE
            </Text>
          </Box>
          <Links routes={routeAdminData} />
        </Box>
        <Box  ps="20px" pe={{ md: "16px", "2xl": "1px" }}>
            <Box mt={10} >
              <Text
                my={2}
                fontSize="xs"
                letterSpacing={1}
                fontWeight="400"
                opacity={0.5}
              >
                USER TOOLS
              </Text>
            </Box>

            <Links routes={routeUserData} />


            <Box mt={10} >
              <Text
                my={2}
                fontSize="xs"
                letterSpacing={1}
                fontWeight="400"
                opacity={0.5}
              >
                ACCOUNT INFO
              </Text>
            </Box>
            <Links routes={routeAccountData} />


            <Box my={1.65}>
              {/* <Button to
                fontWeight={"regular"}
                fontSize={14}
                leftIcon={
                  <Box mr={1.5}>
                    <IoChatbubbleEllipsesOutline fontSize={16} />
                  </Box>
                }
                variant="outline"
                border={0}
              >
                AI Chat Bot
              </Button> */}
            </Box>

            {/* <NavLink
              to={link.layout + link.path}
              style={{ maxWidth: "max-content", marginLeft: "40px" }}>
              <Text color='gray.400' fontSize='sm' fontWeight='normal'>
                {link.name}
              </Text>
            </NavLink> */}

            {/* <Box my={1.65}>
              <Button
                fontWeight={"regular"}
                fontSize={14}
                leftIcon={
                  <Box mr={1.5}>
                    <IoImageOutline fontSize={16} />
                  </Box>
                }
                variant="outline"
                border={0}
              >
                Image Generation
              </Button>
            </Box>
            <Box my={1.65}>
              <Button
                fontWeight={"regular"}
                fontSize={14}
                leftIcon={
                  <Box mr={1.5}>
                    <IoPlay fontSize={16} />
                  </Box>
                }
                variant="outline"
                border={0}
              >
                AI Video Generation
              </Button>
            </Box> */}
          </Box>
      </Stack>

      <Box mt={10} mb="40px" borderRadius="30px">
        <SidebarCard routeSupportData={routeSupportData} />
      </Box>
    </Flex>
  );
}

export default SidebarContent;