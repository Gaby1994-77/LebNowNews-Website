import React, { Fragment, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppNavigator from "./navigation/AppNavigator";

const App: React.FC = () => {
  const [] = useState(false);

  return (
    <Provider store={store}>
      <Fragment>
        <AppNavigator />
      </Fragment>
    </Provider>
  );
};

export default App;
