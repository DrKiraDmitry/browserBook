import React, { FC, useState } from "react";
import styles from "./PageForBook.module.scss";
import { useRootStore } from "../../../utils/rootStoreUtils";
import { ShowPaddingOnPageEditorMode } from "../../ShowPaddingOnPageEditorMode/ShowPaddingOnPageEditorMode";
import { TextAreaButAllChange } from "../../InputsComponents/TextAreaButAllChange/TextAreaButAllChange";
import { observer } from "mobx-react-lite";

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
                {EditorMode && (
                    <TextAreaButAllChange
                        className={styles.PageForBook__textarea}
                        defaultValue={text}
                        onChange={(x) => store.TextAreaChange(x)}
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
});

export const PagesLayer = observer(() => {
    const {
        BookPageStore: store,
        BookStore: { EditorMode },
        BookPageSettingsStore: setting,
    } = useRootStore();

    const [currentPage, setCurrentPage] = useState(0);

    return (
        <>
            <button
                style={{ border: 0 }}
                onClick={() => setCurrentPage((prev) => prev - 2)}
                disabled={currentPage === 0}
            >
                prev
            </button>
            {store.Text.split("\n").length} {store.Text.length}
            <PageForBook text={store.Text} />
            {/*<PageForBook text={store.cutText()[currentPage + 1]} />*/}
            {/*<button*/}
            {/*    style={{ border: 0 }}*/}
            {/*    onClick={() => setCurrentPage((prev) => prev + 2)}*/}
            {/*    disabled={currentPage === store.totalPages() - 2}*/}
            {/*>*/}
            {/*    next*/}
            {/*</button>*/}
        </>
    );
});
