import { useState, useEffect } from "react";
import Singer from './Singer';
import { key } from '../api_key'; 
import './popular_singers.css';


/**
 * добавляет на страницу список популярных исполнителей
 * @returns список популярных исполнителей
 */
export default function SingersList() {
    const [singers, setSingers] = useState([]);
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                setSingers(
                    json.artists.artist.slice(0, 12)
                );
            })
            .catch(() => {
                window.alert('Error loading popular artists! Check your internet connection!');
            })
    }, []);
    return (
        <div className='popular__singers'>
            { singers.map((artist) => {
                return <Singer key={ artist.url } artist={artist}/>
            })}
        </div>
    )
}