import React, { FC } from "react";
import styles from "./PageForBook.module.scss";
import { useRootStore } from "../../../utils/rootStoreUtils";
import { ShowPaddingOnPageEditorMode } from "../../ShowPaddingOnPageEditorMode/ShowPaddingOnPageEditorMode";
import { observer } from "mobx-react-lite";
import { Editor } from "../../Editor";

export const PageForBook: FC<{ text: string }> = observer(({ text }) => {
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
                {EditorMode && <Editor />}
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
});

export const PagesLayer = observer(() => {
    const { BookPageStore: store } = useRootStore();

    return (
        <>
            <button
                style={{ border: 0 }}
                onClick={() => store.setCurrentPage((x) => x - 2)}
                disabled={store.currentPage === 1}
            >
                prev
            </button>
            <PageForBook text={store.currentCouple[0].text} />
            <PageForBook text={store.currentCouple[1].text} />
            <button
                style={{ border: 0 }}
                onClick={() => store.setCurrentPage((x) => x + 2)}
                disabled={store.currentPage - 1 === store.totalCouple * 2}
            >
                next
            </button>
        </>
    );
});
