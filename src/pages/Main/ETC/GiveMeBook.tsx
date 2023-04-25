import React, { FC, useEffect, useRef, useState } from "react";
import { useSliceOnePage } from "./useSliceOnePage";
import styles from "../styles/MainPage.module.scss";
import { BibleExodus } from "./HardCode";

const Page: FC<{ getStash: (text: string, stash: string[]) => void; book: string }> = ({ getStash, book }) => {
    const BoxRef = useRef<HTMLDivElement | null>(null);
    const TextRef = useRef<HTMLDivElement | null>(null);
    const { text, stash, end } = useSliceOnePage(book, BoxRef.current?.clientHeight, TextRef.current?.clientHeight);

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

export type PagesType = {
    text: string;
};

export const GiveMeBook: FC<{ giveBook: string; takePages: (pages: PagesType[]) => void; onReadiness: boolean }> = ({
    giveBook,
    onReadiness,
    takePages,
}) => {
    const [book, setBook] = useState(giveBook);
    const [pages, setPages] = useState<PagesType[]>([]);
    const [tumbler, setTumbler] = useState(false); // Tumbler need for make new Page, and don't think about cleaning Page component

    const makePageObject = (str: string) => {
        return {
            text: str,
        };
    };

    const callback = (text: string, left: string[]) => {
        setPages((prev) => [...prev, makePageObject(text)]);
        setBook(left.join(" "));
    };

    useEffect(() => {
        if (!book) return takePages(pages);
        setTumbler((prev) => !prev);
        if (onReadiness) takePages(pages);
    }, [pages]);

    return (
        <>
            {tumbler ? (
                <Page key={"1"} book={book} getStash={(pageText, left) => callback(pageText, left)} />
            ) : (
                <Page key={"2"} book={book} getStash={(pageText, left) => callback(pageText, left)} />
            )}
        </>
    );
};
