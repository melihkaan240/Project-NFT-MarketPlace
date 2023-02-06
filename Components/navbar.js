import { Box, Flex, Text, Button, Spacer, Link } from "@chakra-ui/react";
import Head from "next/head";
import { parseAddress } from "../Hooks/parseAddress";
import { useSetAccount } from "../Hooks/useSetAccount";
import { useStorken } from "../data/storken";
import Router, { useRouter } from "next/router";
export const Navbar = () => {
  const ConnectMetaMask = useSetAccount();
  const [account, setAccount] = useStorken("account");
  const router = useRouter();
  return (
    <Flex borderBottom="solid grey 1px " paddingBottom="5">
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/gt-walsheim-pro"
          rel="stylesheet"
        ></link>
      </Head>
      <Flex display="flex" alignItems="center" fontFamily="GT Walsheim Pro ">
        <Link href="/test" fontSize="20px" textColor="white" fontWeight="200">
          Marketplace
        </Link>
        <Link
          href="/transfer"
          marginX="5"
          fontSize="20px"
          textColor="white"
          fontWeight="200"
        >
          Creators
        </Link>
        <Link
          passHref
          href="https://truefeedback.io/"
          fontSize="20px"
          textColor="white"
          fontWeight="200"
        >
          Community
        </Link>
        <Box w={"5vw"}></Box>
      </Flex>
      <Spacer />
      <Link
        href="/"
        fontSize="28px"
        marginRight="10"
        fontWeight="800"
        fontFamily="GT Walsheim Pro "
        // bgGradient="linear(to-l, #F7FC0E, #FF8D8D)"
        bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
        textColor="transparent"
        bgClip="text"
      >
        TruefeedbackSea
      </Link>
      <Spacer />
      <Link href="/myProfile" textDecoration={"none"}>
        <Button
          bg="linear-gradient(90deg, rgba(255,165,64,1) 40%, rgba(255,225,104,1) 100%)"
          textColor="black"
          borderRadius="30"
          marginX={"3vw"}
          textDecoration={"none"}
          _hover={{
            textColor: "black",
            background: "white",
            border: "none",
            textDecoration: "none",
          }}
        >
          My Profile
        </Button>
      </Link>
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
};
export default Navbar;
