import {
  Box,
  HStack,
  Text,
  Image,
  Flex,
  Link,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function Navbar() {
  const { onClose } = useDisclosure();

  return (
    <Box
      minW="100%"
      fontSize="lg"
      display={{ base: "flex", md: "flex" }}
      fontWeight="semibold"
      bgColor="#12395b"
    >
      <Flex
        h="100%"
        p={3}
        mx={{ base: 0, md: 0, lg: 40 }}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex w="100%">
          <Link href="/">
            <Box>
              <Image w={55.5} src="../images/uss.png" alt="logo" />
            </Box>
          </Link>
        </Flex>

        <HStack
          spacing={1}
          pt={6}
          pb={0}
          fontSize="12"
          fontWeight="semibold"
          color="whitesmoke"
        >
          <Flex>
            <Text _hover={{ bgColor: "black" }} w="100%">
              JOIN
            </Text>
            <Text pl={1} pr={2} _hover={{ bgColor: "black" }} w="100%">
              USAA
            </Text>
          </Flex>
          <Text _hover={{ bgColor: "black" }} w="100%">
            REGISTER
          </Text>
          <Box pl={2} h={8} borderRight={"3px solid white"}></Box>
          <CloseButton onClick={onClose} />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
