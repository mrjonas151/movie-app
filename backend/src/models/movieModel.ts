import { IsNumber, IsString, IsNotEmpty } from "class-validator";
import { Favorites } from "../utils/types/favorites";
import { User } from "./userModel";

class Movie{
    @IsNumber({}, { message: "Id must be a number" })
    @IsNotEmpty({ message: "Id must be not empty" })
    id: number;

    @IsString({ message: "Title must be String" })
    @IsNotEmpty({ message: "Title must be not null" })
    title: string;

    @IsString({ message: "Director must be String"})
    @IsNotEmpty({ message: "Director must be not null" })
    director: string;

    @IsNumber({}, { message: "Duration must be a number" })
    @IsNotEmpty({ message: "Duration must be not null" })
    duration: number;

    @IsNumber({}, { message: "Year must be a number" })
    @IsNotEmpty({ message: "Year must be not null" })
    release_year: number;

    @IsString({ message: "Category must be String" })
    @IsNotEmpty({ message: "Category must be not null" })
    category: string;

    @IsString({ message: "UserId must be String" })
    @IsNotEmpty({ message: "UserId must be not null" })
    userId: string;

    user?: User;

    dateOfInclude: string;

    updatedAt: string;

    constructor(payload: Movie){
        this.id = payload.id;
        this.title = payload.title;
        this.director = payload.director;
        this.duration = payload.duration;
        this.release_year = payload.release_year;
        this.category = payload.category;
        this.userId = payload.userId;
        this.user = payload.user;
        this.dateOfInclude = payload.dateOfInclude;
        this.updatedAt = payload.updatedAt;
    }
}

class MovieRegister{
    @IsString({ message: "Title must be String" })
    @IsNotEmpty({ message: "Title must be not null" })
    title: string;

    @IsString({ message: "Director must be String"})
    @IsNotEmpty({ message: "Director must be not null" })
    director: string;

    @IsNumber({}, { message: "Duration must be a number" })
    @IsNotEmpty({ message: "Duration must be not null" })
    duration: number;

    @IsNumber({}, { message: "Year must be a number" })
    @IsNotEmpty({ message: "Year must be not null" })
    release_year: number;

    @IsString({ message: "Category must be String" })
    @IsNotEmpty({ message: "Category must be not null" })
    category: string;

    constructor(payload: MovieRegister){
        this.title = payload.title;
        this.director = payload.director;
        this.duration = payload.duration;
        this.release_year = payload.release_year;
        this.category = payload.category;
    }
}

class MovieUpdate{
    @IsString({ message: "Title must be String" })
    title: string;

    @IsString({ message: "Director must be String"})
    director: string;

    @IsNumber({}, { message: "Duration must be a number" })
    duration: number;

    @IsNumber({}, { message: "Year must be a number" })
    release_year: number;

    @IsString({ message: "Category must be String" })
    category: string;

    constructor(payload: MovieUpdate){
        this.title = payload.title;
        this.director = payload.director;
        this.duration = payload.duration;
        this.release_year = payload.release_year;
        this.category = payload.category;
    }
}

export { Movie, MovieRegister, MovieUpdate };