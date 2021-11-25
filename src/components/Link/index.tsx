import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/layout"
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom"

type LinkProps = ChakraLinkProps & Pick<RRLinkProps, "to">

export const Link = (props: LinkProps) => {
    return <ChakraLink as={RRLink} {...props} />
}
