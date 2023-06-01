import { Box, Text, Image, Heading, Center, Button, Checkbox, VStack, Flex, Link } from '@chakra-ui/react'

function Secure() {
  return (
    <Box>
      <Box minH="72.3vh">
      

        <Box>
        <Center p={4} bgColor="whitesmoke" justifyContent="space-between">
          <Text pl={2} fontSize="md" color="#196999" fontWeight="semibold">
          We recognize this device.
          </Text>
          <Text textDecor={'underline'} pl={2} fontSize="md" color="#196999" fontWeight="semibold"><a href='#'>
           View</a>
          </Text>
        </Center>
        <Center>
            <Image mt={10} w={120} src={'./images/lert.svg'} />
            
            </Center>
            <Box>
          <Heading px={4} fontFamily={'serif'} textAlign="center" pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
            Alert
          </Heading>
        </Box>
            <Text textAlign={'center'} fontWeight={'semibold'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          We notice there have been recent updates to your alerts. Please select how you would like USAA to contact you.
                        </Text>
                        <Center>
                        <VStack align={'start'}>
                            <Flex>
                            <Checkbox  pr={2} /> <Text>Text</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>Call</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>E-mail</Text>
                            </Flex>
                            <Flex>
                            <Checkbox pr={2} /> <Text>USAA App</Text>
                            </Flex>
                        </VStack>
                        </Center>
        </Box>


       
    
          
          <Box p={4}>
            <Link href="/login">
          <Button mt={5} h={12} _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }} bgColor="#486428"  color="whitesmoke" borderRadius={2} w="100%">
            Continue
          </Button>
          </Link>
          
          </Box>

          
        </Box>
      </Box>
   
  )
}

export default Secure;
