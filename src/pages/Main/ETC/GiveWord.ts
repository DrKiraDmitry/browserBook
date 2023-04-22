export const giveWord = (text: string, count = 1) => {
    const sliceText = text.trim().split(" ");
    const firstWord = sliceText.slice(0, count);
    sliceText.shift();
    return {
        next: firstWord.join(" "),
        left: sliceText.join(" "),
    };
};
