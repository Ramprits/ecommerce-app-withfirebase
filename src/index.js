import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from '@sentry/browser';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

import "bulma/css/bulma.css";
import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
Sentry.init({dsn: "https://692ddc8ea22c49c8af40d8e299ff474a@sentry.io/2207746"});

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
