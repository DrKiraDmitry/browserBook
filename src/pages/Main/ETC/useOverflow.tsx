import React, { useEffect, useState } from "react";
import { OverflowAlert } from "./OverflowAlert";

export const useOverflow = (
    BoxRef: React.MutableRefObject<HTMLDivElement | null>,
    TextRef: React.MutableRefObject<HTMLDivElement | null>
) => {
    const [Overflow, setOverflow] = useState(false);

    useEffect(() => {
        if (!BoxRef.current || !TextRef.current) return;
        const box = BoxRef.current;
        const text = TextRef.current;
        if (box?.clientHeight >= text?.clientHeight) return setOverflow(false);
        OverflowAlert(box, text);
        setOverflow(true);
    }, [TextRef.current?.clientHeight]);

    return Overflow;
};
