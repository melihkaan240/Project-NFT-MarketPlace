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
} from "@chakra-ui/react";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function () {
  const buttonArray = [
    {
      id: 1,
      name: "Collectibles",
      link: "/",
    },
    {
      id: 2,
      name: "Art",
      link: "/",
    },
    {
      id: 3,
      name: "Gaming",
      link: "/",
    },
    {
      id: 4,
      name: "Sports",
      link: "/",
    },
    {
      id: 5,
      name: "Photography",
      link: "/",
    },
    {
      id: 6,
      name: "Music",
      link: "/",
    },
    {
      id: 7,
      name: "Virtual Worlds",
      link: "/",
    },
    {
      id: 8,
      name: "Trading Cards",
      link: "/",
    },
  ];
  return (
    <Flex
      marginTop="200px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text fontSize="60px" fontWeight="600" textColor="white">
        Explore Marketplace
      </Text>
      <Flex display="flex" gap="25" marginTop="50">
        {buttonArray.map((buttons) => (
          <Link href={buttons.link} key={buttons.id}>
            <Button
              marginRight="5"
              borderRadius="30"
              border="solid white 1px"
              textColor="black"
              _hover={{
                background:
                  "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                border: "none",
                textColor: "white",
              }}
            >
              {buttons.name}
            </Button>
          </Link>
        ))}
      </Flex>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gridColumnGap="25px"
        gridRowGap="50px"
        margin="50px"
      >
        <GridItem
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
              <Image
                src="images/NFT5.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    fontSize="18px"
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT11.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT7.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT8.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT9.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT10.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT11.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          w="300px"
          h="425px"
          backdropFilter="blur(10px);"
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
              <Image
                src="images/NFT12.png"
                w="100%"
                h="100%"
                objectFit="cover"
              />
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
                      Reox Fancxy
                    </Text>
                    <Text opacity="0.5" textColor="white" fontSize="12px">
                      @hibnastiar
                    </Text>
                  </Box>
                  <Box>
                    <Text textColor="yellow" fontSize="24px" fontWeight="700">
                      0.8 ETH
                    </Text>
                  </Box>
                </Box>

                <Box alignItems="flex-start">
                  <Button
                    borderRadius="12px"
                    border="solid white 1px"
                    textColor="black"
                    w="275px"
                    h="55px"
                    display="none"
                    className={utilStyles.btn}
                    _hover={{
                      background:
                        "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
                      textColor: "white",
                      border: "none",
                      fontSize: "20px",
                    }}
                  >
                    Sports
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
      <Button
        marginRight="5"
        borderRadius="30"
        border="solid white 1px"
        textColor="black"
        _hover={{
          background:
            "linear-gradient(90deg, rgba(255,165,64,1) 12%, rgba(255,225,104,1) 100%)",
          border: "none",
          textColor: "white",
        }}
      >
        View More
      </Button>
    </Flex>
  );
}
