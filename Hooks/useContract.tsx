import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useStorken } from "../data/storken";
import abi from "../abi.json";
const useContract = () => {
  const [contract, setContract] = useStorken<any>("contract");
  const contractAddress = "0xf56a056fd4A3841A944c9db8677BdD52bf3c8e68";
  const contractAbi = abi.abi;
  useEffect(() => {
    const provider: any = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    const _contract = new ethers.Contract(contractAddress, contractAbi, signer);
    setContract.set(_contract);
  }, []);

  return contract;
};

export default useContract;
