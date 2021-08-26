import { Box, Heading } from "@chakra-ui/react";

const TraddingApp: React.FC = () => {
  return (
    <Box width="100%">
      <Heading
        as="h1"
        color="quorum.gray.300"
        textAlign={{ base: "center", sm: "center", md: "left" }}
        fontFamily="SF Pro Display Regular"
      >
        Tradding App
      </Heading>
    </Box>
  );
};

export default TraddingApp;
