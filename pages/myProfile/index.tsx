import {
  Box,
  Button,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Mark,
} from "@chakra-ui/react";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import Navbar from "../../Components/navbar";
import { useStorken } from "../../data/storken";
export const myProfile = () => {
  const marketArr = [
    {
      id: 1,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT5.png",
    },
    {
      id: 2,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT7.png",
    },
    {
      id: 3,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT8.png",
    },
    {
      id: 4,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT9.png",
    },
    {
      id: 5,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT10.png",
    },
    {
      id: 6,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT11.png",
    },
    {
      id: 7,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT12.png",
    },
    {
      id: 8,
      owner: "hibnistar",

      tokenName: "Reox Fancxy",
      img: "images/NFT9.png",
    },
  ];
  const [balance, setBalance] = useStorken<any>("balance");
  return (
    <>
      <Box
        bg="radial-gradient(circle, rgba(121,95,172,1) 0%, rgba(97,50,187,1) 47%, rgba(15,20,80,1) 100%), black"
        bgRepeat="repeat-y"
        paddingTop="20px"
        // paddingLeft="180px"
        // paddingRight="80px"
        // paddingBottom="100px"
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Navbar />
        <Text fontSize="60px" fontWeight="600" textColor="white">
          Your
          <Mark
            bgGradient="linear(to-l, #F7FC0E, #FF8D8D)"
            textColor="transparent"
            bgClip="text"
          >
            NFTs
          </Mark>
        </Text>

        <SimpleGrid
          templateColumns="repeat(3, 0.3fr)"
          gridColumnGap="25px"
          gridRowGap="50px"
          margin="50px"
        >
          {marketArr.map((token) => (
            <GridItem
              key={token.id}
              w="300px"
              h="425px"
              backdropFilter="blur(10px)"
              bg="rgba(255, 255, 255, 0.1)"
              position="relative"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
            >
              <Flex
                display="flex"
                flexDirection="column"
                paddingTop="15px"
                paddingLeft="10px"
                paddingRight="10px"
                justifyContent="space-between"
                className={utilStyles.conteiner}
              >
                <Box className={utilStyles.img}>
                  <Image src={token.img} w="100%" h="100%" objectFit="cover" />
                </Box>
                <Flex
                  justifyContent="space-around"
                  alignItems="center"
                  paddingBottom="20px"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    className={utilStyles.cont}
                  >
                    <Box
                      display="flex"
                      w="275px"
                      flexDirection="row"
                      justifyContent="space-around"
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Text fontSize="24" textColor="white" fontWeight="600">
                          {token.tokenName}
                        </Text>
                        <Text opacity="0.5" textColor="white" fontSize="16px">
                          @{token.owner}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          textColor="yellow"
                          fontSize="24px"
                          fontWeight="700"
                        ></Text>
                      </Box>
                    </Box>

                    <Box alignItems="flex-start">
                      <InputGroup display="none" className={utilStyles.btn}>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input placeholder="Enter price" />
                      </InputGroup>
                      <Button
                        borderRadius="12px"
                        border="solid white 1px"
                        textColor="black"
                        w="275px"
                        h="55px"
                        display="none"
                        fontSize="18px"
                        marginTop={3}
                        className={utilStyles.btn}
                        _hover={{
                          background:
                            "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                          textColor: "white",
                          border: "none",
                          fontSize: "20px",
                        }}
                      >
                        Sell NFT
                      </Button>
                      {/* <Input
                        display="none"
                        className={utilStyles.btn}
                        variant="filled"
                        placeholder="Filled"
                      /> */}
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};
export default myProfile;
