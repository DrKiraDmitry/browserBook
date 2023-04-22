export const OverflowAlert = (BoxHeight: number, TextHeight: number) =>
    console.table({
        title: "have overflow",
        box: BoxHeight,
        text: TextHeight,
        difference: TextHeight - BoxHeight,
    });
