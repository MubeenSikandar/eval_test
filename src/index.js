import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducer"
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from "./App.js"
import "./index.css"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
   
    <BrowserRouter>
        <Provider store={store}>
        <GoogleOAuthProvider clientId="372149628838-omp5ak6jjkk7f796db5ef0lbk8vep4df.apps.googleusercontent.com">
                <App />
        </GoogleOAuthProvider>
        </Provider>
        </BrowserRouter>
      ,
    document.getElementById("root"))