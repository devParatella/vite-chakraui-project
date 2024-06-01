import React from "react";
import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">Logo</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Home</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">About</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Services</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Contact</Link>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Home</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">About</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Services</Link>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} href="#">Contact</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
