import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

import { useDispatch } from "react-redux";

const useMovieTrailer = (movieid) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieid + "/videos",
      API_OPTIONS
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
