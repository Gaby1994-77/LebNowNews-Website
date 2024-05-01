import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";
import AboutUsScreen from "../pages/AboutUsScreen/AboutUsScreen";
import Navbar from "../components/Navbar/Navbar";
import LoginScreen from "../pages/LoginPage/LoginScreen";
import SignUpScreen from "../pages/SignUpPage/SignUpPageScreen";
import SavedNewsScreen from "../pages/SavedNewsScreen/SavedNewsScreen";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import { selectIsAuthenticated } from "../store/slice/authSlice";

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Provider store={store}>
      <Router>
        {isAuthenticated && <Navbar />}
        <Toaster />
        <Routes>
          {!isAuthenticated && <Route path="/" element={<LoginScreen />} />}
          <Route path="/signup" element={<SignUpScreen />} />
          {isAuthenticated && (
            <>
              <Route element={<Navbar />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/savednews" element={<SavedNewsScreen />} />
              <Route path="/about" element={<AboutUsScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </Provider>
  );
};

export default AppNavigator;
