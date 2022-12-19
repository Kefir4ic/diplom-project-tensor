import './popular_singers.css';


/**
 * 
 * @param {object} artist - объект, хранящий информацию об артисте 
 * @returns карточку популярного артиста
 */
export default function Singer({ artist }) {
    return (
        <div className='singer'>
            <div className='singer_card'/>
            <div className='card_title'> { artist.name } </div>
        </div>
    )
}