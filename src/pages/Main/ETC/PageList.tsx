import React, { FC } from "react";
import { PagesType } from "./GiveMeBook";
import styles from "../styles/MainPage.module.scss";
import { generateKey } from "./GenerateKey";

export const PageList: FC<{ pages: PagesType[] }> = ({ pages }) => {
    return (
        <div className={styles.PagesList}>
            {pages.map((el, i) => (
                <div key={generateKey(i)} className={styles.Page} style={{ zoom: 0.2 }}>
                    <div className={styles.ContentBox}>
                        <div className={styles.TextBox} dangerouslySetInnerHTML={{ __html: el.text }} />
                    </div>
                </div>
            ))}
        </div>
    );
};
