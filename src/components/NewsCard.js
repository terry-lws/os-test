import {
  Heading,
  Image,
  Text,
  VStack,
  Box,
  Card,
  CardBody,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const NewsCard = ({ title, date, imageSrc, altText }) => {
  return (
    <>
      <Card minH="290px" maxW="263px" box-shadow="0px 0px 5px rgba(0, 0, 0, 0.25)" borderRadius="4px" color="#2F2F2F">
        <CardBody p={0}>
          <Image src={imageSrc} alt={altText} />
          <Stack>
            <HStack p="19px 23px 18px 15px" justifyContent="space-between">
              <Text fontSize="xs">{date}</Text>
              <Text fontSize="xs">Higer education</Text>
            </HStack>
            <Text textAlign="left" fontSize="16px" px="15px">{title}</Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default NewsCard;
