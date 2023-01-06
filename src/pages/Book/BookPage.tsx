import React from "react";
import styles from "./BookPage.module.scss";
import { Cover } from "../../components/Book/Cover/Cover";
import { PageForBook } from "../../components/Book/PageForBook/PageForBook";
import { useRootStore } from "../../utils/rootStoreUtils";
import { PageTypeEnum } from "../../stores/BookPageStore";
import { observer } from "mobx-react-lite";

export const BookPage = observer(() => {
    const { BookPageStore: store } = useRootStore();
    return (
        <div className={styles.BookPage__container}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button onClick={() => store.PageTypeSwitcher(PageTypeEnum.Cover)}>Cover</button>
                <button onClick={() => store.PageTypeSwitcher(PageTypeEnum.Page)}>Page</button>
                <h1 className={styles.BookPage__title}>Title</h1>
            </div>
            <div className={styles.BookPage__book}>
                {
                    {
                        [PageTypeEnum.Cover]: <Cover />,
                        [PageTypeEnum.Page]: <PageForBook />,
                    }[store.PageType]
                }
            </div>
        </div>
    );
});
