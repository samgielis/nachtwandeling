import * as React from "react"
import {
  ChakraProvider,
  theme,
  Container,
  Stack,
  Center,
  Spacer,
} from "@chakra-ui/react"
import { Header } from "./layout/Header"
import { Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home"
import { Practical } from "./screens/Practical"
import { Footer } from "./layout/Footer"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Stack fontSize="xl" spacing={{base: 8, md: 10}} minH="100vh">
      <Header />
      <Center>
        <Container >
          <Center p={.5}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="praktisch" element={<Practical />} />
            </Routes>
          </Center>
        </Container>
      </Center>
      <Spacer/>
      <Footer/>
    </Stack>
  </ChakraProvider >
)
