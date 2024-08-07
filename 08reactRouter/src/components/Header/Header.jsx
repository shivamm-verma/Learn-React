import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const darkModeToggler = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const [themeStatus, setThemeStatus] = "light"
  const themeChanger = () => {
    if (themeStatus =="light") {
      setThemeStatus("dark")
    } else{
      setThemeStatus("light")
    }
  }

  // useEffect(() => {
  //   if (darkMode == true) {
  //     document.getElementById(dark-mode-btn).innerText = "Light Mode"
  //   }
  // }, darkMode);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-slate-900 dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.kindpng.com/picc/m/46-469309_pikachu-clipart-transparent-background-random-pictures-transparent-background.png"
              className="mr-3 h-14"
              alt="Logo"
            /> <h2 className="text-xl font-semibold">Pikachu</h2>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
            id="dark-mode-btn"
              onClick={darkModeToggler}
              type="button"
              class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:text-white dark:border-white"
            >
              Mode change
            </button>
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mx-2 focus:outline-none dark:hover:bg-black dark:hover:text-white dark:border-white dark:bg-white border-black border-2"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          {/* Pikachu is a Dark Mode Toggler here */}
          {/* <button onClick={darkModeToggler}>Pikachu</button> */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-green-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0 dark:text-white`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-green-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0 dark:text-white`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-green-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0 dark:text-white`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-green-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0 dark:text-white`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-green-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0 dark:text-white`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
