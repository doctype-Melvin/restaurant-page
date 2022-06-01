import './style.css'

//Creates the CSS grid
const pageGrid = (() => {
    let content = document.createElement('div');
    content.setAttribute('id', 'content');
    document.body.append(content);
    return content
})()

//Function to create other html elements
const elementFactory = (html, css) => {
    let element = document.createElement(html);
    element.classList.add(css);
    pageGrid.append(element)
    return element
}

//All basic html elements
const header = elementFactory('header', 'header');
const nav = elementFactory('nav', 'nav');
const main = elementFactory('div', 'main');
const footer = elementFactory('footer', 'footer');

//Text contents
header.textContent = 'Smokehouse BBQ';
footer.textContent = '© 2022 doctype-Melvin'