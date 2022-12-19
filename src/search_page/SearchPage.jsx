import './search_page.css';

export default function SearchPage() {
    
    return (
        <main className="content">
            <div className="search__container">
                <h1 className="search__title">Search results for "Your search request"</h1>

                <div className="search__bar__container">
                    <input className="search__bar" placeholder="Search for music..." type="search"/>
                    <button className="search__button"> Search</button>
                </div>

                <div className="main__title">Tracks</div>

                <div className="main__track__list">Nothing found!</div>
            </div>
        </main>
    )
}