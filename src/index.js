import React from "react";
import ReactDOM from "react-dom/client";
import RouterSettings from "./RouterSettings";
import store from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <RouterSettings />
    </Provider>
);
