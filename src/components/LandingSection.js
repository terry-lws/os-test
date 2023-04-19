import { VStack, Text, Box } from "@chakra-ui/react";
import landingBg from "../images/shutterstock_1194279880_Blue-extended-lighter.jpg";

const firstLine = "CHALLENGE YOUR STUDENTS ON THE WORLD STAGE";
const secondLine = "A test page to demonstrate my skills";
const thirdLine =
  "Motivate top-performing students, assess their progress, and celebrate their achievements.";

const LandingSection = () => {
  return (
    <Box
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      minHeight="100vh"
      bg={`url(${landingBg})`}
      bgSize="cover"
      textAlign="center"
    >
      <VStack
        m="0 150px"
        maxWidth="1280px"
        alignItems="flex-start"
        justifyContent="top"
        position="relative"
        color="#000000"
        fontFamily="'Poppins', sans-serif"
        textAlign="left"
      >
        <Text fontSize="18px">{firstLine}</Text>
        <Text
          fontSize="52px"
          fontStyle="normal"
          fontWeight="400"
          width="40.813rem"
          height="7.438rem"
          pt="13px"
          lineHeight="68px"
        >
          {secondLine}
        </Text>
        <Text fontSize="20px" width="543px" pt="38px">
          {thirdLine}
        </Text>
        <a href="#">
          <button
            style={{
              backgroundColor: "#04726D",
              color: "#ffffff",
              fontFamily: "Arial",
              borderRadius: "65px",
              width: "199px",
              height: "64px",
              fontSize: "18px",
              marginTop: "1.438rem",
              fontWeight: "400",
            }}
          >
            Find out more
          </button>
        </a>
      </VStack>
    </Box>
  );
};

export default LandingSection;
