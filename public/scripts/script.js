import {createHTMLElement, key} from './key_and_function'

// получает со страницы HTML обьект с классом popular__singers
const singers = document.getElementsByClassName('popular__singers')[0];
// получает со страницы HTML обьект с классом popular__tracks
const tracks = document.getElementsByClassName('popular__tracks')[0];

/**
 * Добавляет на стринцу  список популярных исполнителей
 */
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
        window.alert('Error loading popular artists! Check your internet connection!');
    })

/**
 * добавляет на страницу список популярных треков
 */
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
        window.alert('Error loading popular tracks! Check your internet connection!');
    })
