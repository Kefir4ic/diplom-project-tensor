/**
 * Создает HTML элемент
 * @param {string} tag - HTML тег
 * @param {string} className - имя класса, которое нужно присвоить элементу 
 * @returns {string} HTML элемент
 */
 export function createHTMLElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}