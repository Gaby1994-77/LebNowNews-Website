import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import AppNavigator from "./navigation/AppNavigator";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <AppNavigator />
        </Fragment>
      </PersistGate>
    </Provider>
  );
};

export default App;
