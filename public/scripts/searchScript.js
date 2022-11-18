// получает со страницы HTML обьект с классом search__bar
const input = document.getElementsByClassName('search__bar')[0];
// получает со страницы HTML обьект с классом search__button
const button = document.getElementsByClassName('search__button')[0];
// получает со страницы HTML обьект с классом main__track__list
const tracks = document.getElementsByClassName('main__track__list')[0];
// получает со страницы HTML обьект с классом search__title
const search_title = document.getElementsByClassName('search__title')[0];
// ключ для использования API
const key = '97913b5522a98e8336268f039cfd0b1a'

/**
 * выполняет функцию поиска и добавляет на страницу результаты поиска
 */
button.addEventListener('click', (_) => {
    if (input.value === '') {
        window.alert('Вы ничего не ввели в поле для поиска!\nПожалуйста, введите данные!');
    }
    else {
        search_title.innerHTML = `Search results for "${input.value}"`
        fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${input.value}&api_key=${key}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                
                const searched = json.results.trackmatches.track;
                if (searched.length === 0){
                    window.alert("по Вашему запросу ничео не найдено! Попробуйте поменять данные!");
                    tracks.innerHTML = 'Nothing found!';
                }
                else{
                    tracks.innerHTML = '';
                    searched
                    .slice(0, 10)
                    .forEach((track) => {
                        const card = createHTMLElement('div', 'track__card');
                        const container= createHTMLElement('div', 'container');
                        const play_button = createHTMLElement('i', 'fas fa-play');
                        play_button.append('play');
                        container.append(play_button);
                        const image = createHTMLElement('div', 'track__image');
                        const name = createHTMLElement('div', 'track__name');
                        const artist = createHTMLElement('div', 'track__artist');

                        name.append(track.name);
                        artist.append(track.artist);

                        card.append(container);
                        card.append(image);
                        card.append(name);
                        card.append(artist);

                        const hr = createHTMLElement('hr', 'track__hr');

                        tracks.append(card);
                        tracks.append(hr)

                    })
                }
            })
            .catch((e) => {
                window.alert(e);
            })

    }
})


/**
 * Создает HTML элемент
 * @param {string} tag - HTML тег
 * @param {string} className - имя класса, которое нужно присвоить элементу 
 * @returns {string} HTML элемент
 */
function createHTMLElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}