import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import abi from "../../abi.json";
import useContract from "../../Hooks/useContract";
export const marketplace = () => {
  const address = "0x46ee7408d50Ac8FF55B7E818D0A373308D21e9Ec";
  const address2 = "0xAcEE109C06427D19581C80cf22734ebE9Da48590";
  const nftContractAddress = "0x317a8Fe0f1C7102e7674aB231441E485c64c178A";
  const nftContractAddress1 = "0xf56a056fd4A3841A944c9db8677BdD52bf3c8e68";
  const contractAbi = abi.abi;
  const contract = useContract();
  const [nfts, setNfts] = useState<any>([
    {
      id: null,
      image: "",
    },
  ]);
  const test1 = async () => {
    console.log("sa");

    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );

    const nftContract = new ethers.Contract(
      nftContractAddress1,
      contractAbi,
      provider
    );
    console.log("asa");
  };
  var test = async () => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const nftContract = new ethers.Contract(
      nftContractAddress1,
      contractAbi,
      provider
    );
    await nftContract.balanceOf(address).then((b: any) => {
      console.log(b);
    });

    nftContract.balanceOf(address).then((balance: any) => {
      console.log("1");

      for (let i = 0; i < balance; i++) {
        nftContract.tokenOfOwnerByIndex(address, i).then((tokenId: any) => {
          console.log("NFT ID:", tokenId);
          nfts.push(tokenId);
        });
      }
    });
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
      const balance = await nftContract.balanceOf(address);

      for (let i = 0; i < balance; i++) {
        const tokenId = await nftContract.tokenOfOwnerByIndex(address, i);
        const nft = { id: tokenId, image: `https:ipfs.io/ipfs/${tokenId}` };

        setNfts((prevNfts) => [...prevNfts, { id: nft.id, image: nft.image }]);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/*
      <VStack>
        {nfts.map((nft: any) => (
          <Box w={25} h={25} bgColor={"blue"}>
            <Text color={"black"} key={nft.id}>
              {" "}
              id:{Number(nft.id)}
            </Text>
          </Box>
        ))}
      </VStack> */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>My NFTs</h1>
        <VStack>
          {nfts.map((nft) => (
            <ul>
              <li key={nft.id}>
                <img src={nft.image} alt={nft.id} />
                <p>ID:{Number(nft.id)}</p>
              </li>
            </ul>
          ))}
        </VStack>
      </div>
      <Button bgColor={"red"} onClick={test1}>
        Test Button
      </Button>
    </>
  );
};
export default marketplace;
