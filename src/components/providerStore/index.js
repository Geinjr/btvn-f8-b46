"use client"; // This component needs to be client-rendered

import { Provider } from "react-redux";
import store from "@/store";

const ProviderStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderStore;
