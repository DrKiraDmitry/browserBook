import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./ETC/HardCode";
import { useSliceOnePage } from "./ETC/useSliceOnePage";

export const MainPage = () => {
    const BoxRef = useRef<HTMLDivElement | null>(null);
    const TextRef = useRef<HTMLDivElement | null>(null);
    const { text, stash } = useSliceOnePage(BoxRef, TextRef, BibleExodus);

    return (
        <div className={styles.MainPage} ref={BoxRef}>
            <div className={styles.TextContainer} dangerouslySetInnerHTML={{ __html: text }} ref={TextRef} />
        </div>
    );
};
