import React, { useEffect, useState } from "react";
import { OverflowAlert } from "./OverflowAlert";

// This hook check overflow our components
// I think about use them how unbox Ref type, and exclude clientHeight
// For simple using
// Take me ref, i to know how work with him
// But it's mistake, for us need one parameter it's height
// Not need lock params for one value
export const useOverflow = (BoxHeight?: number, TextHeight?: number) => {
    const [Overflow, setOverflow] = useState(false);

    useEffect(() => {
        if (typeof BoxHeight === "number" && typeof TextHeight === "number") {
            if (BoxHeight >= TextHeight) return setOverflow(false);
            OverflowAlert(BoxHeight, TextHeight);
            return setOverflow(true);
        }
    }, [TextHeight]);

    return Overflow;
};
