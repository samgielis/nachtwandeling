import * as React from "react"
import { HeaderIconButton } from "../HeaderIconButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from "@chakra-ui/hooks"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormHelperText, FormLabel, Input, Stack, FormErrorMessage } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

export const NewsLetterButton: React.FC = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values: { email: string, name: string }) {
        console.log(values)
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve(undefined);
            }, 3000);
        });
    }

    return (
        <>
            <HeaderIconButton
                onClick={onOpen}
                icon={<FontAwesomeIcon icon={faBullhorn} />}
                aria-label={`Inschrijven op nieuwsbrief`}
            />
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader>Schrijf je in op de nieuwsbrief</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <Stack>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email"
                                        placeholder="voorbeeld@gmail.com"
                                        {...register("email", {
                                            required: "Email is verplicht",
                                        })} />
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                    <FormHelperText>We gebruiken je email enkel om updates te geven over onze wandelingen.</FormHelperText>

                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Naam</FormLabel>
                                    <Input type="text"
                                        placeholder="name"
                                        {...register("name")}
                                    />
                                    <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                    <FormHelperText>Hiermee personaliseren we onze emails.</FormHelperText>
                                </FormControl>
                            </Stack>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="green" mr={3} isLoading={isSubmitting} type="submit">
                                Inschrijven
                            </Button>
                            <Button onClick={onClose}>Annuleren</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}
