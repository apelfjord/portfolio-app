import React from "react";
import { Provider } from "react-redux";

import { AppContainer } from "./styled";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu/Menu";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        {/* <Header /> */}
        <Menu />
        <Home />
        {/* <Footer /> */}
      </AppContainer>
    </Provider>
  );
}

export default App;
