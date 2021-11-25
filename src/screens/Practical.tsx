import { Heading, ListItem, VStack, Text, UnorderedList } from "@chakra-ui/layout"

export const Practical = () => {
    return <VStack spacing={5}>
        <Heading as="h1" size="2xl" textTransform="uppercase">
            Praktisch
        </Heading>
        <Text>
            Een nachtwandeling is de ideale kans om oude of nieuwe vrienden te onmoeten. Er zijn meestal tussen de 6 en 15 personen aanwezig en het wordt aangemoedigd om met iedereen eens te spreken.
        </Text>
        <Text>
            Enkele praktische tips:
        </Text>
            <UnorderedList>
                <ListItem>🍻 Breng je eigen drank of snacks mee</ListItem>
                <ListItem>⏱️ Kom op tijd naar de startplaats</ListItem>
                <ListItem>🔦 Breng tocht-door-het-donker-gewijs een zaklamp mee</ListItem>
            </UnorderedList>
    </VStack>
}
