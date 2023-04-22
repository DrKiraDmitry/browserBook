import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./ETC/HardCode";
import { useSliceOnePage } from "./ETC/useSliceOnePage";

const Page: FC<{ getStash: (text: string, stash: string[]) => void }> = ({ getStash }) => {
    const BoxRef = useRef<HTMLDivElement | null>(null);
    const TextRef = useRef<HTMLDivElement | null>(null);
    const { text, stash, end } = useSliceOnePage(
        BibleExodus,
        BoxRef.current?.clientHeight,
        TextRef.current?.clientHeight
    );

    useEffect(() => {
        if (!end) return;
        getStash(text, stash);
    }, [end]);

    return (
        <div className={styles.Page}>
            <div className={styles.ContentBox} ref={BoxRef}>
                <div className={styles.TextBox} dangerouslySetInnerHTML={{ __html: text }} ref={TextRef} />
            </div>
        </div>
    );
};

type PagesType = {
    text: string;
};

export const MainPage = () => {
    const Book = BibleExodus;
    const [pages, setPages] = useState<PagesType[]>([]);

    const makePageObject = (str: string) => {
        return {
            text: str,
        };
    };

    useEffect(() => {
        if (!Book) return;
        console.log(pages);
    }, [pages]);

    return <Page getStash={(x) => setPages((prev) => [...prev, makePageObject(x)])} />;
};
