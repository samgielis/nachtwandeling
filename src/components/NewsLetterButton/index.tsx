import * as React from "react"
import { HeaderIconButton } from "../HeaderIconButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from "@chakra-ui/hooks"
import { NewsLetterModal } from "../NewsLetterModal"
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody } from "@chakra-ui/popover"
import { useState } from "react"
import { Box } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useLocalStorage } from "../../hooks/useLocalStorage"

export const NewsLetterButton: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [hasSeenNewsLetterPopover, setHasSeenNewsLetterPopover] = useLocalStorage('hasSeenNewsLetterPopover', false)
    const [isCTAOpen, setIsOpen] = useState(false);

    const popoverBg = useColorModeValue("gray.800", "gray.100");
    const popoverColor = useColorModeValue("white", "gray.900");

    React.useEffect(() => {
        if (hasSeenNewsLetterPopover) {
            return;
        }

        setTimeout(() => {
            setIsOpen(true);
            setHasSeenNewsLetterPopover(true);
        }, 3000)
    }, [setIsOpen, hasSeenNewsLetterPopover, setHasSeenNewsLetterPopover]);

    return (
        <>
            <Popover isOpen={isCTAOpen} onClose={() => { setIsOpen(false) }} placement="bottom">
                <PopoverTrigger>
                    <Box>
                        <HeaderIconButton
                            onClick={onOpen}
                            icon={<FontAwesomeIcon icon={faBullhorn} />}
                            aria-label={`Inschrijven op nieuwsbrief`}
                        />
                    </Box>
                </PopoverTrigger>
                <PopoverContent mx={2} bg={popoverBg} color={popoverColor} boxShadow="lg" onClick={onOpen}>
                    <PopoverArrow bg={popoverBg} color={popoverColor} />
                    <PopoverBody>Schrijf je in op onze nieuwsbrief!</PopoverBody>
                </PopoverContent>
            </Popover>
            <NewsLetterModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}
