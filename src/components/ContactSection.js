import {
  VStack,
  Text,
  Box,
  HStack,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { TriangleUpIcon } from "@chakra-ui/icons";

const heading = "Contact us to find out more";
const subheading =
  "One of our friendly staff members will contact you within 24 hours";

const ContactSection = () => {
  const [showTextArea, setShowTextArea] = useState(false);

  function handleClick() {
    setShowTextArea((textAreaState) => !textAreaState);
  }

  return (
    <Box
      display="flex"
      minH="45vh"
      bgColor="#F5F5F5"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        m="71px 150px"
        maxWidth="1280px"
        justifyContent="top"
        position="relative"
        color="#2F2F2F"
        fontFamily="'Poppins', sans-serif"
        alignItems="center"
      >
        <Text fontSize="25px">{heading}</Text>
        <Text fontSize="14px" pt="13px">
          {subheading}
        </Text>
        <HStack
          pt="43px"
          spacing={{ base: "none", lg: "30px" }}
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="flex-start"
        >
          <VStack
            spacing="20px"
            w={{ base: "none", lg: "50%" }}
            alignItems="flex-start"
          >
            <Input
              w={{ base: "180px", lg: "360px" }}
              h="40px"
              fontSize="20px"
              placeholder="My name"
              _placeholder={{ color: "#707070" }}
              borderColor="#2F2F2F"
            />
            <Input
              w={{ base: "180px", lg: "360px" }}
              h="40px"
              fontSize="20px"
              placeholder="Email address"
              _placeholder={{ color: "#707070" }}
              borderColor="#2F2F2F"
            />
          </VStack>
          <VStack
            pt={{ base: "20px", lg: "0" }}
            spacing="20px"
            w={{ base: "none", lg: "50%" }}
            alignItems="flex-start"
          >
            <Input
              w={{ base: "180px", lg: "360px" }}
              h="40px"
              fontSize="20px"
              placeholder="School name"
              _placeholder={{ color: "#707070" }}
              borderColor="#2F2F2F"
            />
            <Select
              w={{ base: "180px", lg: "360px" }}
              h="40px"
              fontSize="20px"
              placeholder="Country"
              _placeholder={{ color: "#707070" }}
              borderColor="#2F2F2F"
            >
              <option value="aus">Australia</option>
              <option value="nz">New Zealand</option>
              <option value="other">Other</option>
            </Select>
            <Text
              color="#000000"
              fontFamily="'Roboto', sans-serif"
              fontSize="16px"
              textDecoration="underline"
              cursor="pointer"
              onClick={handleClick}
            >
              {showTextArea ? "Hide message box" : "Add message (optional)"}
            </Text>
            {showTextArea && (
              <Textarea
                placeholder="Enter your message here"
                _placeholder={{ color: "#707070" }}
                borderColor="#2F2F2F"
              />
            )}
            <button
              className="submit-button"
              style={{
                borderRadius: "65px",
                fontSize: "15px",
                padding: "4px 13px",
              }}
            >
              Send <TriangleUpIcon transform="rotate(90deg)" />
            </button>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
