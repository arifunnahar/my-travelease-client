import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, signOutUserFunc, setUser } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    signOutUserFunc()
      .then(() => {
        setUser(null);
        setShowProfile(false);
      })
      .catch((e) => console.log(e.message));
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/allVehicles", label: "All Vehicles" },
    { to: "/addVehicles", label: "Add Vehicles" },
    { to: "/myVehicles", label: "My Vehicles" },
    { to: "/myBooking", label: "My Bookings" },
  ];

  return (
    <nav className="bg-blue-100 dark:text-blue-600 shadow-sm p-4 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        
        <Link to="/" className="text-2xl font-bold text-blue-800">
          TravelEase
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-5 font-medium">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "text-purple-600 underline" : "hover:underline"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          
          {/* Theme Toggle */}
          <input
            type="checkbox"
            className="toggle"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
          />

          {!user && (
            <>
              <Link
                to="/signin"
                className="btn bg-pink-300 hover:bg-pink-400 btn-outline px-3 py-1 hidden md:inline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 hidden md:inline"
              >
                Signup
              </Link>
            </>
          )}

          {user && (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-4 w-64 bg-blue-50 shadow-lg rounded-lg p-4 z-50">
                  <div className="flex flex-col items-center mb-2">
                    <img
                      src={user.photoURL || "https://via.placeholder.com/80"}
                      alt={user.displayName || "User"}
                      className="w-20 h-20 rounded-full mb-2"
                    />
                    <h2 className="text-lg font-semibold hover:text-purple-600 mb-2">
                      {user.displayName}
                    </h2>
                    <p className="text-gray-500">{user.email}</p>
                    <ul className="flex flex-col items-center gap-2 mb-4">
                      <li>
                        <Link
                          className="hover:text-purple-600 font-bold hover:underline"
                          onClick={() => setShowProfile(false)}
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="btn bg-blue-500 hover:bg-blue-600 text-white w-full"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 bg-blue-50 p-4 rounded-lg shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-purple-600 underline" : "hover:underline"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {!user && (
            <>
              <Link
                to="/signin"
                className="btn btn-outline w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Signup
              </Link>
            </>
          )}

          {user && (
            <div className="flex flex-col items-center gap-2 mt-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User"}
                className="w-12 h-12 rounded-full border-2 border-blue-500"
              />
              <h2 className="font-semibold hover:text-purple-600 mb-1">
                {user.displayName}
              </h2>
              <Link
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-purple-600 font-bold hover:underline mb-2 mt-2"
              >
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="btn bg-blue-400 hover:bg-blue-500 text-white w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
