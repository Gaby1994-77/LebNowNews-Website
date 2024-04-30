// import React, { Fragment, useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import LoginScreen from "./pages/LoginPage/LoginScreen";
// import SignUpScreen from "./pages/SignUpPage/SignUpPageScreen";
// import HomeScreen from "./pages/HomeScreen/HomeScreen";
// import SavedNewsScreen from "./pages/SavedNewsScreen/SavedNewsScreen";
// import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
// import Drawer from "./components/Navbar/Navbar";

// const App: React.FC = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Fragment>
//       <Router>
//         {isAuthenticated && <Drawer />}
//         <Routes>
//           <Route
//             path="/"
//             element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
//           />
//           <Route path="/signup" element={<SignUpScreen />} />
//           <Route path="/Home" element={<HomeScreen />} />
//           <Route path="/News" element={<HomeScreen />} />
//           <Route path="/SavedNews" element={<SavedNewsScreen />} />
//           <Route path="/About" element={<AboutUsScreen />} />
//         </Routes>
//       </Router>
//       <ToastContainer />
//     </Fragment>
//   );
// };

// export default App;

import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./store/store";
import LoginScreen from "./pages/LoginPage/LoginScreen";
import SignUpScreen from "./pages/SignUpPage/SignUpPageScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import SavedNewsScreen from "./pages/SavedNewsScreen/SavedNewsScreen";
import AboutUsScreen from "./pages/AboutUsScreen/AboutUsScreen";
import Drawer from "./components/Navbar/Navbar";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {isAuthenticated && <Drawer />}
          <Routes>
            <Route
              path="/"
              element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/Home" element={<HomeScreen />} />
            <Route path="/News" element={<HomeScreen />} />
            <Route path="/SavedNews" element={<SavedNewsScreen />} />
            <Route path="/About" element={<AboutUsScreen />} />
          </Routes>
          <ToastContainer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
