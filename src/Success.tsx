import { Box, Text, Image, Heading, Link, Center, Button } from '@chakra-ui/react'

function Success() {
  return (
    <Box>
      <Box minH="72.3vh">
      <Center p={4} bgColor="whitesmoke" justifyContent="space-between">
          <Text pl={2} fontSize="md" color="#196999" fontWeight="semibold">
          We recognize this device.
          </Text>
          <Text textDecor={'underline'} pl={2} fontSize="md" color="#196999" fontWeight="semibold"><a href='#'>
           View</a>
          </Text>
        </Center>

       

        <Box >
            <Center>
            <Image mt={10} w={120} src={'./images/tick.svg'} />
            </Center>
            <Box>
                <Center>
          <Heading px={4} pt={7} fontWeight="semibold" as="h2" fontSize="26" color="blackAlpha.800">
            Success
          </Heading>
          </Center>
        </Box>
            <Text textAlign={'center'}  fontWeight={'semibold'} mt={4} p={4} fontSize="15px" color="blackAlpha.800">
                          No further action is required. A representative will contact you within 24 to 72 hours.
                        </Text>
                        
        </Box>


       
    
          
          <Box p={4}>
         <Link href='https://www.usaa.com/help/contact/?wa_ref=pub_footer_contact&akredirect=true'>
          <Button _hover={{ bg: '#526f30', color: 'whitesmoke', borderRadius: 2 }} mt={2} h={12} bgColor="#486428" color="whitesmoke" borderRadius={2} w="100%">
            Continue
          </Button>
          </Link>
          </Box>

          
        </Box>
      </Box>
   
  )
}

export default Success;
