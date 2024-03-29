import {
  Box,
  Center,
  Divider,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/layout";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { Walk } from "../components/Walk";

export const Home = () => {
  const filter = useColorModeValue("none", "invert()");
  return (
    <VStack w="100%" spacing={{ base: 6, md: 12 }}>
      <Box w="xs" px={{ base: 10, md: 2 }}>
        <Image
          style={{ filter }}
          src="https://cdn.pixabay.com/photo/2021/04/05/14/52/hiking-6153739_1280.png"
        />
      </Box>
      <Heading as="h1" size="2xl" textTransform="uppercase">
        Wandelingen
      </Heading>
      <Stack w="100%" divider={<MoonDivider />}>
        {/*<Walk location="Averbode bos & heide" komootId="570508073" date={new Date("12/18/2021")} isDraft />*/}
        <Walk
          location="Slachtwandeling"
          komootId="1360258523"
          date={new Date("10/28/2023")}
        />
        <Walk
          location="Expeditie Glühwein"
          komootId="986841721"
          date={new Date("12/17/2022")}
        />
        <Walk
          location="Schaffen Hees (afterparty met vuurschaal)"
          komootId="924497918"
          date={new Date("08/10/2022")}
        />
        <Walk
          location="Fort leopold & Dassenaarde"
          komootId="658668826"
          date={new Date("02/26/2022")}
        />
        <Walk
          location="Kaggevinne"
          komootId="570502619"
          date={new Date("11/19/2021")}
        />
        <Walk
          location="Gerhagen"
          komootId="503252998"
          date={new Date("09/25/2021")}
        />
      </Stack>
    </VStack>
  );
};

const MoonDivider = () => {
  return (
    <Center my={20}>
      <Divider />
      <Box px={3}>
        <FaMoon color="gray.500" />
      </Box>
      <Divider />
    </Center>
  );
};
