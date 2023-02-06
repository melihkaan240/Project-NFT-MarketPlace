import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";

export default function () {
  return (
    <Flex marginTop="200px" display="flex" flexDirection="column">
      <Box
        w="1270PX"
        h="390px"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        borderRadius="20px"
        display="flex"
        flexDirection="column"
        gap="60px"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="13px"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="40px" textColor="white">
            Never miss a drop!
          </Text>
          <Text fontSize="14px" textColor="white">
            Subscribe to super-exclusive drop list and be the first to know
            about upcoming drops
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap="13px"
          justifyContent="center"
          alignItems="center"
        >
          <Input
            w="520px"
            borderRadius="50px"
            placeholder="Enter your email address"
            bg="rgba(255, 255, 255, 0.1)"
            border="none"
            textColor="white"
          />
          <Button
            marginRight="5"
            borderRadius="30"
            _hover={{
              background:
                "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
              textColor: "white",
            }}
            textColor="black"
          >
            Sell NFT
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="80px"
      >
        <Text fontSize="18px" textColor="white">
          © 2018 - 2022 TruefeedbackSea, Inc
        </Text>
      </Box>
    </Flex>
  );
}
