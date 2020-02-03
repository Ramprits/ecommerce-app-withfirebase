import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

import "bulma/css/bulma.css";
import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
