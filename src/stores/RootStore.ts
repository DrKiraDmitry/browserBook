import { makeAutoObservable, observable } from "mobx";
import { BookPageStore } from "./BookPageStore";
import { BookStore } from "./BookStore";
import { BookPageSettingsStore } from "./BookPageSettingsStore";
import { EditorStore } from "./EditorStore";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    @observable BookPageSettingsStore = new BookPageSettingsStore();
    @observable BookPageStore = new BookPageStore();
    @observable BookStore = new BookStore();
    @observable EditorStore = new EditorStore();

    constructor() {
        makeAutoObservable(this);
    }
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
