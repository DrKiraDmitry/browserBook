export const OverflowAlert = (box: HTMLDivElement, text: HTMLDivElement) =>
    console.table({
        title: "have overflow",
        box: box?.clientHeight,
        text: text?.clientHeight,
        difference: text?.clientHeight - box?.clientHeight,
    });
