import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useMatch, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp, FaOpencart } from "react-icons/fa";
const Links = [
  // { name: "Home", to: "/" },
  // { name: "Blogs", to: "/blogs" },
  { name: "Home", to: "/" },
  { name: "Contact", to: "/contact" },
  { name: "Cart", to: "/cart" },
];

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  const match = useMatch(to);

  return (
    <RouterLink
      to={to}
      style={{
        padding: "0.5rem 0.75rem",
        borderRadius: "0.375rem",
        fontWeight: match ? "bold" : "normal",
        color: match ? "#0d9488" : "#374151",
        backgroundColor: match ? "#f3f4f6" : "transparent",
        textDecoration: "none",
        display: "block",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#e5e7eb";
        e.currentTarget.style.color = "#0d9488";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = match
          ? "#f3f4f6"
          : "transparent";
        e.currentTarget.style.color = match ? "#0d9488" : "#374151";
      }}
    >
      {children}
    </RouterLink>
  );
};

export default function Header() {
  const { onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const opnen = () => {
    setIsOpen(true);
    onOpen();
  };

  const close = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Box
      bg="#d0cccc26"
      px={4}
      shadow="lg"
      position="sticky"
      top={0}
      zIndex={1000}
      backdropFilter="blur(6.3px)"
    >
      <Flex h={24} alignItems="center" justifyContent="space-between" px={4}>
        {/* Logo Section */}
        <Flex align="center" gap={2}>
          <FaOpencart size={64} color="#009688" />
          <Text
            fontWeight="bold"
            fontSize="xl"
            color="teal.500"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Shop Easy
          </Text>
        </Flex>

        {/* Toggle Button (Mobile Only) */}
        <IconButton
          size="md"
          bg="#14b8a6"
          aria-label="Toggle Menu"
          display={{ md: "none" }}
          onClick={() => (isOpen ? close() : opnen())}
        >
          {isOpen ? <FaArrowCircleUp /> : <FaArrowCircleDown />}
        </IconButton>

        {/* Desktop Navigation */}
        <HStack display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.name}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Navigation */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav">
            {Links.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
