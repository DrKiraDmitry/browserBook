import React from "react";
import styles from "./BookPage.module.scss";
import { Cover } from "../../components/Book/Cover/Cover";
import { PageForBook, PagesLayer } from "../../components/Book/PageForBook/PageForBook";
import { useRootStore } from "../../utils/rootStoreUtils";
import { observer } from "mobx-react-lite";
import { PageTypeEnum } from "../../stores/BookStore";

export const BookPage = observer(() => {
    const { BookStore: store } = useRootStore();
    return (
        <div className={styles.BookPage__container}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <button onClick={() => store.PageTypeSwitcher(PageTypeEnum.Cover)}>Cover</button>
                <button onClick={() => store.PageTypeSwitcher(PageTypeEnum.Page)}>Page</button>
                <button onClick={() => store.EditorModeSwitcher()}>
                    EditorMode: {store.EditorMode ? "On" : "Off"}
                </button>
                <h1 className={styles.BookPage__title}>Title</h1>
            </div>
            <div className={styles.BookPage__book}>
                {
                    {
                        [PageTypeEnum.Cover]: <Cover />,
                        [PageTypeEnum.Page]: <PagesLayer />,
                    }[store.PageType]
                }
            </div>
        </div>
    );
});
