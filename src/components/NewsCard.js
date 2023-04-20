import {
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  HStack,
  Box,
} from "@chakra-ui/react";
import React from "react";

const NewsCard = ({ title, date, imageSrc, altText }) => {
  return (
    <Box style={{ paddingTop: "30px" }}>
      <Card
        cursor="pointer"
        minH="350px"
        maxW="263px"
        minW={{base:"250px", xl:"none"}}
        box-shadow="0px 0px 5px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
        color="#2F2F2F"
      >
        <CardBody p={0}>
          <Image src={imageSrc} alt={altText} />
          <Stack>
            <HStack
              spacing={{base:"0", xl:"2"}}
              p="19px 23px 18px 15px"
              flexDirection={{ base: "column", xl: "row" }}
              alignItems={{ base: "flex-start", xl: "center" }}
              justifyContent="space-between"
            >
              <Text fontSize="xs">{date}</Text>
              <Text fontSize="xs">Higher education</Text>
            </HStack>
            <Text textAlign="left" fontSize="16px" px="15px">
              {title}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default NewsCard;
