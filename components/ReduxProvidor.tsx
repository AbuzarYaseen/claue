"use client";
import React from "react";
import { Provider } from "react-redux";
import store, { persistedStore } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";

const ReduxProvidor = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvidor;
