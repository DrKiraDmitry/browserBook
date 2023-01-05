import React, { useState } from "react";
import styles from "./BookPage.module.scss";
import { Page } from "../../components/Book/Page/Page";
import { Cover } from "../../components/Book/Cover/Cover";

enum PageTypeEnum {
    Cover = "Cover",
    Page = "Page",
}

export const BookPage = () => {
    const [pageType, setPageType] = useState<PageTypeEnum>(PageTypeEnum.Cover);
    return (
        <div className={styles.BookPage__container}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button onClick={() => setPageType(PageTypeEnum.Cover)}>Cover</button>
                <button onClick={() => setPageType(PageTypeEnum.Page)}>Page</button>
                <h1 className={styles.BookPage__title}>Title</h1>
            </div>
            {
                {
                    [PageTypeEnum.Cover]: <Cover />,
                    [PageTypeEnum.Page]: <Page />,
                }[pageType]
            }
        </div>
    );
};
