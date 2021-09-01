import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  Heading,
  Spacer,
  Button,
  HStack,
} from "@chakra-ui/react";

import {
  EmailIcon,
  AtSignIcon,
  AttachmentIcon,
  CalendarIcon,
} from "@chakra-ui/icons";

const SignUpForm = () => {
  const formData = {
    email: "example@address.com",
    password: "1234567898767567898767",
  };

  const [fmData, setfmData] = useState(formData);

  const handleChange = (e) => {
    setfmData({ ...fmData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fmData);
    // Add other Features Latter when submitting
  };

  return (
    <Flex justify="center">
      <Box bg="white" rounded="2xl" w="400px" mt="40px" px="60px">
        <Heading mt="10" mb="6" fontSize="26px" as="h6">
          Join the millions <br />
          learning for free
        </Heading>
        <Flex direction="column">
          <form onSubmit={handleSubmit}>
            <Box mb="25px">
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                py="6"
                type="email"
                value={fmData.email}
                onChange={handleChange}
              />
            </Box>
            <Spacer />
            <Box mb="25px">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                py="6"
                type="password"
                value={fmData.password}
                onChange={handleChange}
              />
            </Box>
            <Spacer />
            <Box mb="15px">
              <Button type="submit" py="7" color="#fff" w="100%" bg="#4450BC">
                Sign Up
              </Button>
            </Box>
            <Text mb="30px" fontSize="sm" fontWeight="bold">
              By signing up you agree to Terms of service and privacy policy
            </Text>
            <Text fontSize="sm" mb="2" fontWeight="bold">
              Or signup using:
            </Text>

            <HStack mb="40px">
              <Box
                cursor="pointer"
                rounded="md"
                border="2px"
                borderColor="gray.100"
                px="5"
                py="4"
              >
                <EmailIcon />
              </Box>
              <Box
                cursor="pointer"
                rounded="md"
                border="2px"
                borderColor="gray.100"
                px="5"
                py="4"
              >
                <AtSignIcon />
              </Box>
              <Box
                cursor="pointer"
                rounded="md"
                border="2px"
                borderColor="gray.100"
                px="5"
                py="4"
              >
                <AttachmentIcon />
              </Box>
              <Box
                cursor="pointer"
                rounded="md"
                border="2px"
                borderColor="gray.100"
                px="5"
                py="4"
              >
                <CalendarIcon />
              </Box>
            </HStack>
          </form>
        </Flex>
      </Box>
    </Flex>
  );
};

export default SignUpForm;
