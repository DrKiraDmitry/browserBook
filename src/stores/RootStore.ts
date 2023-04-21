import { makeAutoObservable, observable } from "mobx";
// import { RouteNames, Routes } from "src/routes";

export class RootStore {
    constructor() {
        makeAutoObservable(this);
    }
    // @observable routerStore = new RouterStore(this, Routes, new RouterState(RouteNames.notFound));
}
