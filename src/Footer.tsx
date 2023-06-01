import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Box>
            <Flex  bgColor="#12395b" color={'whitesmoke'} p={'16px'} display={'block'}>
                <Text textDecor={'underline'}>Security Center</Text>
                <Text textDecor={'underline'}>Privacy Center</Text>
                <Text textDecor={'underline'}>Accessibility at USAA</Text>
                <Text fontSize={'small'} pt={5}>
                    Copyright © 2023 USAA.
                </Text>
                <Text fontSize={'small'} pt={1} pb={1}>
                    NC-1120
                </Text>
            </Flex>
        </Box>

    )
}

export default Footer;