import { ChakraProvider, extendTheme } from '@chakra-ui/react'


import '../styles/normalize.css'

export default function MyApp ({ Component, pageProps }) {


// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>


  )
}
