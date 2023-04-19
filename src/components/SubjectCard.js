import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const SubjectCard = ({ name, imageSrc, altText }) => {
  return (
    <>
      <VStack>
        <Image src={imageSrc} alt={altText} />
        <Text fontSize="20px" pt="20.43px">
          {name}
        </Text>
      </VStack>
    </>
  );
};

export default SubjectCard;
