import AppProviders from "@context/index";
//redux
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "@redux/reducers/index";
//service worker
// import * as serviceWorker from "./serviceWorker";
//bootstrap
// import "bootstrap/dist/css/bootstrap.css";
//localization
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";

//styles
import "@styles/globals.css";
import "@styles/standard-styles.css";
import "@styles/standard-styles-font.css";
import "@styles/standard-styles-grid.css";
import "@styles/standard-styles-animations.css";
import "@styles/standard-styles-elements.css";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AppProviders Component={Component} pageProps={{ ...pageProps }} />
      </Provider>
    </I18nextProvider>
  );
}

export default MyApp;
