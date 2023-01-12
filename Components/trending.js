import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  Option,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function () {
  return (
    <Flex display="flex" flexDirection="column" marginTop="120px">
      <Flex
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-around"
      >
        <Text fontSize="60px" fontWeight="600" textColor="white">
          Trending This Week
        </Text>
        <Text fontSize="20px" paddingTop="20px" opacity="0.5" textColor="white">
          Various kinds of Artwork categories that are trending this <br />{" "}
          week. The trend will be reset every week. Don’t miss out <br /> on the
          best artworks every week
        </Text>
      </Flex>
      <Grid
        paddingTop="90px"
        templateColumns="repeat(2, 1fr)"
        gridRowGap="150px"
      >
        <GridItem display="flex" justifyContent="center" position="relative">
          <Image src="images/NFT1.png" w="440px" h="320px" />
          <Box
            w="500px"
            h="105px"
            backdropFilter="blur(14.8462px);"
            bg="transparent"
            position="absolute"
            zIndex="1"
            border="2px solid white"
            borderRadius="7.8px"
            top="260px"
          >
            <Box
              className="conteiner"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              w="500px"
              h="105px"
            >
              <Box
                display="flex"
                gap="2px"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize="25" textColor="white" fontWeight="600">
                  Miles Grogosters
                </Text>
                <Text opacity="0.5" textColor="white" fontSize="12px">
                  @rominolegs
                </Text>
                <Text textColor="yellow">4.99 ETH</Text>
              </Box>
              <Box>
                <Button
                  borderRadius="30px"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                    textColor: "white",
                  }}
                >
                  Collect Now
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="center" position="relative">
          <Image src="images/NFT2.png" w="440px" h="320px" />
          <Box
            w="500px"
            h="105px"
            backdropFilter="blur(14.8462px);"
            bg="transparent"
            position="absolute"
            zIndex="1"
            border="2px solid white"
            borderRadius="7.8px"
            top="260px"
          >
            {" "}
            <Box
              className="conteiner"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              w="500px"
              h="105px"
            >
              <Box
                display="flex"
                gap="2px"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize="25" textColor="white" fontWeight="600">
                  Reox Fancxy
                </Text>
                <Text opacity="0.5" textColor="white" fontSize="12px">
                  @hibnastiar
                </Text>
                <Text textColor="yellow">3.27 ETH</Text>
              </Box>
              <Box>
                <Button
                  borderRadius="30px"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                    textColor: "white",
                  }}
                >
                  Collect Now
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="center" position="relative">
          <Image src="images/NFT3.png" w="440px" h="320px" />
          <Box
            w="500px"
            h="105px"
            backdropFilter="blur(14.8462px);"
            bg="transparent"
            position="absolute"
            zIndex="1"
            border="2px solid white"
            borderRadius="7.8px"
            top="260px"
          >
            {" "}
            <Box
              className="conteiner"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              w="500px"
              h="105px"
            >
              <Box
                display="flex"
                gap="2px"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize="25" textColor="white" fontWeight="600">
                  Miles Grogosters
                </Text>
                <Text opacity="0.5" textColor="white" fontSize="12px">
                  @senjadisini
                </Text>
                <Text textColor="yellow">4.20 ETH</Text>
              </Box>
              <Box>
                <Button
                  borderRadius="30px"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                    textColor: "white",
                  }}
                >
                  Collect Now
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem display="flex" justifyContent="center" position="relative">
          <Image src="images/NFT4.png" w="440px" h="320px" />
          <Box
            w="500px"
            h="105px"
            backdropFilter="blur(14.8462px);"
            bg="transparent"
            position="absolute"
            zIndex="1"
            border="2px solid white"
            borderRadius="7.8px"
            top="260px"
          >
            {" "}
            <Box
              className="conteiner"
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              w="500px"
              h="105px"
            >
              <Box
                display="flex"
                gap="2px"
                flexDirection="column"
                justifyContent="center"
              >
                <Text fontSize="25" textColor="white" fontWeight="600">
                  Tuinz Rey
                </Text>
                <Text opacity="0.5" textColor="white" fontSize="12px">
                  @albertov
                </Text>
                <Text textColor="yellow">2.99 ETH</Text>
              </Box>
              <Box>
                <Button
                  borderRadius="30px"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                    textColor: "white",
                  }}
                >
                  Collect Now
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  );
}
