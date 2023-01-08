import React, { FC, useState } from "react";
import styles from "./PageForBook.module.scss";
import { useRootStore } from "../../../utils/rootStoreUtils";
import { ShowPaddingOnPageEditorMode } from "../../ShowPaddingOnPageEditorMode/ShowPaddingOnPageEditorMode";

export const PageForBook: FC<{ text: string }> = ({ text }) => {
    const {
        BookPageStore: store,
        BookStore: { EditorMode },
        BookPageSettingsStore: setting,
    } = useRootStore();

    return (
        <div style={{ ...setting.padding }} className={styles.PageForBook} id={"1"}>
            {EditorMode && <ShowPaddingOnPageEditorMode data={setting.padding} />}
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
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                )}
                {store.BottomSide && <div className={styles.PageForBook__bottom}>Bottom</div>}
            </div>
        </div>
    );
};

export const PagesLayer = () => {
    const {
        BookPageStore: store,
        BookStore: { EditorMode },
        BookPageSettingsStore: setting,
    } = useRootStore();
    const [currentPage, setCurrentPage] = useState(0);
    const lengthPage = 1400;
    const howPages = Math.round(store.Text.length / lengthPage) + 1;
    const totalPages = howPages % 2 ? howPages + 1 : howPages;
    const cutText = new Array(totalPages).fill(1).map((el, i) => {
        console.log(store.Text.length, howPages, totalPages, i * lengthPage, (i + 1) * lengthPage, i);
        return store.Text.slice(i * lengthPage, (i + 1) * lengthPage);
    });
    return (
        <>
            <button onClick={() => setCurrentPage((prev) => prev - 2)} disabled={currentPage === 0}>
                prev
            </button>
            <PageForBook text={cutText[currentPage]} />
            <PageForBook text={cutText[currentPage + 1]} />
            <button onClick={() => setCurrentPage((prev) => prev + 2)} disabled={currentPage === totalPages - 2}>
                next
            </button>
        </>
    );
};
