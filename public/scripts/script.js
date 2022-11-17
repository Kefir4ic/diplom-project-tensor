// import { createHTMLElement } from "./create_html";

const singers = document.getElementsByClassName('popular__singers')[0];
const tracks = document.getElementsByClassName('popular__tracks')[0];
const key = '97913b5522a98e8336268f039cfd0b1a'

fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${key}&format=json`)
    .then((response) => response.json())
    .then((json) => {
        json.artists.artist
            .slice(0, 12)
            .forEach((artist) => {
            const singer = createHTMLElement('div', 'singer');
            const card = createHTMLElement('div', 'singer_card');
            const title = createHTMLElement('div', 'card_title');
            title.append(artist.name);

            singer.append(card);
            singer.append(title);

            singers.append(singer);
        })
    })
    .catch(() => {
        window.alert('Ошибка загрузк популярных исполнителей! Проверьте подключение к интернету!');
    })


fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`)
    .then((response) => response.json())
    .then((json) => {
        json.tracks.track
            .slice(0, 18)
            .forEach((track) => {
                const track_div = createHTMLElement('div', 'track');
                const track_card = createHTMLElement('div', 'track_card');
                const description = createHTMLElement('div', 'track_description');
                const title = createHTMLElement('div', 'card_title');
                const subtitle = createHTMLElement('div', 'card_subtitle');
                title.append(track.name);
                subtitle.append(track.artist.name);

                description.append(title);
                description.append(subtitle);
                track_div.append(track_card);
                track_div.append(description);

                tracks.append(track_div);
        })
    })
    .catch(() => {
        window.alert('Ошибка загрузки популярных треков! Проверьте подключение к интернету!');
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