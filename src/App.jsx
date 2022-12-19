import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main_content/MainContent';


/**
 * Основная страница приложения
 * @returns основную страницу
 */
function App() {
  return (
    <>
        <Header/>
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
