import React from "react";
import styles from "./PageForBook.module.scss";
import { Text } from "./Text";

export const PageForBook = () => {
    return (
        <div style={{ padding: "1rem" }}>
            <div className={styles.PageComponent__side}>side</div>
            <div className={styles.PageComponent__main}>
                <div
                    className={styles.PageComponent__text}
                    style={{ whiteSpace: "break-spaces" }}
                    dangerouslySetInnerHTML={{ __html: Text }}
                />
                <div className={styles.PageComponent__bottom}>Bottom</div>
            </div>
        </div>
    );
};
