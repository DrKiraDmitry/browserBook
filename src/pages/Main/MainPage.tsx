import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./ETC/HardCode";
import { useSliceOnePage } from "./ETC/useSliceOnePage";

export const MainPage = () => {
    const BoxRef = useRef<HTMLDivElement | null>(null);
    const TextRef = useRef<HTMLDivElement | null>(null);
    const { nextText, prevText, stash, overflow } = useSliceOnePage(BoxRef, TextRef, BibleExodus);

    return (
        <div className={styles.MainPage}>
            <div className={styles.ContentBox} ref={BoxRef}>
                <div
                    className={styles.TextBox}
                    dangerouslySetInnerHTML={{ __html: overflow ? prevText : nextText }}
                    ref={TextRef}
                />
            </div>
        </div>
    );
};
