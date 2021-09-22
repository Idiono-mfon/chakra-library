import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Circle,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
  Button,
  Heading,
  AvatarGroup,
  Avatar,
  Progress,
} from "@chakra-ui/react";

import {
  FaTachometerAlt,
  FaBookOpen,
  FaCaretUp,
  FaBook,
  FaMap,
  FaMoneyCheckAlt,
  FaArrowUp,
  FaArrowDown,
  FaUserNurse,
} from "react-icons/fa";

const StatWidget = () => {
  return (
    <Box as="section" p={{ base: "8" }}>
      <Text textTransform="uppercase" letterSpacing="3px" my="6" fontSize="2xl">
        Stats Widgets
      </Text>
      {/* First Statistics Component start */}
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        wrap={{ md: "wrap" }}
        mb={{ base: "8" }}
      >
        <Box
          flexBasis={{ md: "40%", lg: "20%" }}
          bg="white"
          overflow="hidden"
          shadow="xl"
          flex="1"
          mb="6"
          rounded="xl"
          mr={{ md: "8" }}
        >
          <HStack p="8" justify="space-between">
            <Box>
              <Text mb="2" fontSize="2xl" color="red.500" fontWeight="medium">
                $10, 500
              </Text>
              <Text
                fontSize="sm"
                color="gray.700"
                letterSpacing="3px"
                textTransform="uppercase"
                fontWeight="medium"
              >
                Earnings
              </Text>
            </Box>
            <Box w="30px" h="30px" borderColor="red.500" color="red.500" pt="1">
              <Center>
                <FaTachometerAlt fontSize="35px" />
              </Center>
            </Box>
          </HStack>
          <HStack
            color="red.600"
            justify="space-between"
            bg="red.100"
            px="8"
            py="4"
            fontWeight="medium"
          >
            <Text>20% increase</Text>
            <Text>
              <FaCaretUp />
            </Text>
          </HStack>
        </Box>
        <Box
          flexBasis={{ md: "40%", lg: "20%" }}
          bg="white"
          overflow="hidden"
          shadow="xl"
          mb="6"
          flex="1"
          rounded="xl"
          mr={{ lg: "8" }}
        >
          <HStack p="8" justify="space-between">
            <Box>
              <Text mb="2" fontSize="2xl" color="blue.500" fontWeight="medium">
                584
              </Text>
              <Text
                fontSize="sm"
                color="gray.700"
                letterSpacing="3px"
                textTransform="uppercase"
                fontWeight="medium"
              >
                Readers
              </Text>
            </Box>
            <Box
              w="30px"
              h="30px"
              borderColor="red.500"
              color="blue.500"
              pt="1"
            >
              <Center>
                <FaBookOpen fontSize="35px" />
              </Center>
            </Box>
          </HStack>
          <HStack
            color="blue.600"
            justify="space-between"
            bg="blue.100"
            px="8"
            py="4"
            fontWeight="medium"
          >
            <Text>3% increase</Text>
            <Text>
              <FaCaretUp />
            </Text>
          </HStack>
        </Box>
        <Box
          flexBasis={{ md: "40%", lg: "20%" }}
          bg="white"
          overflow="hidden"
          shadow="xl"
          mb="6"
          rounded="xl"
          flex="1"
          mr={{ md: "8" }}
        >
          <HStack p="8" justify="space-between">
            <Box>
              <Text
                mb="2"
                fontSize="2xl"
                color="purple.500"
                fontWeight="medium"
              >
                876
              </Text>
              <Text
                fontSize="sm"
                color="gray.700"
                letterSpacing="3px"
                textTransform="uppercase"
                fontWeight="medium"
              >
                Bookmarks
              </Text>
            </Box>
            <Box
              w="30px"
              h="30px"
              borderColor="red.500"
              color="purple.500"
              pt="1"
            >
              <Center>
                <FaBook fontSize="35px" />
              </Center>
            </Box>
          </HStack>
          <HStack
            color="purple.600"
            justify="space-between"
            bg="purple.100"
            px="8"
            py="4"
            fontWeight="medium"
          >
            <Text>10% increase</Text>
            <Text>
              <FaCaretUp />
            </Text>
          </HStack>
        </Box>
        <Box
          flexBasis={{ md: "40%", lg: "20%" }}
          bg="white"
          overflow="hidden"
          shadow="xl"
          mb="6"
          flex="1"
          rounded="xl"
        >
          <HStack p="8" justify="space-between">
            <Box>
              <Text mb="2" fontSize="2xl" color="green.500" fontWeight="medium">
                3,500
              </Text>
              <Text
                fontSize="sm"
                color="gray.700"
                letterSpacing="3px"
                textTransform="uppercase"
                fontWeight="medium"
              >
                Visitors
              </Text>
            </Box>
            <Box w="30px" h="30px" color="green.500" pt="1">
              <Center>
                <FaMap fontSize="35px" />
              </Center>
            </Box>
          </HStack>
          <HStack
            color="green.600"
            justify="space-between"
            bg="green.100"
            px="8"
            py="4"
            fontWeight="medium"
          >
            <Text>5% increase</Text>
            <Text>
              <FaCaretUp />
            </Text>
          </HStack>
        </Box>
      </Flex>
      {/* First statistics component ends Here */}

      {/* Second statistics component starts here */}
      <SimpleGrid columns={3} spacing="30px" minChildWidth="200px">
        <Box bg="white" px="8" py="6" rounded="lg">
          <Text fontSize="2xl" fontWeight="light" color="gray.500">
            All Earnings
          </Text>
          <HStack my={{ lg: "-3" }} justifyContent="space-between">
            <Text color="purple.700" fontSize="3xl">
              $19, 200
            </Text>
            <Circle
              size="20"
              fontSize="30px"
              color="purple.700"
              bg="purple.200"
              display={{ base: "none", lg: "flex" }}
            >
              <FaMoneyCheckAlt />
            </Circle>
          </HStack>
          <HStack>
            <Text>$2, 132 </Text>
            <Box color="purple.700">
              <FaArrowUp />
            </Box>
          </HStack>
        </Box>
        <Box bg="white" px="8" py="6" rounded="lg">
          <Text fontSize="2xl" fontWeight="light" color="gray.500">
            Offers
          </Text>
          <HStack my={{ lg: "-3" }} justifyContent="space-between">
            <Text color="green.700" fontSize="3xl">
              $12,500
            </Text>
            <Circle
              size="20"
              fontSize="30px"
              color="green.700"
              bg="green.200"
              display={{ base: "none", lg: "flex" }}
            >
              <FaMoneyCheckAlt />
            </Circle>
          </HStack>
          <HStack>
            <Text>$2, 132 </Text>
            <Box color="green.700">
              <FaArrowUp />
            </Box>
          </HStack>
        </Box>
        <Box bg="white" px="8" py="6" rounded="lg">
          <Text fontSize="2xl" fontWeight="light" color="gray.500">
            All Earnings
          </Text>
          <HStack my={{ lg: "-3" }} justifyContent="space-between">
            <Text color="purple.700" fontSize="3xl">
              $19, 200
            </Text>
            <Circle
              size="20"
              fontSize="30px"
              color="purple.900"
              bg="purple.300"
              display={{ base: "none", lg: "flex" }}
            >
              <FaMoneyCheckAlt />
            </Circle>
          </HStack>
          <HStack>
            <Text>$2, 132 </Text>
            <Text color="purple.900">
              <FaArrowUp />
            </Text>
          </HStack>
        </Box>
      </SimpleGrid>
      {/* Second statistics component ends here */}

      {/* Third statistics components */}

      <SimpleGrid mt="14" columns={4} spacing="30px" minChildWidth="200px">
        <Flex
          justify="center"
          py="9"
          align="center"
          bg="white"
          direction="column"
          rounded="lg"
        >
          <VStack spacing="1">
            <Text fontSize="20px" fontWeight="bold">
              Earnings
            </Text>
            <HStack fontSize="3xl" fontWeight="bold">
              <Box color="teal.400">
                <FaArrowUp />
              </Box>
              <Text>$10, 500</Text>
            </HStack>
            <Text fontWeight="medium">20% increase</Text>
          </VStack>
        </Flex>
        <Flex
          justify="center"
          py="9"
          align="center"
          bg="white"
          direction="column"
          rounded="lg"
        >
          <VStack spacing="1">
            <Text fontSize="20px" fontWeight="bold">
              Readers
            </Text>
            <HStack fontSize="3xl" fontWeight="bold">
              <Box color="teal.400">
                <FaArrowUp />
              </Box>
              <Text>584</Text>
            </HStack>
            <Text fontWeight="medium">3% increase</Text>
          </VStack>
        </Flex>
        <Flex
          justify="center"
          py="9"
          align="center"
          bg="white"
          direction="column"
          rounded="lg"
        >
          <VStack spacing="1">
            <Text fontSize="20px" fontWeight="bold">
              Bookmarks
            </Text>
            <HStack fontSize="3xl" fontWeight="bold">
              <Box color="teal.400">
                <FaArrowUp />
              </Box>
              <Text>876</Text>
            </HStack>
            <Text fontWeight="medium">10% increase</Text>
          </VStack>
        </Flex>
        <Flex
          justify="center"
          py="9"
          align="center"
          bg="white"
          direction="column"
          rounded="lg"
        >
          <VStack spacing="1">
            <Text fontSize="20px" fontWeight="bold">
              Visitors
            </Text>
            <HStack fontSize="3xl" fontWeight="bold">
              <Box color="red.600">
                <FaArrowUp />
              </Box>
              <Text>3, 500</Text>
            </HStack>
            <Text fontWeight="medium">5% increase</Text>
          </VStack>
        </Flex>
      </SimpleGrid>
      {/* End third statistics component */}

      {/* Fourth Statistics component */}

      <SimpleGrid
        mb="14"
        columns={3}
        spacing="30px"
        minChildWidth="300px"
        mt="14"
      >
        <Flex
          py="9"
          justify="center"
          align="center"
          direction="column"
          bg="white"
          rounded="lg"
          shadow="2xl"
        >
          <Circle mb="4" size="20" color="red.700" fontSize="2xl" bg="red.200">
            <FaUserNurse />
          </Circle>
          <VStack mb="4" spacing="1">
            <Text fontSize="3xl">
              <span style={{ fontWeight: "bolder", color: "#9B2C2C" }}>
                526{" "}
              </span>
              subscribers
            </Text>
            <Text>20% change</Text>
          </VStack>
          <Button bg="red.500" color="white" p="2">
            Manage List
          </Button>
        </Flex>
        <Flex
          py="9"
          justify="center"
          align="center"
          direction="column"
          bg="white"
          rounded="lg"
          shadow="2xl"
        >
          <Circle
            mb="4"
            size="20"
            color="blue.700"
            fontSize="2xl"
            bg="blue.100"
          >
            <FaBookOpen />
          </Circle>
          <VStack mb="4" spacing="1">
            <Text fontSize="3xl">
              <span style={{ fontWeight: "bolder", color: "#2C7A7B" }}>
                3, 526&nbsp;
              </span>
              readers
            </Text>
            <Text>35% change</Text>
          </VStack>
          <Button bg="teal.600" color="white" p="2">
            See Details
          </Button>
        </Flex>
        <Flex
          py="9"
          justify="center"
          align="center"
          direction="column"
          bg="white"
          rounded="lg"
          shadow="2xl"
        >
          <Circle
            mb="4"
            size="20"
            color="purple.700"
            fontSize="2xl"
            bg="purple.200"
          >
            <FaUserNurse />
          </Circle>
          <VStack mb="4" spacing="1">
            <Text fontSize="3xl">
              <span style={{ fontWeight: "bolder", color: "#553C9A" }}>
                1,526&nbsp;
              </span>
              photos
            </Text>
            <Text>18% change</Text>
          </VStack>
          <Button bg="purple.700" color="white" p="2">
            Upload New
          </Button>
        </Flex>
      </SimpleGrid>

      {/* End Fourth Statistics Component */}

      {/* Start Fifth Chakra Statistics Component*/}

      <SimpleGrid mb="14" columns={2} minChildWidth="400px" spacing="10">
        <Box bg="white" p="8" rounded="lg" shadow="2xl" border="none">
          <HStack mb="6" justifyContent="space-between">
            <Box>
              <Heading as="h5" size="sm">
                Publish New Theme
              </Heading>
              <Text color="purple.600">Web Design</Text>
            </Box>
            <Button color="white" bg="purple.700">
              Completed
            </Button>
          </HStack>
          <Text color="gray.600" mb="4" pr={{ lg: "20" }}>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like ba
          </Text>
          <HStack spacing="10">
            <Text fontWeight="bold" fontSize="2xl">
              23
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              2
            </Text>
          </HStack>
          <HStack spacing="10" color="gray.600">
            <Text>Updates</Text>
            <Text>Milestone</Text>
          </HStack>

          <Box mt="6" mb="6">
            <AvatarGroup>
              <Avatar
                name="Namie Jason"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                shadow="lg"
                border="4px"
                borderColor="white"
              ></Avatar>
              <Avatar
                name="Kyle thompson"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                border="4px"
                borderColor="white"
                shadow="lg"
              ></Avatar>
            </AvatarGroup>
          </Box>

          <Progress rounded="lg" colorScheme="purple" size="sm" value={70} />
        </Box>
        <Box bg="white" p="8" rounded="lg" shadow="2xl" border="none">
          <HStack mb="6" justifyContent="space-between">
            <Box>
              <Heading as="h5" size="sm">
                Publish New Theme
              </Heading>
              <Text color="teal.600">Web Design</Text>
            </Box>
            <Button color="white" bg="teal.500">
              Completed
            </Button>
          </HStack>
          <Text color="gray.600" mb="4" pr={{ lg: "20" }}>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like ba
          </Text>
          <HStack spacing="10">
            <Text fontWeight="bold" fontSize="2xl">
              23
            </Text>
            <Text fontWeight="bold" fontSize="2xl">
              2
            </Text>
          </HStack>
          <HStack spacing="10" color="gray.600">
            <Text>Updates</Text>
            <Text>Milestone</Text>
          </HStack>

          <Box mt="6" mb="6">
            <AvatarGroup>
              <Avatar
                name="Namie Jason"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                shadow="lg"
                border="4px"
                borderColor="white"
              ></Avatar>
              <Avatar
                name="Kyle thompson"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                border="4px"
                borderColor="white"
                shadow="lg"
              ></Avatar>
              <Avatar
                name="Kyle thompson"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                border="4px"
                borderColor="white"
                shadow="lg"
              ></Avatar>
              <Avatar
                name="Kyle thompson"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                border="4px"
                borderColor="white"
                shadow="lg"
              ></Avatar>
              <Avatar
                name="Kyle thompson"
                src="https://images.pexels.com/photos/3870819/pexels-photo-3870819.jpeg"
                border="4px"
                borderColor="white"
                shadow="lg"
              ></Avatar>
            </AvatarGroup>
          </Box>

          <Progress rounded="lg" color="teal.500" size="sm" value={70} />
        </Box>
      </SimpleGrid>

      {/* End Fifth Chakra Statistics Component  */}

      {/* Start Sixth chakra statistics component */}
      <SimpleGrid mb="14" minChildWidth="300px" spacing="10">
        <Flex
          justify={{ md: "space-between" }}
          bg="white"
          p="8"
          direction={{ base: "column", md: "row" }}
          rounded="lg"
        >
          <Box w="100%" maxW={{ base: "100%", md: "250px" }}>
            <Heading size="md">625</Heading>
            <Text mb="4">New Customers</Text>
            <Progress rounded="md" value={60} size="sm" color="teal.500" />
          </Box>
          <Flex justify="center">
            <Box mr="24">
              <Heading size="md" mb="2">
                254
              </Heading>
              <Text mb="2">Affiliates</Text>
              <hr />
              <Text mt="2">+125</Text>
            </Box>
            <Box>
              <Heading size="md" mb="2">
                328
              </Heading>
              <Text mb="2">SEM</Text>
              <hr />
              <Text mt="2">+144</Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          justify={{ md: "space-between" }}
          bg="white"
          p="8"
          rounded="lg"
          direction={{ base: "column", md: "row" }}
        >
          <Box pr="6" w="100%" maxW={{ base: "100%", md: "250px" }}>
            <Heading size="md">625</Heading>
            <Text mb="4">New Customers</Text>
            <Progress
              w="100%"
              rounded="lg"
              value={60}
              size="sm"
              color="teal.500"
            />
          </Box>
          <Flex justify={{ base: "center", md: "left" }}>
            <Box mr={{ base: "24", md: "12" }}>
              <Heading size="md" mb="2">
                254
              </Heading>
              <Text mb="2">Affiliates</Text>
              <hr />
              <Text mt="2">+125</Text>
            </Box>
            <Box>
              <Heading size="md" mb="2">
                328
              </Heading>
              <Text mb="2">SEM</Text>
              <hr />
              <Text mt="2">+144</Text>
            </Box>
          </Flex>
        </Flex>
      </SimpleGrid>
      {/* End sixth chakra statistics component */}

      <SimpleGrid spacing="10" minChildWidth="200px">
        <Box bg="white" boxRadius="20px" overflow="hidden">
          <Text
            p="6"
            boxShadow="0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
          >
            Lines of code
          </Text>
          <Box>
            <Text>828</Text>
            <Flex>
              <Box>
                <Text>Tabs</Text>
                <Text>456</Text>
              </Box>
              <Box>
                <Text>Spaces</Text>
                <Text>125</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box rounded="2xl">
          <Text
            p="6"
            boxShadow="0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)"
          >
            Lines of code
          </Text>
          <Box>
            <Text>828</Text>
            <Flex>
              <Box>
                <Text>Tabs</Text>
                <Text>456</Text>
              </Box>
              <Box>
                <Text>Spaces</Text>
                <Text>125</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default StatWidget;
