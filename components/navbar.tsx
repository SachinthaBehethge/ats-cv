'use client';
import { Box, Flex, Button,  Stack, IconButton, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { ColorModeButton } from './ui/color-mode';
import Link from 'next/link';

function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg={'blue.500'} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href={'/'}><Heading size="md">ATS-CV</Heading></Link>
        <IconButton
          size="md"
          children={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: 'none' }}
          onClick={toggleMenu}
        />
        <Flex alignItems="center">
          <Stack direction="row" gap={4} display={{ base: 'none', md: 'flex' }}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </Stack>
           <ColorModeButton />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} gap={4}>
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
