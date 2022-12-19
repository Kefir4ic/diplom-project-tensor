import { useState, useEffect } from "react";
import SearchedTrack from './SearchedTrack';
import { key } from '../api_key'; 
import './search_page.css';

export default function SearchPage() {
    const [searchedTracks, setSearchedTracks] = useState([]);
    const [searchResult, setSearchResult] = useState("");
    const [inputValue, setInputValue] = useState("");

    if (searchResult === "") {
        setSearchResult("Naruto");
    }

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchResult}&api_key=${key}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                const searched = json.results.trackmatches.track;
                setSearchedTracks(
                    searched.slice(0, 10)
                )})
                .catch(() => {
                    window.alert("Search error! Change data for search!");
                })
            }, [searchResult]
    );

    return (
        <main className="content">
            <div className="search__container">
                <h1 className="search__title">Search results for "{searchResult}"</h1>

                <div className="search__bar__container">
                    <input className="search__bar" placeholder="Search for music..." type="search" 
                        onChange={ (event) => setInputValue(event.target.value) }/>     
                    <button className="search__button" onClick={() => setSearchResult(inputValue)}>
                        Search
                    </button>

                </div>

                <div className="main__title">Tracks</div>

                <div className="main__track__list">
                { 
                    searchedTracks.map((track) => {
                        return <SearchedTrack key={ track.name-track.artist} track={track}/>
                    })
                }
                </div>
            </div>
        </main>
    )
}