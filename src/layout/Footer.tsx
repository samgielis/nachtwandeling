import { Center, Link } from "@chakra-ui/layout"

export const Footer = () => {
    const year = new Date().getFullYear();
    return <Center borderTop="1px solid" height="60px" fontSize="md">
        <Link href="https://www.linkedin.com/in/samgielis/" isExternal>© Sam Gielis - {year}</Link>
    </Center>
}
