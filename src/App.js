import React from "react";
import { Provider } from "react-redux";

import { AppContainer } from "./styled";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Menu from "./layout/Menu/Menu";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppContainer>
        <Menu />
        <Home />
      </AppContainer>
      <Footer />
    </Provider>
  );
}

export default App;
