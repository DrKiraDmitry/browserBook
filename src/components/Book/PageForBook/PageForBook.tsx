import React from "react";
import styles from "./PageForBook.module.scss";
import { useRootStore } from "../../../utils/rootStoreUtils";
import { ShowPaddingOnPageEditorMode } from "../../ShowPaddingOnPageEditorMode/ShowPaddingOnPageEditorMode";

export const PageForBook = () => {
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
                        dangerouslySetInnerHTML={{ __html: store.Text }}
                    />
                )}
                {store.BottomSide && <div className={styles.PageForBook__bottom}>Bottom</div>}
            </div>
        </div>
    );
};
