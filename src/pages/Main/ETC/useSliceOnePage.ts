import React, { useEffect, useState } from "react";
import { useOverflow } from "./useOverflow";
import { giveWord } from "./GiveWord";

export const useSliceOnePage = (
    BoxRef: React.MutableRefObject<HTMLDivElement | null>,
    TextRef: React.MutableRefObject<HTMLDivElement | null>,
    cutText: string
) => {
    const Overflow = useOverflow(BoxRef, TextRef);
    const [text, setText] = useState("");
    const [stash, setStash] = useState(cutText);

    const update = () => {
        if (Overflow) return;
        const { next, left } = giveWord(stash);
        setText((prev) => (prev + " " + next).trim());
        setStash(left);
    };

    useEffect(() => {
        update();
    }, [Overflow, text]);

    return {
        text,
        stash,
    };
};
