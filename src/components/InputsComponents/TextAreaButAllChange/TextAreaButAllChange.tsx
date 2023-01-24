import React, { FC, useRef } from "react";

type TextAreaButAllChangeProps = {
    onChange: (x: string) => any;
    defaultValue: string;
    className: string;
};

export const TextAreaButAllChange: FC<TextAreaButAllChangeProps> = ({ onChange, defaultValue, className }) => {
    const ref = useRef<HTMLTextAreaElement | null>(null);
    const debounce = (func: Function, delay: number) => {
        let debounceTimer: any;
        return function () {
            //@ts-ignore
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    };

    let handleChange = (event: any) => {
        if (ref.current) console.log(ref?.current.childNodes);
        onChange(event.target.value);
        event.persist();
    };

    let optimisedHandleChange = debounce(handleChange, 10);

    return <textarea ref={ref} defaultValue={defaultValue} className={className} onChange={optimisedHandleChange} />;
};
