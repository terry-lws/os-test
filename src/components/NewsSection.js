import { VStack, Text, Box, HStack } from "@chakra-ui/react";
import NewsCard from "./NewsCard";

const heading = "Discover the latest from ACER";

const news = [
  {
    title:
      "Investing in teacher development: Building an evidence base in Lao PDR",
    date: "9 August 2022",
    getImageSrc: () => require("../images/image1.png"),
    altText: "Math logo",
  },
  {
    title: "Snapshot of Australian teachers and principals",
    date: "30 August 2022",
    getImageSrc: () => require("../images/image2.png"),
    altText: "Science logo",
  },
  {
    title: "Building the evidence base for educational quality in the Pacific",
    date: "5 December 2022",
    getImageSrc: () => require("../images/image3.png"),
    altText: "Reading logo",
  },
  {
    title: "A knowledge portal on learning assessments for South Asia",
    date: "8 November 2022",
    getImageSrc: () => require("../images/image4.png"),
    altText: "Reading logo",
  },
];

const NewsSection = () => {
  return (
    <Box
      display="flex"
      minH="50vh"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        m="120px 150px"
        maxWidth="1280px"
        justifyContent="top"
        position="relative"
        color="#000000"
        fontFamily="'Poppins', sans-serif"
        alignItems="center"
      >
        <Text fontSize="25px" color="#333333">
          {heading}
        </Text>
        <HStack spacing="1.875rem" pt="30px">
          {news.map((news) => (
            <NewsCard
              title={news.title}
              date={news.date}
              imageSrc={news.getImageSrc()}
              altText={news.altText}
            />
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default NewsSection;
