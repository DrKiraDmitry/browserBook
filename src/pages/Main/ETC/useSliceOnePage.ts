import React, { useEffect, useMemo, useState } from "react";
import { useOverflow } from "./useOverflow";

enum SliceStep {
    progress = "progress", //Первая стадия, наполняем страницу пока не заполниться
    regress = "regress", //Вторая стадия, возращаемся назад пока не получим снова не заполненую страницу
    stop = "stop", // Финал останавливаем проццесс отдаем результат
}

// For working this component you need create
// textContainer - it's container, without css padding
// textBox - box must be in textContainer, without css padding
export const useSliceOnePage = (cutText: string, BoxHeight?: number, TextHeight?: number) => {
    const overflow = useOverflow(BoxHeight, TextHeight);

    const [step, setStep] = useState(SliceStep.progress);

    const [stash, setStash] = useState<string[]>(cutText.trim().split(" "));

    const [text, setText] = useState("");

    const progress = () => {
        if (overflow) return setStep(SliceStep.regress);
        const stashBuffer = stash;
        const takeWord = stashBuffer.shift();
        if (!takeWord) return setStep(SliceStep.stop);
        setText((prev) => (prev + " " + takeWord).trim());
        setStash(stashBuffer);
    }; // Progress, getter one word from stash and take in page

    const regress = () => {
        if (!overflow) return setStep(SliceStep.stop);
        const textBuffer = text.trim().split(" ");
        const takeWord1 = textBuffer.pop(); // Почему-то не сразу передается новый TextHeight и он добавляет два лишних элемента
        const takeWord2 = textBuffer.pop(); // Потому здесь их два TODO Берет лишние слоаа

        if (!takeWord1 || !takeWord2) return setStep(SliceStep.stop); // Убедимся что у нас вообще есть последние слова
        let inBuffer = [takeWord2, takeWord1];

        //Проверка на то что последнее слово не склеено с переносом строки из-за чего может вылезти текст
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
    }; // Regress need, because we understand what our page overflow before overflow, and need return to back

    useEffect(() => {
        if (step === SliceStep.progress) progress();
        if (step === SliceStep.regress) regress();
    }, [text, step]);

    return {
        text,
        stash,
        end: step === SliceStep.stop, // этот флаг нужен для того чтоб сказать хук отработал до конца
    };
};
