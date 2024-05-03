import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, removeMovie } from "../../store/favouriteMovieSlice";
import { getAllMovies } from "../../store/moviesSlice";
function Movies() {
  const [favMovies, setFavMovies] = useState([]);
  const [page, setPage] = useState(1);
  const favs = useSelector((state) => state.favMovies.favs);
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();
  // console.log(movies);
  const getMovies = async () => {
    dispatch(getAllMovies(page));
  };
  console.log("first");
  const getNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  const getPrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
  };
  const setPageNum = (num) => {
    setPage(num);
  };
  const toggleFavMovies = (newMovie) => {
    let newFavMovies;
    if (favMovies.find((mov) => mov.id === newMovie.id)) {
      //remove Movie to fav
      newFavMovies = favMovies.filter((mov) => mov.id != newMovie.id);
      dispatch(removeMovie(newMovie));
    } else {
      //add Movie to fav
      newFavMovies = [...favMovies, newMovie];
      dispatch(addMovie(newMovie));
    }
    setFavMovies(newFavMovies);
  };
  const setFavs = () => {
    setFavMovies(favs);
  };
  useEffect(() => {
    getMovies();
    setFavs();
  }, [page]);
  return (
    <>
      {isLoading ? (
        <div className="w-1/4 mx-auto mt-60">
          <img
            src="/src/assets/Bean Eater@1x-1.0s-200px-200px.svg"
            alt=""
            width={200}
            height={200}
          />
        </div>
      ) : (
        <>
          <div className=" flex flex-col p-20">
            <div className="grid grid-cols-4 gap-2 p-20">
              {movies.map((movie) => {
                return (
                  <>
                    <div
                      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative flex flex-col justify-between "
                      key={movie.id}
                    >
                      <a href="#">
                        <img
                          className="rounded-t-lg"
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          alt=""
                        />
                      </a>
                      <div className="p-4">
                        <a href="#">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {movie.title}
                          </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-40 overflow-clip">
                          {movie.overview}
                        </p>
                        <div className="flex items-center justify-between">
                          {currency === "RSA" ? (
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              {movie.vote_count * 4} SAR
                            </span>
                          ) : currency === "EGP" ? (
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              {movie.vote_count * 47} EGP
                            </span>
                          ) : (
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">
                              $ {movie.vote_count}
                            </span>
                          )}

                          <Link
                            to={`/details/${movie.id}`}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Read more
                            <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <button
                        className="absolute top-0 right-0"
                        onClick={() => toggleFavMovies(movie)}
                      >
                        <svg
                          className={`w-8 h-8 ${
                            favMovies.find((mov) => mov.id === movie.id)
                              ? "text-yellow-300 "
                              : "text-white"
                          } `}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
            <nav aria-label="Page navigation example" className="mx-auto">
              <ul className="inline-flex -space-x-px text-base h-10 mx-auto">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={getPrevPage}
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => setPageNum(1)}
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => setPageNum(2)}
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    onClick={() => setPageNum(3)}
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => setPageNum(4)}
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => setPageNum(5)}
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={getNextPage}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
export default Movies;
