import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { createStore,combineReducers } from "redux";
import light from "./Reducers/lightReducer";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const store = createStore( 
  combineReducers({ light:light }),
  composeWithDevTools()
)

Sentry.init({
  dsn: "https://ce827137ae774fb4b47aaead1705fce0@o1381008.ingest.sentry.io/6694667",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
