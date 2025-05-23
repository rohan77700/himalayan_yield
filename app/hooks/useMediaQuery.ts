'use client';

import { useEffect, useState } from "react";

interface useMediaQueryProps {
    query: string;
}

const useMediaQuery = ({query}: useMediaQueryProps): boolean => {
    const [matches, setMatches] = useState<boolean>(false);
    
    useEffect(() => {
        const media = window.matchMedia(query);

        if(media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addListener(listener)

        return () => media.removeListener(listener)
    }, [matches, query]);

    return matches;
}
 
export default useMediaQuery;