import React, { useState, useEffect } from "react";
import { Contract } from "ethers";
import useContract from "../../Hooks/useContract";
interface NFT {
  id: number;
  image: string;
}

const MyComponent: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const contract = useContract();
  useEffect(() => {
    // Your contract instance

    async function fetchData() {
      const totalNft = await contract.totalSupply(3);
      console.log(totalNft);

      // Fetch all NFT's
      const nftArray = await Promise.all(
        Array.from({ length: totalNft }, (_, i) => i + 1).map(async (id) => {
          const image = await contract.image(id);
          return { id, image };
        })
      );
      setNfts(nftArray);
    }

    fetchData();
  }, []);

  return (
    <ul>
      {nfts.map((nft) => (
        <li key={nft.id}>
          <p>NFT Id: {nft.id}</p>
          <img src={nft.image} alt={`NFT Image ${nft.id}`} />
        </li>
      ))}
    </ul>
  );
};

export default MyComponent;
