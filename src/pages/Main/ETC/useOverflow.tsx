import React, { useEffect, useState } from "react";
import { OverflowAlert } from "./OverflowAlert";

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
