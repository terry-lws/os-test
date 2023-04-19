import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ChallengeProcedureSection = ({ name, description, imageSrc, altText }) => {
  return (
    <>
      <VStack>
        <Image src={imageSrc} alt={altText} height="98.87px" />
        <Text fontSize="20px" pt="20.43px">
          {name}
        </Text>
        <Text fontFamily="'Roboto', sans-serif" fontSize="16px" pt="10px">{description}</Text>
      </VStack>
    </>
  );
};

export default ChallengeProcedureSection;
