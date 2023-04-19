import { VStack, Text, Box, HStack, Divider } from "@chakra-ui/react";
import challengeBg from "../images/18e787a4bee8211cd588b70d13cf99e2.jpg"
import ChallengeProcedureSection from "./ChallengeProcedureCard";
import ChallengeCompetitionCard from "./ChallengeCompetitionCard";

const heading = "The 2023 challenge";
const firstLine =
  "Participation in the challenge is open to all registered Australian schools, with students required to be enrolled in a participating school to take part.";
const secondHeading = "Competition dates";

const procedure = [
  {
    name: "Registration",
    description: "On the XX of April 2021, registrations for the challenge will become available, with each subject costing XX per student to participate.",
    getImageSrc: () => require("../images/registration.png"),
    altText: "Registration logo",
  },
  {
    name: "Preparation",
    description: "After registering, simply add participating students to your ACER account, either new or existing, and allocate the challenge.",
    getImageSrc: () => require("../images/preparation.png"),
    altText: "Preparation logo",
  },
  {
    name: "Administration",
    description: "Using ACER's online assessment and reporting platform, the challenge is administered digitally, with each subject expected to take around XX minutes for students to finish.",
    getImageSrc: () => require("../images/administration.png"),
    altText: "Administration logo",
  },
];

const competition = [
    {
      name: "Mathematics",
      date: "Monday, 16 August",
      getImageSrc: () => require("../images/math.png"),
      altText: "Math logo",
    },
    {
      name: "Science",
      date: "Tuesday, 17 August",
      getImageSrc: () => require("../images/science.png"),
      altText: "Science logo",
    },
    {
      name: "Reading",
      date: "Wednesday, 18 August",
      getImageSrc: () => require("../images/reading.png"),
      altText: "Reading logo",
    },
  ];

const ChallengeSection = () => {
  return (
    <Box
      display="flex"
      bg={`linear-gradient(180deg, rgba(22, 71, 86, 0) 0%, #164756 100%), url(${challengeBg})`}
      bgSize="cover"
      bgPosition="right"
      minHeight="100vh"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        pt={130}
        maxWidth="1280px"
        justifyContent="top"
        position="relative"
        color="#ffffff"
        fontFamily="'Poppins', sans-serif"
        alignItems="center"
      >
        <Text fontSize="37px">{heading}</Text>
        <Text fontSize="20px" fontWeight="400" width="51.875rem" pt="11px">
          {firstLine}
        </Text>
        <HStack spacing="11.25rem" p="65px 0 137px 0">
          {procedure.map((procedure) => (
            <ChallengeProcedureSection
              name={procedure.name}
              description={procedure.description}
              imageSrc={procedure.getImageSrc()}
              altText={procedure.altText}
            />
          ))}
        </HStack>
        <Divider opacity={1} borderWidth="2px" />
        <Text fontSize="37px" p="61px 0 45px 0">{secondHeading}</Text>
        <HStack spacing="11.25rem" p="65px 0 137px 0">
          {competition.map((competition) => (
            <ChallengeCompetitionCard
              name={competition.name}
              date={competition.date}
              imageSrc={competition.getImageSrc()}
              altText={competition.altText}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChallengeSection;
