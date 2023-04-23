import React from "react";
import { RootStore } from "src/stores/RootStore";
import { observer, Provider } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import { MainPage } from "./pages/Main/MainPage";

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
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    background: "chocolate",
                }}
            >
                <MainPage />
            </div>
        </Provider>
    );
});
