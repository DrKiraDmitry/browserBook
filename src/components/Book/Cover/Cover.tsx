import React from "react";
import styles from "./Cover.module.scss";
import img from "./Mask.png";

const EditorMode = false;

export const Cover = () => {
    return (
        <div className={styles.Cover}>
            <img className={styles.Cover__img} src={img} alt="" />
            {EditorMode && (
                <label>
                    <input type="file" />
                </label>
            )}
            <div className={styles.Cover__title} dangerouslySetInnerHTML={{ __html: "Title" }} />
        </div>
    );
};
