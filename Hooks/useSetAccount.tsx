import { useState } from "react";
import { ethers } from "ethers";
import { useStorken } from "../data/storken";
import { Resolver } from "dns/promises";
declare var window: any;

export const useSetAccount = () => {
  const [account, setAccount] = useStorken<any>("account");
  const [balance, setBalance] = useStorken<any>("balance");
  const [testStorken, settestStorken] = useStorken<any>("testStorken");

  const ConnectMetaMask = async () => {
    // any değeri ile tüm networkler için çalışabileceğini belirtiyoruz
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Bağlanan kullanıcının cüzdanına erişim izni istiyoruz.
    await provider.send("eth_requestAccounts", []);
    // Imzalayan kullanıcı bilgisini alıyoruz
    const signer = provider.getSigner();
    // Bağlanan Adresi alıyor state ile set ediyoruz.
    const address = await signer.getAddress();
    setAccount.set(address);

    // Balance value alıyoruz ve storkene set ediyoruz
    const balance = await signer.getBalance();

    // int value ya bir ayar çekiyoruz sıfırlarına falan
    setBalance.set(ethers.utils.formatEther(balance));

    // NFT için denemeler yapıyorum
    // const tokenIds = await provider.getTokenIds(address);
  };

  return ConnectMetaMask;
};
