import * as React from "react"
import { HeaderIconButton } from "../HeaderIconButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { useDisclosure } from "@chakra-ui/hooks"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormHelperText, FormLabel, Input, Stack, FormErrorMessage, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

const SUBSCRIBE_NEWSLETTER_ENDPOINT = '/.netlify/functions/subscribeToNewsletter';

export const NewsLetterButton: React.FC = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values: { email: string, name: string }) {
        console.log(values)

        const handleError = () => {
            toast({
                title: "Er ging iets mis.",
                description: "Probeer het later nog eens of contacteer ons op info@n8wndlng.be.",
                status: "error",
                isClosable: true,
            });
        }
        return new Promise((resolve, reject) => {
            fetch(SUBSCRIBE_NEWSLETTER_ENDPOINT, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }).then((response) => {
                if (response.status !== 200) {
                    handleError();
                    reject();
                } else {
                    toast({
                        title: "Ingeschreven.",
                        description: "Je bent succesvol ingeschreven op de nieuwsbrief.",
                        status: "success",
                        isClosable: true,
                    });
                    resolve(undefined);
                }
            }).catch((e) => {
                console.log(e);
                handleError();
                reject();
            })
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
