import './popular_tracks.css';


/**
 * 
 * @param {object} track - объект, хранящий информацию об артисте
 * @returns карточку популярного трека
 */
export default function PopularTrack({ track }) {
    return (
        <div className='track'>
            <div className='track_card'/>
            <div className='track_description'>
                <div className='card_title'> { track.name } </div>
                <div className='card_subtitle'> { track.artist.name } </div>
            </div>
        </div>
    )
}
