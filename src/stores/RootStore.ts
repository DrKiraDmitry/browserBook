import { observable } from "mobx";
import { RouterState, RouterStore } from "mobx-state-router";
import { BookPageStore } from "./BookPageStore";
import { BookStore } from "./BookStore";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    @observable BookPageStore = new BookPageStore();
    @observable BookStore = new BookStore();
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
