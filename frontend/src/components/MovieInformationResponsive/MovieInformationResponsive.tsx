import React from "react";
import MovieInformation from "../MovieInformation/MovieInformation";
import MovieInformationMobile from "../MovieInformationMobile/MovieInformationMobile";
import windowSize from "../../hooks/windowSize";

const MovieInformationResponsive = (props: any) => {
    const windowWidth = windowSize();
    const breakpoint = 430;

    return (
        <>
            {windowWidth > breakpoint ? <MovieInformation movie={props.movie} onDelete={props.onDelete} onUpdate={props.onUpdate} /> : <MovieInformationMobile movie={props.movie} onDelete={props.onDelete} onUpdate={props.onUpdate} />}
        </>
    );
}

export default MovieInformationResponsive;
