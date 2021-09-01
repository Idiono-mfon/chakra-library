import { Box } from "@chakra-ui/react";
import Navbar from "./NavBar";

const Header = () => {
  return (
    <Box px="40px" color="#fff" py="20px" as="header" w="100%" bg="gray.700">
      <Navbar />
    </Box>
  );
};

export default Header;
