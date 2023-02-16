import React, { useRef, useState } from "react";
import styles from "./styles/index.module.scss";

export const Editor = () => {
    const editorContainerRef = useRef<HTMLDivElement | null>(null);
    const [mainState, setMainState] = useState("");

    return (
        <>
            <div ref={editorContainerRef} className={styles.editor__container}>
                <textarea className={styles.editor} onChange={(e) => setMainState(e.target.value)} value={mainState} />
            </div>
        </>
    );
};
