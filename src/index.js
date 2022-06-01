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
const makeContent = (()=>{
    const header = elementFactory('header', 'header');
    const nav = elementFactory('nav', 'nav');
    const btnCt = elementFactory('div', 'btnCt')
        const btnHome = elementFactory('button', 'Btn');
        const btnMenu = elementFactory('button', 'Btn');
        const btnAbout = elementFactory('button', 'Btn');
    const main = elementFactory('div', 'main');
    const footer = elementFactory('footer', 'footer');
return{
    header,
    nav,
    btnAbout,
    btnHome,
    btnMenu,
    main,
    footer,
    btnCt
}
})()


//Element edits
makeContent.nav.append(makeContent.btnCt)
makeContent.btnCt.append(makeContent.btnHome, makeContent.btnMenu, makeContent.btnAbout) //Creates buttons in nav element
makeContent.btnHome.textContent = 'HOME';
makeContent.btnMenu.textContent = 'MENU';
makeContent.btnAbout.textContent = 'ABOUT'
makeContent.header.textContent = 'Smokehouse BBQ';
makeContent.footer.textContent = '© 2022 doctype-Melvin'