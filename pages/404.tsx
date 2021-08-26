import Picture from "@/components/Picture";
import { Box, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const FourOFour: React.FC = () => {
  return (
    <>
      <VStack alignItems="center" justify="center" height="100%">
        <Picture
          src="/assets/Error-404.png"
          srcset="/assets/Error-404.png"
          alt="error page"
          height="16rem"
        />
        <Box padding="2rem 0">
          <NextLink href="/">
            <Link color="white">Go back to home!</Link>
          </NextLink>
        </Box>
      </VStack>
    </>
  );
};

export default FourOFour;
