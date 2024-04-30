import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginPage/LoginScreen";
import SignUpScreen from "./pages/SignUpPage/SignUpPageScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import SavedNewsScreen from "./pages/SavedNewsScreen/SavedNewsScreen";
import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
import Drawer from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
        <Drawer />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/Home" element={<HomeScreen />} />
          <Route path="/News" element={<HomeScreen />} />
          <Route path="/SavedNews" element={<SavedNewsScreen />} />
          <Route path="/About" element={<AboutUsScreen />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
