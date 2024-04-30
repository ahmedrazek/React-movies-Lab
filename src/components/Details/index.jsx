import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState([{}]);
  const getMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a10829400bf3f46b60a2157a82ac46ea`
    );
    setMovie(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {movie.overview}
          </p>
        </div>
      </a>
    </>
  );
}
export default Details;
