import { observable } from "mobx";
import { RouterState, RouterStore } from "mobx-state-router";
import { BookPageStore } from "./BookPageStore";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    @observable BookPageStore = new BookPageStore();
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
