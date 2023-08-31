import { useEffect, useState } from "react";

import "./App.css";

import logo from "../assets/devflix.png"
import searchIcon from "../assets/search.svg"
import Moviecard from "../components/movieCard/moviecard";
import Footer from "../components/footer/footer";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"


const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([]);

    const apiKey = "e4d577fa";
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`

    useEffect(() => {
        searchMovies("Batman")
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
            <div className="logo"><img src={logo} alt="logo devflix" /></div>
            <div className="search"> <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyPress} placeholder="Pesquise por filmes" name="" id="" />
                <img onClick={() => searchMovies(searchTerm)} src={searchIcon} alt="icone pesquisa" />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (<Moviecard key={movie.imdbID} movies={movie} />))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Nenhum filme encontrado 💔</h2>
                </div>

            )
            }
            <Footer link={"https://github.com/"}> gustavo-lara</Footer>

        </div>
    )
}
export default App;