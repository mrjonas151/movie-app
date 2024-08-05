import React from "react";
import MovieInformation from "../MovieInformation/MovieInformation";
import MovieInformationMobile from "../MovieInformationMobile/MovieInformationMobile";
import windowSize from "../../hooks/windowSize";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";

const MovieInformationResponsive = (props: any) => {
    const windowWidth = windowSize();
    const breakpoint = 430;
    const { isRed } = useContext(ColorContext);
    
    return (
        <>
            {windowWidth > breakpoint ? <MovieInformation movie={props.movie} onDelete={props.onDelete} onUpdate={props.onUpdate} isRed={props.isRed}/> : <MovieInformationMobile movie={props.movie} onDelete={props.onDelete} onUpdate={props.onUpdate} isRed={props.isRed}/>}
        </>
    );
}

export default MovieInformationResponsive;
