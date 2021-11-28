import * as React from "react"
import { HeaderIconButton } from "../HeaderIconButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from "@chakra-ui/hooks"
import { NewsLetterModal } from "../NewsLetterModal"

export const NewsLetterButton: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <HeaderIconButton
                onClick={onOpen}
                icon={<FontAwesomeIcon icon={faBullhorn} />}
                aria-label={`Inschrijven op nieuwsbrief`}
            />
            <NewsLetterModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}
