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
import React, { useEffect, useState } from "react";
import utilStyles from "../../styles/utils.module.css";
import Navbar from "../../Components/navbar";
import { useStorken } from "../../data/storken";
import abi from "../../abi.json";
import { ethers } from "ethers";
export const test = () => {
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
  const address = "0x46ee7408d50Ac8FF55B7E818D0A373308D21e9Ec";
  const address2 = "0xAcEE109C06427D19581C80cf22734ebE9Da48590";
  const nftContractAddress = "0x317a8Fe0f1C7102e7674aB231441E485c64c178A";
  const nftContractAddress1 = "0xf56a056fd4A3841A944c9db8677BdD52bf3c8e68";
  const contractAbi = abi.abi;
  const [nfts, setNfts] = useState<any>([]);
  const test = () => {
    console.log(nfts);
  };
  useEffect(() => {
    const fetchData = async () => {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const nftContract = new ethers.Contract(
        nftContractAddress1,
        contractAbi,
        provider
      );

      // nft contractımızdaki nft tokenlarının toplam balance'ını alıyoruz
      // yani kaç token'ımız var ona bakıyoruz
      const balance = await nftContract.balanceOf(address);

      // aldığımız bu değeri array.from a atayıp bir array uzunluğu belirliyoruz
      // bu uzunluğu alan map uzunluk kadar i yi döndürüyor ve her dönüşünün karşılığında tokenların id lerini alıyoruz
      // bu id leri _ parametresi sayesinde arrayimize atıyoruz ve id ler artık bizde
      const tokenIds = await Promise.all(
        Array.from({ length: balance }).map((_, i) =>
          nftContract.tokenOfOwnerByIndex(address, i)
        )
      );
      // veya aşağıdaki şekilde çalışabilir

      // const tokenIds = await Promise.all(
      //   Array.from({ length: balance }, (_, i) =>
      //     nftContract.tokenOfOwnerByIndex(address, i)
      //   )
      // );

      // aldığımız id leri obje şeklinde useState'e set ediyoruz
      setNfts(
        tokenIds.map((tokenId) => ({
          id: tokenId,
          image: `https:ipfs.io/ipfs/${tokenId}`,
        }))
      );
    };

    fetchData();
  }, []);
  //console.log(nfts);

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
          {nfts.map((nft) => (
            <GridItem
              key={nft.id}
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
                  <Image src={nft.img} w="100%" h="100%" objectFit="cover" />
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
                          token.name
                        </Text>
                        <Text opacity="0.5" textColor="white" fontSize="16px">
                          token.owner
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
                        display="flex"
                        fontSize="18px"
                        marginTop={3}
                        // className={utilStyles.btn}
                        onClick={() => {
                          console.log(Number(nft.id));
                        }}
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
export default test;
