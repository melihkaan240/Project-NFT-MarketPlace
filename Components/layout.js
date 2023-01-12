import Navbar from './navbar'
import Footer from './footer'
import GetStarted from './getstarted'
import Trending from './trending'
import Marketplace from './marketplace'
import Creator from './creator'
import Community from './community'
import { Box, Image } from '@chakra-ui/react'
import Head from 'next/head'
export default function Layout ({ children }) {
  return (
    <Box
   
      bg='radial-gradient(circle, rgba(121,95,172,1) 0%, rgba(97,50,187,1) 47%, rgba(15,20,80,1) 100%), black'
      bgRepeat="repeat-y"
      paddingTop='20px'
      paddingLeft='80px'
      paddingRight='80px'
      paddingBottom='100px'
    >
      <Navbar />
      <GetStarted />
      <Trending />
      <Marketplace />
      <Creator />

      <Community />
      <main>{children}</main>

      <Footer />
    </Box>
  )
}
