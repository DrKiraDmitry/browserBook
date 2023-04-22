import React, { useEffect, useMemo, useState } from "react";
import { useOverflow } from "./useOverflow";

// Нужен регресс

enum SliceStep {
    progress = "progress", //Первая стадия, наполняем страницу пока не заполниться
    regress = "regress", //Вторая стадия, возращаемся назад пока не получим снова не заполненую страницу
    stop = "stop", // Финал останавливаем проццесс отдаем результат
}

export const useSliceOnePage = (cutText: string, BoxHeight?: number, TextHeight?: number) => {
    const overflow = useOverflow(BoxHeight, TextHeight);

    const [step, setStep] = useState(SliceStep.progress);

    const [stash, setStash] = useState<string[]>(cutText.trim().split(" "));

    const [text, setText] = useState("");

    const progress = () => {
        if (overflow) return setStep(SliceStep.regress);
        const stashBuffer = stash;
        const takeWord = stashBuffer.shift();
        setText((prev) => (prev + " " + takeWord).trim());
        setStash(stashBuffer);
    };

    const regress = () => {
        if (!overflow) return setStep(SliceStep.stop);
        const textBuffer = text.trim().split(" ");
        const takeWord1 = textBuffer.pop();
        const takeWord2 = textBuffer.pop();
        if (!takeWord1 || !takeWord2) return setStep(SliceStep.stop);
        let inBuffer = [takeWord2, takeWord1];
        const takeLastWord = textBuffer.slice(-1)[0];
        if (takeLastWord.includes("\n")) {
            textBuffer.pop();
            const [forText, forBuffer] = takeLastWord.split("\n");
            textBuffer.push(forText);
            inBuffer = [forBuffer, ...inBuffer];
        }
        setText(textBuffer.join(" "));
        setStash((prev) => inBuffer.concat(prev));
        setStep(SliceStep.stop);
    };

    useEffect(() => {
        if (step === SliceStep.progress) progress();
        if (step === SliceStep.regress) regress();
        if (step === SliceStep.stop) console.log(stash);
    }, [text, step]);

    return {
        text,
        stash,
    };
};
