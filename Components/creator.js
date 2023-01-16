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
  Mark,
  border,
} from "@chakra-ui/react";

export default function () {
  const topListArr = [
    {
      id: 1,
      name: "Hibnistar",
      follower: "27.3",
      profil: "images/profil1.png",
      img: "images/NFT13.png",
    },
    {
      id: 2,
      name: "Hibnistar",
      follower: "27.3",
      profil: "images/profil2.png",
      img: "images/NFT14.png",
    },
    {
      id: 3,
      name: "Hibnistar",
      follower: "27.3",
      profil: "images/profil3.png",
      img: "images/NFT15.png",
    },
    {
      id: 4,
      name: "Hibnistar",
      follower: "27.3",
      profil: "images/profil4.png",
      img: "images/NFT16.png",
    },
  ];
  return (
    <Flex
      marginTop="140px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text fontSize="60px" fontWeight="600" textColor="white">
        Top List Creator
      </Text>
      <Box marginTop="30px">
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
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap="20px" marginTop="60px">
        {topListArr.map((list) => (
          <GridItem
            key={list.id}
            w="305px"
            h="365px"
            backdropFilter="blur(10px)"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="30px"
            position="relative"
          >
            <Box position="absolute" display="flex" flexDirection="column">
              <Box>
                <Image src={list.img} w="305px" h="160px" />
                <Box
                  borderTopRadius="50px"
                  w="72px"
                  h="36px"
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="center"
                  backdropFilter="blur(10px)"
                  bg="rgba(255, 255, 255, 0.1)"
                  top="124px"
                  left="120px"
                  position="absolute"
                >
                  <Image
                    src={list.profil}
                    w="56px"
                    h="56px"
                    position="absolute"
                    top="8px"
                  />
                </Box>
              </Box>
              <Flex
                display="flex"
                flexDirection="column"
                position="absolute"
                top="200px"
                width="305px"
                alignItems="center"
                gap="10px"
              >
                <Text textColor="white" fontSize="20px" fontWeight="500">
                  {list.name}
                </Text>
                <Text textColor="yellow.300" fontSize="14px" fontWeight="300">
                  <Mark
                    bgGradient="linear(to-l, #F7FC0E, #FF8D8D)"
                    textColor="transparent"
                    bgClip="text"
                    fontSize="24px"
                    fontWeight="700"
                  >
                    {list.follower}K
                  </Mark>{" "}
                  Artwork
                </Text>
                <Button
                  marginTop="20px"
                  w="275px"
                  borderRadius="12px"
                  bg="transparent"
                  fontSize="20px"
                  textColor="white"
                  _hover={{
                    background:
                      "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                    border: "none",
                    textColor: "white",
                  }}
                  border="white 2px solid "
                >
                  Followed
                </Button>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
