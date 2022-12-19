import { useState, useEffect } from "react";
import PopularTrack from './PopularTrack';
import { key } from '../api_key'; 
import './popular_tracks.css';

export default function PopularTracksList() {
    const [poularTracks, setPopularTracks] = useState([]);

    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`)
        .then((response) => response.json())
        .then((json) => {
            setPopularTracks(
                json.tracks.track.slice(0, 18)
            );
        })
        .catch(() => {
            window.alert('Error loading popular tracks! Check your internet connection!');
        })
    });
    return (
        <div className='popular__tracks'>
            { 
                poularTracks.map((track) => {
                return <PopularTrack key={ track.name } track={ track }/>
            })}
        </div>
    );
}