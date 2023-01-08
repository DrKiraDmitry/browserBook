import { action, makeAutoObservable } from "mobx";

export enum PageTypeEnum {
    Cover = "Cover",
    Page = "Page",
}

export class BookStore {
    EditorMode: boolean = false;
    PageType: PageTypeEnum = PageTypeEnum.Page;

    constructor() {
        makeAutoObservable(this);
    }

    @action EditorModeSwitcher() {
        this.EditorMode = !this.EditorMode;
    }

    @action PageTypeSwitcher(type: PageTypeEnum) {
        this.PageType = type;
    }
}
