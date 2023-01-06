import React from "react";
import { RootStore } from "src/stores/RootStore";
import { observer, Provider } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { BookPage } from "./pages/Book/BookPage";

let root: RootStore;

const ensureInitialized = () => {
    if (root) return;
    root = new RootStore();
    // const historyAdapter = new HistoryAdapter(root.routerStore, createBrowserHistory());
    // historyAdapter.observeRouterStateChanges();
};

export const App = observer(() => {
    ensureInitialized();
    return (
        <Provider rootStore={root}>
            <BookPage />
        </Provider>
    );
});
