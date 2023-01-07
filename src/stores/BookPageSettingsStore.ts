import { action, makeAutoObservable } from "mobx";
import { BigText, Text } from "../components/Book/PageForBook/Text";
import { ChangeEvent } from "react";

export type PaddingType = {
    paddingTop: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
};

export class BookPageSettingsStore {
    padding: PaddingType = {
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    };

    constructor() {
        makeAutoObservable(this);
    }
}
