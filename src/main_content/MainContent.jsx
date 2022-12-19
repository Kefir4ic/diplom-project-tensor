import SingersList from '../popular_singers/SingersList';
import PopularTracksList from '../popular_tracks/PopularTracksList';

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