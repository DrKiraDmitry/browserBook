import { action, makeAutoObservable } from "mobx";

export enum PageTypeEnum {
    Cover = "Cover",
    Page = "Page",
}

export class BookPageStore {
    EditorMode: boolean = false;
    PageType: PageTypeEnum = PageTypeEnum.Cover;

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
