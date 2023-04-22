import React, { useEffect, useState } from "react";
import { useOverflow } from "./useOverflow";
import { giveWord } from "./GiveWord";

// Нужен регресс

export const useSliceOnePage = (
    BoxRef: React.MutableRefObject<HTMLDivElement | null>,
    TextRef: React.MutableRefObject<HTMLDivElement | null>,
    cutText: string
) => {
    const overflow = useOverflow(BoxRef, TextRef);
    const [nextText, setNextText] = useState("");
    const [prevText, setPrevText] = useState("");
    const [stash, setStash] = useState(cutText);

    const update = () => {
        if (overflow) return;
        const { next, left } = giveWord(stash);
        setPrevText(nextText);
        setNextText((prev) => (prev + " " + next).trim());
        setStash(left);
    };

    useEffect(() => {
        update();
    }, [overflow, nextText]);

    return {
        nextText,
        stash,
        prevText,
        overflow,
    };
};
