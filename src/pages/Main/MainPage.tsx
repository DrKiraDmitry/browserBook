import React from "react";
import styles from "./styles/MainPage.module.scss";
import { BibleExodus } from "./HardCode";

export const MainPage = () => {
    return <div className={styles.MainPage} dangerouslySetInnerHTML={{ __html: BibleExodus }} />;
};
