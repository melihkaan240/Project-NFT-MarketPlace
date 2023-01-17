import { Box, Flex, Text, Button, Spacer, Link } from "@chakra-ui/react";
import Head from "next/head";
import { parseAddress } from "../Hooks/parseAddress";
import { useSetAccount } from "../Hooks/useSetAccount";
import { useStorken } from "../data/storken";
export default function Navbar() {
  const ConnectMetaMask = useSetAccount();
  const [account, setAccount] = useStorken("account");
  return (
    <Flex borderBottom="solid grey 1px " paddingBottom="5">
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/gt-walsheim-pro"
          rel="stylesheet"
        ></link>
      </Head>
      <Flex display="flex" alignItems="center" fontFamily="GT Walsheim Pro ">
        <Text fontSize="16px" textColor="white" fontWeight="200">
          Marketplace
        </Text>
        <Link
          href="/transfer"
          marginX="5"
          fontSize="16px"
          textColor="white"
          fontWeight="200"
        >
          Creators
        </Link>
        <Text fontSize="16px" textColor="white" fontWeight="200">
          Community
        </Text>
        <Box w={10}></Box>
      </Flex>
      <Spacer />
      <Text
        fontSize="28px"
        marginRight="10"
        fontWeight="700"
        textColor="white"
        fontFamily="GT Walsheim Pro "
      >
        SILVERSEA
      </Text>
      <Spacer />

      <Button
        bg="white"
        textColor="black"
        borderRadius="30"
        _hover={{
          textColor: "white",
          background:
            "linear-gradient(90deg, rgba(255,165,64,1) 40%, rgba(255,225,104,1) 100%)",
          border: "none",
        }}
        onClick={() => ConnectMetaMask()}
      >
        {account ? parseAddress(account) : "Connect Wallet"}
      </Button>
    </Flex>
  );
}
