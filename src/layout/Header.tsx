import { Heading, HStack, Spacer } from "@chakra-ui/layout"
import { FaMoon } from "react-icons/fa"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Link } from "../components/Link"

export const Header = () => {
    return <HStack justifyContent="center" alignItems="center" p={3} borderBottom="1px solid">
        <FaMoon />
        <Heading as="h4" size="md" textTransform="uppercase">
            <Link to={"/"}>
            N8WNDLNG
            </Link>
        </Heading>
        <Spacer />
        <HStack>
        <HStack spacing={4}>
            <Link to="praktisch">Praktisch</Link>
        </HStack>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
    </HStack>
}
