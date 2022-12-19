import './searched_track.css';


/**
 * 
 * @param {object} track - объект, хранящий информацию об искомом треке
 * @returns карточку искомого трека
 */
export default function SearchedTrack({ track }) {
    return (
        <div>
            <div className='track__card'>
                <div className='container'>
                    <i className='fas fa-play'>Play</i>
                </div>
                <div className='track__image'/>
                <div className='track__name'>{ track.name }</div>
                <div className='track__artist'>{ track.artist }</div>
            </div>
            <hr className='track__hr'/>
        </div>
    )
}