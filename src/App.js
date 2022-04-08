import React from "react";
import ContextPhoneProvider from "./context/phoneContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import CartContextProvider from "./context/cartCorntext";
import AuthContextProvider from "./context/authContext";
import CommitContextProvider from "./context/contextCommit";
import FanContextProvider from "./context/followContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ContextPhoneProvider>
          <CommitContextProvider>
            <FanContextProvider>
              <Routing />
            </FanContextProvider>
          </CommitContextProvider>
        </ContextPhoneProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
