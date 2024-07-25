export type movie = {
    id: string;
    title: string;
    director: string;
    duration: number;
    release_year: number;
    category: string;
}

export type Favorites = movie[];