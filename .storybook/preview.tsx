import React from "react";
import "../src/index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { LangProvider } from "../src/hooks";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <LangProvider>{Story()}</LangProvider>
    </Provider>
  ),
];