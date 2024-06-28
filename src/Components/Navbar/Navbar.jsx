import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ReachLink } from 'react-router-dom';
import logo from './../../Assets/logo.png';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        background: '#3E1F47',
      }}
    >
      <Box id="navbar" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <ReachLink to="/page2">
            <Box>
              <img
                style={{ height: '44px' }}
                className="logo"
                src={logo}
                alt="logo"
              />
            </Box>
          </ReachLink>

          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                to={'/parser'}
                style={{ color: 'white' }}
              >
                Parser{' '}
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                to={'/about'}
                style={{ color: 'white' }}
              >
                {' '}
                Extraction{' '}
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
                to={'/evaluation'}
                style={{ color: 'white' }}
              >
                {' '}
                Evaluation{' '}
              </ReachLink>
            </HStack>
          </HStack>

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Box>
    </div>
  );
}
