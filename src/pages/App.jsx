import { useEffect, useState } from "react";

import "./App.css";

import Moviecard from "../components/movieCard/moviecard";
import Footer from "../components/footer/footer";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"


const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([]);

    const apiKey = "e4d577fa";
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`

    useEffect(() => {
        searchMovies("Dragon Ball")
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json();

        console.log(data);

        setMovies(data.Search);
    }

    const handleKeyPress = (e) => {
        // if (e === "Enter") {
        //     searchMovies(searchTerm)
        // } 
        e.key === "Enter" && searchMovies(searchTerm);
    }

    return (
        <div id="app">
            <div className="Barcima"></div>
            <div className="NavEsquerda">
                <p className="Titl">DEVFLIX</p>
                <div className="search"> <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} placeholder="Search " name="" id="" />
                    <div className="classFilm">
                        <p onClick={""}>Popular</p>
                        <p onClick={""}>Ação</p>
                        <p onClick={""}>Terror</p>
                        <p onClick={""}>Animação</p>
                        <p onClick={""}>Suspense</p>
                        <p onClick={""}>Musical</p>
                        <p onClick={""}>Comédia</p>
                        <p onClick={""}>Aventura</p>
                    </div>
                </div>
            </div>
            {movies?.length > 0 ? (

                <div className="container">
                    <section className="sect">
                        {movies.map((movie) => (<Moviecard key={movie.imdbID} movies={movie} />))}
                    </section>
                </div>

            ) : (
                <div className="empty">
                    <h2>Nenhum filme encontrado 💔</h2>
                </div>

            )
            }
            <div className="rodape">

            </div>

        </div>
    )
}
export default App;