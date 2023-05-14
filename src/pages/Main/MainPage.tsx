import React, { useState } from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./ETC/HardCode";
import { GiveMeBook, PagesType } from "./ETC/GiveMeBook";
import { PageList } from "./ETC/PageList";

export const MainPage = () => {
    const [pages, setPages] = useState<PagesType[]>([]);

    return (
        <div className={styles.MainPage}>
            <PageList pages={pages} />
            <div style={{ margin: "auto" }}>
                <GiveMeBook giveBook={BibleExodus} onReadiness={true} takePages={(x) => setPages(x)} />
            </div>
        </div>
    );
};
