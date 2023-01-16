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
  SimpleGrid,
} from "@chakra-ui/react";

export default function () {
  const collectionArr = [
    {
      id: 1,
      owner: "melih",
      collectionName: "Miles Grogosters",
      img: "images/NFT1.png",
      price: "3.20",
    },
    {
      id: 2,
      owner: "kaan",
      collectionName: "Miles Grogosters",
      img: "images/NFT2.png",
      price: "4.99",
    },
    {
      id: 3,
      owner: "araç",
      collectionName: "Miles Grogosters",
      img: "images/NFT3.png",
      price: "2.30",
    },
    {
      id: 4,
      owner: "kürşad",
      collectionName: "Miles Grogosters",
      img: "images/NFT4.png",
      price: "1.10",
    },
  ];
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
      <SimpleGrid
        paddingTop="90px"
        templateColumns="repeat(2, 1fr)"
        gridRowGap="150px"
      >
        {collectionArr.map((collection) => (
          <GridItem
            key={collection.id}
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Image src={collection.img} w="440px" h="320px" />
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
                    {collection.collectionName}
                  </Text>
                  <Text opacity="0.5" textColor="white" fontSize="12px">
                    @{collection.owner}
                  </Text>
                  <Text textColor="yellow">{collection.price} ETH</Text>
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
        ))}
      </SimpleGrid>
    </Flex>
  );
}
