import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "@redux/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_OAUTH_CLIENT_ID } from "@config/environment";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
