import { action, makeAutoObservable } from "mobx";
import { BigText, Text } from "../components/Book/PageForBook/Text";
import { ChangeEvent } from "react";

export class BookPageStore {
    Aside: boolean = false;
    BottomSide: boolean = false;
    Text: string = BigText;

    constructor() {
        makeAutoObservable(this);
    }

    @action TextAreaChange(e: ChangeEvent<HTMLTextAreaElement>) {
        this.Text = e.target.value;
    }
}
