import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AboutUsScreen from "../pages/AboutUsScreen/AboutUsScreen";
import Navbar from "../components/Navbar/Navbar";
import LoginScreen from "../pages/LoginPage/LoginScreen";
import SignUpScreen from "../pages/SignUpPage/SignUpPageScreen";
import SavedNewsScreen from "../pages/SavedNewsScreen/SavedNewsScreen";
import HomeScreen from "../pages/HomeScreen/HomeScreen";

const AppNavigator: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const privateRoute = (component: JSX.Element) => {
    return isAuthenticated ? component : <Navigate to="/" replace />;
  };

  return (
    <Provider store={store}>
      <Router>
        {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
        <Routes>
          <Route
            path="/"
            element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route
            path="/home"
            element={privateRoute(
              <HomeScreen setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <Route
            path="/news"
            element={privateRoute(
              <HomeScreen setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <Route
            path="/savednews"
            element={privateRoute(
              <SavedNewsScreen setIsAuthenticated={setIsAuthenticated} />
            )}
          />
          <Route
            path="/about"
            element={privateRoute(
              <AboutUsScreen setIsAuthenticated={setIsAuthenticated} />
            )}
          />
        </Routes>
        <Toaster />
      </Router>
    </Provider>
  );
};

export default AppNavigator;
