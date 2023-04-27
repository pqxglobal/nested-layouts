import { use } from 'react';

async function getMovies() {
    let res = await fetch('http://localhost:3001/movies');

    return res.json();
}

export default function Page() {
    let movies = use(getMovies());

    console.log(movies);

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    );
}
