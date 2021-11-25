import { Box, Heading, VStack, Stack, Center, HStack, Spacer, Divider } from "@chakra-ui/layout"
import { Image, useColorModeValue } from "@chakra-ui/react"
import { FaMoon } from "react-icons/fa"
import { Walk } from "../components/Walk"

export const Home = () => {
    const filter = useColorModeValue("none", "invert()")
    return <VStack w="100%" spacing={10}>
        <Box boxSize="xs" p={4}>
            <Image style={{ filter }} src="https://cdn.pixabay.com/photo/2021/04/05/14/52/hiking-6153739_1280.png" />
        </Box>
        <Heading as="h1" size="2xl" textTransform="uppercase">
            wandelingen
        </Heading>
        <Stack w="100%" divider={<MoonDivider/>}>
            <Walk komootId="570508073" />
            <Walk komootId="570502619" />
        </Stack>
    </VStack>
}

const MoonDivider = () => {
    return    <Center my={20}>
        <Divider/>
        <Box px={3}>
        <FaMoon color="gray.500" />
            </Box>
        <Divider/>
    </Center>
}
