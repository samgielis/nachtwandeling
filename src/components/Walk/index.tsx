import { Heading, Stack } from "@chakra-ui/layout";
import { Badge, HStack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface WalkProps {
    komootId: string;
    location: string;
    date?: Date;
    isDraft?: boolean;
}

export const Walk = ({ komootId, location, date, isDraft }: WalkProps) => {
    const [isLoaded, setLoaded] = useState(false);
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return <Stack spacing={4} fontFamily="sans-serif" ref={ref}>
        <Stack spacing={1}>
            <DateHeader date={date} isDraft={isDraft} />
            <Heading as="h2" textTransform="uppercase" color="rgb(79, 133, 13)">
                {location}
            </Heading>
        </Stack>
        {komootId && <Skeleton isLoaded={isLoaded}>
            {(inView || isLoaded) && <iframe onLoad={() => { setLoaded(true) }} src={`https://www.komoot.com/tour/${komootId}/embed`} width="100%" height="500px" frameBorder="0" scrolling="no"></iframe>}
        </Skeleton>
        }
    </Stack>
}

interface DateHeaderProps {
    date?: Date;
    isDraft?: boolean;
}

const DateHeader = ({ date, isDraft }: DateHeaderProps) => {
    const isUpcoming = date && date > new Date();

    return <HStack spacing={2}>
        <Heading as="h4" fontSize="md" textTransform="uppercase">
            {date?.toLocaleDateString() || "TBD"}
        </Heading>
        {isUpcoming && <Badge colorScheme="blue">Upcoming</Badge>}
        {isDraft && <Badge colorScheme="red">Draft</Badge>}
    </HStack>
}
