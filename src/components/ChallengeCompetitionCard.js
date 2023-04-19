import { Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const ChallengeCompetitionCard = ({ name, date, imageSrc, altText }) => {
  return (
    <>
      <VStack>
        <Image src={imageSrc} alt={altText} height="56.43px" />
        <Text fontSize="22px" pt="20.43px" fontWeight="bold">
          {date}
        </Text>
        <Text fontFamily="'Roboto', sans-serif" fontSize="16px" pt="10px">{name}</Text>
      </VStack>
    </>
  );
};

export default ChallengeCompetitionCard;
