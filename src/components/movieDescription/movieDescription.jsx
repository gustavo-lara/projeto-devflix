import { useEffect, useState } from "react";
import styles from "./movieDescription.module.css"
import devFlix from "/favicon.png"

const MovieDesc = ({ movies, click }) => {
    const apiKey = "e4d577fa";
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movies.imdbID}`;
    const [movieDesc, setMovieDesc] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMovieDesc(data))
            .catch((error) => console.error("Erro: ", error))
    }, [apiUrl]);

    const movie = movieDesc;
    console.log(movie)
    return (
        <div className={styles.modalBackdrop} onClick={click}>
            <div className={styles.movieModal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.movieInfo}>
                    <img src={movies.Poster} alt={movie.Title} />
                    <button className={styles.btn} onClick={click}>X</button>
                    <div className={styles.movieType}>
                        <div>
                            <img src={devFlix} alt="Logo DEVFLIX" />{movie.Type}
                            <h2>{movie.Title}</h2>
                            <a href={`https://google.com/search?q=${encodeURIComponent(movie.Title)}`} target="_blank">▶</a>
                        </div>
                    </div>
                </div>
                <div className={styles.contInfo}>
                    <div className={styles.contFlex}>
                        Avaliação: {movie.imdbRating} | {movie.Year}
                    </div>

                </div>
                <div className={styles.desc}>
                    <p>Sinopse: {movie.Plot}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDesc;