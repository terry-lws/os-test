import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../images/logo-white.png";

const Footer = () => {
  return (
    <Box backgroundColor="#2F2F2F">
      <Flex
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1280px"
        height={16}
      >
        <Image src={logo} width="90px" height="30px" alt="logo" />
        <Text fontSize="14px" fontFamily="'Roboto', sans-serif">
          © 2023 ACER
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
