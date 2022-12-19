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

// ключ для использования API
const key = '97913b5522a98e8336268f039cfd0b1a';

 export {createHTMLElement, key};