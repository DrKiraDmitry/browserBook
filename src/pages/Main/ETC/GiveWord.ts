export const giveWord = (text: string, count = 1) => {
    const sliceText = text.trim().split(" ");
    const firstWord = sliceText.slice(0, count);
    const leftWord = sliceText.slice(count);

    return {
        next: firstWord.join(" "),
        left: leftWord.join(" "),
    };
}; // First iteration script for taking word from text
