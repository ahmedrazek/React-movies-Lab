import { NavLink } from "react-router-dom";
import { toggleLanguage } from "../../store/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { DarkThemeToggle } from "flowbite-react";
import { Navbar } from "flowbite-react";
function Nav() {
  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();
  return (
    <>
      {/* <nav className=" bg-white p-4 border-gray-200 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold dark:text-white">My Website</div>

            <div className="hidden space-x-4 md:flex">
              <NavLink
                to="/"
                // className="text-white hover:text-gray-300"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-gray-300 bg-red-300 rounded-md px-1"
                    : "text-white hover:text-gray-300"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-gray-300 bg-red-300 rounded-md px-1"
                    : "text-white hover:text-gray-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-gray-300 bg-red-300 rounded-md px-1"
                    : "text-white hover:text-gray-300"
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="/favMovies"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-gray-300 bg-red-300 rounded-md px-1"
                    : "text-white hover:text-gray-300"
                }
              >
                My Favorite Movies
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white hover:text-gray-300 bg-red-700 rounded-md px-1"
                    : "text-white hover:text-gray-300"
                }
              >
                Contact
              </NavLink>
            </div>
            <button
              type="button"
              onClick={() => {
                dispatch(toggleLanguage());
              }}
            >
              Change to {language == "en" ? "ar" : "en"}
            </button>
            <DarkThemeToggle />
          </div>
        </div>
      </nav> */}
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Moviezland
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink href="#" active>
            <NavLink to="/">Home</NavLink>
          </NavLink>
          <Navbar.Link href="#">
            <NavLink to="/about">About</NavLink>
          </Navbar.Link>
          <Navbar.Link href="#">
            <NavLink to="/movies">Movies</NavLink>
          </Navbar.Link>
          <Navbar.Link href="#">
            <NavLink to="/favMovies">Favorite Movies</NavLink>
          </Navbar.Link>
          <Navbar.Link href="#">
            <NavLink to="/contact">Contact</NavLink>
          </Navbar.Link>
        </Navbar.Collapse>
        <button
          type="button"
          onClick={() => {
            dispatch(toggleLanguage());
          }}
          className="dark:text-white"
        >
          Change to {language == "en" ? "ar" : "en"}
        </button>
        <DarkThemeToggle />
      </Navbar>
    </>
  );
}
export default Nav;
