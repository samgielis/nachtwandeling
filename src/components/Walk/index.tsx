import { Skeleton } from "@chakra-ui/skeleton";
import { useState } from "react";

interface WalkProps {
    komootId?: string;
}

export const Walk = ({ komootId }: WalkProps) => {
    const [isLoaded, setLoaded] = useState(false);
    return <div>
        {komootId && <Skeleton isLoaded={isLoaded}>
            <iframe onLoad={() => {setLoaded(true)}} src={`https://www.komoot.com/tour/${komootId}/embed`} width="100%" height="580px" frameBorder="0" scrolling="no"></iframe>
        </Skeleton>
        }
    </div>
}
