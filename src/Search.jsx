import Header from './header/Header';
import Footer from './footer/Footer';
import SearchPage from './search_page/SearchPage';


/**
 * Страница приложения с поиском
 * @returns страницу с поиском
 */
function Search() {
  return (
    <>
        <Header/>
        <SearchPage/>
        <Footer/>
    </>
  );
}

export default Search;