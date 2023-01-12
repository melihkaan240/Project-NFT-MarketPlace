import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  Option,
  Image,
  Mark,
} from "@chakra-ui/react";

export default function () {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      marginTop="100px"
    >
      <Flex display="flex" flexDirection="column" gap="30px">
        <Flex>
          <Text
            fontSize="66"
            fontWeight="700"
            lineHeight="80px"
            textColor="white"
          >
            Discover & Collect <br />{" "}
            <Mark
              bgGradient="linear(to-l, #F7FC0E, #FF8D8D)"
              textColor="transparent"
              bgClip="text"
            >
              Super Rare
            </Mark>{" "}
            Digital <br /> Artworks
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="16" lineHeight="20px" textColor="white">
            The largest NFT marketplace. Authentic and truly unique digital{" "}
            <br />
            creation. Signed and issued by the creator, made possible by <br />
            blockchain technology
          </Text>
        </Flex>
        <Flex paddingTop="15px">
          <Button
            marginRight="5"
            borderRadius="30"
            textColor="white"
            bg="linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)"
            _hover={{ textColor: "black", background: "white" }}
          >
            Let’s Explore
          </Button>
          <Button
            marginRight="5"
            bg="white"
            textColor="black"
            borderRadius="30"
            borderColor="white"
            _hover={{
              textColor: "white",
              background:
                "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
              border: "none",
            }}
          >
            Sell NFT
          </Button>
        </Flex>
      </Flex>
      <Flex>
        <Image src="images/getstarted.png" w="650px" h="520px" />
      </Flex>
    </Flex>
  );
}
