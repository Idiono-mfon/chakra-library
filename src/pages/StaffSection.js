import {
  Flex,
  Box,
  Heading,
  HStack,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";

import { AtSignIcon, AttachmentIcon } from "@chakra-ui/icons";

const StaffSection = () => {
  return (
    <Flex as="section" mt="9" justify="center" align="center">
      <Box
        shadow="xl"
        p={{ base: "10", md: "12" }}
        bg="#fff"
        rounded="md"
        maxW="600px"
      >
        <Heading as="h4" mb="8" size="md">
          Our Staffs
        </Heading>
        <Flex wrap="wrap" mb="5">
          <Box mr="5" mb={{ base: "6" }}>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box>
                <Heading as="h5" size="md" mb="1">
                  Catherine Winn
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Editorial Director
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box>
                <Heading as="h5" size="md" mb="1">
                  Norma Goldstein
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Editor in Chief
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex wrap="wrap" mb="5">
          <Box mr="5" mb={{ base: "6" }}>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box w="150px">
                <Heading as="h5" size="md" mb="1">
                  Terry Amaral
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Senior Editor
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box>
                <Heading as="h5" size="md" mb="1">
                  Tessa Alexander
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Senoir Reporter
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Flex wrap="wrap" mb="5">
          <Box mr="5" mb={{ base: "6" }}>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box w="150px">
                <Heading as="h5" size="md" mb="1">
                  James Smith
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Editorial Director
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex>
              <Box
                as="img"
                alt="Alex pics"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                objectFit="cover"
                w="80px"
                h="80px"
                rounded="full"
                mr="3"
              ></Box>
              <Box w="150px">
                <Heading as="h5" size="md" mb="1">
                  Erik Miles
                </Heading>
                <Text mb="1" fontWeight="medium">
                  Editor
                </Text>
                <HStack spacing="3">
                  <Box>
                    <Text>
                      <AtSignIcon /> Email
                    </Text>
                  </Box>
                  <Box>
                    <Text>
                      . <AttachmentIcon />
                      Twitter
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Button
          bg="#1F2224"
          mt="4"
          textAlign="center"
          px="5"
          py="6"
          color="#fff"
        >
          View everyone
        </Button>
      </Box>
    </Flex>
  );
};

export default StaffSection;
