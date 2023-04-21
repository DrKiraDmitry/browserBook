import React, { FC } from "react";
import styles from "./ShowPaddingOnPageEditorMode.module.scss";

const ArrowIcon: FC<{ size: string; rotate?: boolean }> = ({ size, rotate }) => {
    return (
        <svg
            width={size}
            height="8"
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ transform: rotate ? "rotate(90deg) translateX(-2px)" : "" }}
        >
            <path
                d="M8.41 1.41L7 0L0 7L7 14L8.42 12.59L3.83 8H19.17L14.58 12.59L16 14L23 7L16 0L14.59 1.41L19.17 6H3.83L8.41 1.41Z"
                fill="#323232"
            />
        </svg>
    );
};

export const ShowPaddingOnPageEditorMode: FC<{ data: any }> = ({ data }) => {
    return (
        <>
            <div className={styles.ShowPaddingOnPageEditorMode__top}>
                <ArrowIcon size={data.paddingTop} rotate={true} /> {data.paddingTop}
            </div>
            <div className={styles.ShowPaddingOnPageEditorMode__right}>
                <ArrowIcon size={data.paddingRight} /> {data.paddingRight}
            </div>
            <div className={styles.ShowPaddingOnPageEditorMode__bottom}>
                <ArrowIcon size={data.paddingBottom} rotate={true} /> {data.paddingBottom}
            </div>
            <div className={styles.ShowPaddingOnPageEditorMode__left}>
                <ArrowIcon size={data.paddingLeft} /> {data.paddingLeft}
            </div>
        </>
    );
};
