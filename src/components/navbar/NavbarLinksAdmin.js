// Chakra Imports
import {
  Avatar,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom Components
import {ItemContent} from 'components/menu/ItemContent';
import {SearchBar} from 'components/navbar/searchBar/SearchBar';
import {SidebarResponsive} from 'components/sidebar/Sidebar';
import PropTypes from 'prop-types';
import React from 'react';
// Assets
import navImage from 'assets/img/layout/Navbar.png';
import {MdNotificationsNone, MdInfoOutline} from 'react-icons/md';
import {FaEthereum, FaRegUser} from 'react-icons/fa';
import routes from 'routes.js';
import {ThemeEditor} from './ThemeEditor';
import FixedPlugin from 'components/fixedPlugin/FixedPlugin';
import { IoLanguageOutline, IoSettingsOutline } from 'react-icons/io5';
import Card from 'components/card/Card';
import { RiBillLine, RiUserLocationFill } from 'react-icons/ri';
import { IoMdLogOut } from 'react-icons/io';
export default function HeaderLinks (props) {
  const {secondary} = props;
  // Chakra Color Mode
  const navbarIcon = useColorModeValue ('gray.400', 'white');
  let menuBg = useColorModeValue ('white', 'navy.800');
  const textColor = useColorModeValue ('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue ('brand.700', 'brand.400');
  const ethColor = useColorModeValue ('gray.700', 'white');
  const borderColor = useColorModeValue ('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const ethBg = useColorModeValue ('secondaryGray.300', 'navy.900');
  const ethBox = useColorModeValue ('white', 'navy.800');
  const shadow = useColorModeValue (
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  const borderButton = useColorModeValue (
    'secondaryGray.500',
    'whiteAlpha.200'
  );
  return (
    <Flex
      w={{sm: '100%', md: 'auto'}}
      alignItems="center"
      flexDirection="row"
      // bg={menuBg}
      flexWrap={secondary ? {base: 'wrap', md: 'nowrap'} : 'unset'}
      p="10px"
      borderRadius="30px"
      // boxShadow={shadow}
    >
      {/* <SearchBar
        mb={secondary ? {base: '10px', md: 'unset'} : 'unset'}
        me="10px"
        borderRadius="30px"
      /> */}
      <Flex
        bg={ethBg}
        display={secondary ? 'flex' : 'none'}
        borderRadius="30px"
        ms="auto"
        p="6px"
        align="center"
        me="6px"
      >
        <Flex
          align="center"
          justify="center"
          bg={ethBox}
          h="29px"
          w="29px"
          borderRadius="30px"
          me="7px"
        >
          <Icon color={ethColor} w="9px" h="14px" as={FaEthereum} />
        </Flex>
        <Text
          w="max-content"
          color={ethColor}
          fontSize="sm"
          fontWeight="700"
          me="6px"
        >
          1,924
          <Text as="span" display={{base: 'none', md: 'unset'}}>
            {' '}
            ETH
          </Text>
        </Text>
      </Flex>
      <SidebarResponsive routes={routes} />

      <Menu>
        <MenuButton
          h="40px"
          w="40px"
          zIndex="99"
          border="1px solid"
          borderColor="#6A53FF" mx='3'
          borderRadius="50px"
        >
          <Icon
            h="18px"
            as={IoLanguageOutline}
            w="18px"
            display="flex"
            m="auto"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          // me={{base: '30px', md: 'unset'}}
          // minW={{base: 'unset', md: '400px', xl: '450px'}}
          // maxW={{base: '360px', md: 'unset'}}
        >
          <Flex jusitfy="space-between" w="100%" m="10px">
            <Text fontSize="md" fontWeight="600" color={textColor}>
              Languages
            </Text>
            {/* <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Languages
            </Text> */}
          </Flex>
            {/* <MenuItem
              _hover={{bg: 'none'}}
              _focus={{bg: 'none'}}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="Horizon UI Dashboard PRO" aName="Alicia" />
            </MenuItem> */}
          
              <ItemContent
              />
        </MenuList>
      </Menu>

      {/* <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdInfoOutline}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          me={{base: '30px', md: 'unset'}}
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          minW={{base: 'unset'}}
          maxW={{base: '360px', md: 'unset'}}
        >
          <Image src={navImage} borderRadius="16px" mb="28px" />
          <Flex flexDirection="column">
            <Link
              w="100%"
              href="https://horizon-ui.com/pro?ref=horizon-chakra-free"
            >
              <Button w="100%" h="44px" mb="10px" variant="brand">
                Buy Horizon UI PRO
              </Button>
            </Link>
            <Link
              w="100%"
              href="https://horizon-ui.com/documentation/docs/introduction?ref=horizon-chakra-free"
            >
              <Button
                w="100%"
                h="44px"
                mb="10px"
                border="1px solid"
                bg="transparent"
                borderColor={borderButton}
              >
                See Documentation
              </Button>
            </Link>
            <Link
              w="100%"
              href="https://github.com/horizon-ui/horizon-ui-chakra"
            >
              <Button
                w="100%"
                h="44px"
                variant="no-hover"
                color={textColor}
                bg="transparent"
              >
                Try Horizon Free
              </Button>
            </Link>
          </Flex>
        </MenuList>
      </Menu> */}
      <FixedPlugin />

      {/* <ThemeEditor navbarIcon={navbarIcon} /> */}
      <Menu>
        <MenuButton p="0px">
          <Avatar
            _hover={{cursor: 'pointer'}}
            color="white"
            name="Adela Parkson"
            bg="#11047A"
            src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80'
            size="sm"
            w="40px"
            h="40px"
            ml="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex w="100%" p='3' pb='0'>
          <Avatar
            bg="#11047A"
            size="sm"
            m="8px" mt='4px'            src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80'
          />
          <Text
            fontSize="md"
            fontWeight="600"
            color={textColor} lineHeight='20px'
          >
            Caden Smith <Text fontSize="sm" fontWeight="500" color={textColor}>
              cadmail@gmail.com
            </Text>
          </Text>
          </Flex>
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{bg: 'none'}}
              _focus={{bg: 'none'}}
              borderRadius="8px"
              px="14px"
              icon={<FaRegUser /> }
            >
              <Text fontSize="sm">Profile</Text>
            </MenuItem>
            <MenuItem
              _hover={{bg: 'none'}}
              _focus={{bg: 'none'}}
              borderRadius="8px"
              icon={<IoSettingsOutline /> }
              px="14px"
            >
              <Text fontSize="sm">Settings</Text>
            </MenuItem>
            <MenuItem
              _hover={{bg: 'none'}}
              _focus={{bg: 'none'}}
              borderRadius="8px"
              icon={<RiBillLine /> } 
              px="14px"
            >
              <Text fontSize="sm">Billing</Text>
            </MenuItem>
            <MenuItem
              _hover={{bg: 'none'}}
              _focus={{bg: 'none'}}
              color="red.400"
              borderRadius="8px" 
              icon={<IoMdLogOut  /> }
              px="14px"
            >
              <Text fontSize="sm">Log out</Text>
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
