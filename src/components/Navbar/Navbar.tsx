import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetAuthState } from "../../store/slice/authSlice";
import logo from "../../assets/images/Logo.jpg";

import toast, { Toaster } from "react-hot-toast";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(
    localStorage.getItem("isMenuOpen") === "true" || false
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("isMenuOpen", JSON.stringify(isMenuOpen));
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    navigate("/", { replace: true });
  };

  const handleLogout = () => {
    dispatch(resetAuthState());
    navigate("/");
    toast.success("Logged out");
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full lg:relative z-50 bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button onClick={toggleMenu} className="lg:hidden">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="flex items-center ">
            <img src={logo} alt="Logo" className="w-12 h-10 mr-4" />
            <h2 className="text-white font-bold text-2xl">
              LebNow
            </h2>
          </div>
          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-white hover:underline"
              >
                <button onClick={handleNavigation}>News</button>
              </Link>
            </li>
            <li>
              <Link
                to="/savedNews"
                className="text-white hover:underline"
              >
                Saved News
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 text-base font-bold text-black/60 dark:text-white">
            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
              <Link to="/">News</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
              <Link to="/SavedNews">Saved News</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
              <Link to="/About">About Us</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
      <Toaster position="top-right" />
    </div>
  );
};

export default Navbar;
