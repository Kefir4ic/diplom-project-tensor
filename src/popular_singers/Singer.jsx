import './popular_singers.css';

export default function Singer({ artist }) {
    return (
        <div className='singer'>
            <div className='singer_card'/>
            <div className='card_title'> { artist.name } </div>
        </div>
    )
}