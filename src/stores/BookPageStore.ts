import { action, makeAutoObservable } from "mobx";
import { Text } from "../components/Book/PageForBook/Text";
import { ChangeEvent } from "react";

export enum PageTypeEnum {
    Cover = "Cover",
    Page = "Page",
}

export class BookPageStore {
    Aside: boolean = false;
    BottomSide: boolean = false;
    Text: string = Text;

    constructor() {
        makeAutoObservable(this);
    }

    @action TextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.Text = e.target.value;
    }
}
