import React from "react";
import MyMovies from "../MyMovies/MyMovies";
import MyMoviesMobile from "../MyMoviesMobile/MyMoviesMobile";
import useWindowSize from "../../hooks/windowSize";

const MyMoviesResponsive = () => {
    const { width } = useWindowSize();
    const breakpoint = 455;

    console.log('Window width:', width);

    return width >= breakpoint ? <MyMovies /> : <MyMoviesMobile />;
};

export default MyMoviesResponsive;
