import React from "react";
import { Provider } from "react-redux";

import { AppContainer, AppMain } from "./styled";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        {/* <Header /> */}
        <AppMain>
          <Home />
        </AppMain>
        {/* <Footer /> */}
      </AppContainer>
    </Provider>
  );
}

export default App;
