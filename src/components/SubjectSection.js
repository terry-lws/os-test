import { VStack, Text, Box, HStack } from "@chakra-ui/react";
import SubjectCard from "./SubjectCard";

const heading = "Available for years 4, 6 and 8";
const firstLine = "Online & multiple-choice";

const subject = [
  {
    name: "Mathematics",
    getImageSrc: () => require("../images/math.png"),
    altText: "Math logo",
  },
  {
    name: "Science",
    getImageSrc: () => require("../images/science.png"),
    altText: "Science logo",
  },
  {
    name: "Reading",
    getImageSrc: () => require("../images/reading.png"),
    altText: "Reading logo",
  },
];

const SubjectSection = () => {
  return (
    <Box
      display="flex"
      bgColor="#09257A"
      minHeight="50vh"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        maxWidth="1280px"
        justifyContent="top"
        position="relative"
        color="#ffffff"
        fontFamily="'Poppins', sans-serif"
        alignItems="center"
      >
        <Text fontSize="37px">{heading}</Text>
        <Text fontSize="20px" fontWeight="400" width="40.813rem" pt="11px">
          {firstLine}
        </Text>
        <HStack spacing="14.152rem" pt="65px">
          {subject.map((subject) => (
            <SubjectCard
              name={subject.name}
              imageSrc={subject.getImageSrc()}
              altText={subject.altText}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default SubjectSection;
