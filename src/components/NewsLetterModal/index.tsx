import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const SUBSCRIBE_NEWSLETTER_ENDPOINT =
  "/.netlify/functions/subscribeToNewsletter";

interface NewsLetterModalProps {
  isOpen: boolean;
  onClose(): void;
}

export const NewsLetterModal = ({ isOpen, onClose }: NewsLetterModalProps) => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values: { email: string; name: string }): Promise<void> {
    const handleError = () => {
      toast({
        title: "Er ging iets mis.",
        description:
          "Probeer het later nog eens of contacteer ons op info@n8wndlng.be.",
        status: "error",
        isClosable: true,
      });
    };
    return new Promise((resolve, reject) => {
      fetch(SUBSCRIBE_NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => {
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
            onClose();
            resolve(undefined);
          }
        })
        .catch((e) => {
          handleError();
          reject();
        });
    });
  }

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <ModalHeader>Schrijf je in op de nieuwsbrief</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack>
              <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="voorbeeld@gmail.com"
                  {...register("email", {
                    required: "E-mail is verplicht",
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
                <FormHelperText>
                  We gebruiken je e-mailadres enkel om updates te geven over
                  onze wandelingen.
                </FormHelperText>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Naam</FormLabel>
                <Input type="text" placeholder="name" {...register("name")} />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
                <FormHelperText>
                  Hiermee personaliseren we onze e-mails.
                </FormHelperText>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              isLoading={isSubmitting}
              type="submit"
            >
              Inschrijven
            </Button>
            <Button onClick={onClose}>Annuleren</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
