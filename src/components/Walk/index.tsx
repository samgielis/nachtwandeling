import { Center, Heading, Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";
import { useState } from "react";

interface WalkProps {
    komootId?: string;
    location: string;
}

export const Walk = ({ komootId, location }: WalkProps) => {
    const [isLoaded, setLoaded] = useState(false);
    return <Stack spacing={3} fontFamily="sans-serif">
            <Heading as="h2" textTransform="uppercase" color="rgb(79, 133, 13)">
                {location}
            </Heading>
        {komootId && <Skeleton isLoaded={isLoaded}>
            <iframe onLoad={() => { setLoaded(true) }} src={`https://www.komoot.com/tour/${komootId}/embed`} width="100%" height="500px" frameBorder="0" scrolling="no"></iframe>
        </Skeleton>
        }
    </Stack>
}
