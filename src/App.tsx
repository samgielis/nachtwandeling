import * as React from "react"
import {
  ChakraProvider,
  theme,
  Container,
  Stack,
  Center,
} from "@chakra-ui/react"
import { Header } from "./layout/Header"
import { Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home"
import { Practical } from "./screens/Practical"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Stack fontSize="xl" spacing={8}>
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
    </Stack>
  </ChakraProvider >
)
