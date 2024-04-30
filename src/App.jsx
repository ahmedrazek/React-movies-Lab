import { Routes, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Nav from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FavMovies from "./components/FavMovies";
import { Flowbite } from "flowbite-react";

function App() {
  const language = useSelector((state) => state.language.lang);
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = language == "en" ? "ltr" : "rtl";
  }, [language]);
  return (
    <>
      <Flowbite>
        <Nav />
        <div className="dark:bg-gray-800">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/favMovies" element={<FavMovies />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
          </Routes>
        </div>
      </Flowbite>
    </>
  );
}

export default App;
