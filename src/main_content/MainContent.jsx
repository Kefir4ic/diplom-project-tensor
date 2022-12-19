import SingersList from '../popular_singers/SingersList';
import PopularTracksList from '../popular_tracks/PopularTracksList';
import './main_content.css';


/**
 * главная страница приложения, содержащая список популярных артистов и треков
 * @returns главную страницу приложения
 */
export default function MainContent() {
    
    return (
        <main className="content">
            <div className="main__content">
                <h1 className="content__title">Music</h1>

                <h2 className="content__subtitle">Hot right now</h2>

                <hr className="main__hr"/>

                <SingersList/>

                <h2 className="content__subtitle">Popular tracks</h2>

                <hr className="main__hr"/>

                <PopularTracksList/>

                <div className="popular__tracks">  </div>
            </div>
        </main>
    )
}