import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./ETC/HardCode";
import { GiveMeBook, PagesType } from "./ETC/GiveMeBook";

const generateKey = (pre: string | number) => {
    return `${pre}_${new Date().getTime()}`;
};

export const MainPage = () => {
    const [pages, setPages] = useState<PagesType[]>([]);

    return (
        <div className={styles.MainPage}>
            <div className={styles.PagesList}>
                {pages.map((el, i) => (
                    <div key={generateKey(i)} className={styles.Page} style={{ zoom: 0.2 }}>
                        <div className={styles.ContentBox}>
                            <div className={styles.TextBox} dangerouslySetInnerHTML={{ __html: el.text }} />
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ margin: "auto" }}>
                <GiveMeBook giveBook={BibleExodus} onReadiness={true} takePages={(x) => setPages(x)} />
            </div>
        </div>
    );
};
