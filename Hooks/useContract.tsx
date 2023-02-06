import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useStorken } from "../data/storken";
import abi from "../abi.json";
const useContract = () => {
  const [contract, setContract] = useStorken<any>("contract");
  const contractAddress = "0xf56a056fd4A3841A944c9db8677BdD52bf3c8e68";
  const address = "0x7B5beCf5f3680ed58e81f753211cE843fa078012";
  const contractAbi = abi.abi;
  // const contractAbi = [
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_melihToken",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "constructor",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_address",
  //         type: "address",
  //       },
  //     ],
  //     name: "balance",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "melihToken",
  //     outputs: [
  //       {
  //         internalType: "contract MelihToken",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "_address",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "_amount",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "mint",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  // ];

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
