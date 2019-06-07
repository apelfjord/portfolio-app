import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import Site from "./components/Site/Site";

function App() {
  return (
    <Provider store={store}>
      <Site />
    </Provider>
  );
}

export default App;
