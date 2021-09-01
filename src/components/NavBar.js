import { Flex, Box, Heading, Text, HStack } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { url } from "../config/Url";

const NavBar = () => {
  const { homeUrl, signInUrl, staffSectionUrl } = url;

  return (
    <Flex justify="space-between">
      <Box>
        <Heading>
          MyChakraLib <MoonIcon />
        </Heading>
      </Box>

      <HStack spacing="24px">
        <Box>
          <Link to={homeUrl}>
            <Text fontSize="lg">Home</Text>
          </Link>
        </Box>
        <Box>
          <Link to={signInUrl}>
            <Text fontSize="lg">SignUp Form</Text>
          </Link>
        </Box>
        <Box>
          <Link to={staffSectionUrl}>
            <Text fontSize="lg">Staff Section</Text>
          </Link>
        </Box>
      </HStack>
    </Flex>
  );
};

export default NavBar;
