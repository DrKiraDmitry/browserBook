import React from "react";
import styles from "./PageForBook.module.scss";
import { useRootStore } from "../../../utils/rootStoreUtils";

export const PageForBook = () => {
    const {
        BookPageStore: store,
        BookStore: { EditorMode },
    } = useRootStore();
    return (
        <div style={{ padding: "1rem" }} className={styles.PageForBook}>
            {store.Aside && <div className={styles.PageForBook__side}>side</div>}
            <div className={styles.PageForBook__main}>
                {EditorMode && (
                    <textarea
                        className={styles.PageForBook__textarea}
                        defaultValue={store.Text}
                        onChange={(e) => store.TextAreaChange(e)}
                    />
                )}
                {!EditorMode && (
                    <div
                        className={styles.PageForBook__text}
                        style={{ whiteSpace: "break-spaces" }}
                        dangerouslySetInnerHTML={{ __html: store.Text }}
                    />
                )}
                {store.BottomSide && <div className={styles.PageForBook__bottom}>Bottom</div>}
            </div>
        </div>
    );
};
