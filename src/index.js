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
        const modal = elementFactory('div', 'modal');
        const modalH = elementFactory('h1', 'modalHeader');
        const modalP = elementFactory('p', 'modalText')
    const footer = elementFactory('footer', 'footer');
return{
    header,
    nav,
    btnAbout,
    btnHome,
    btnMenu,
    main,
    footer,
    btnCt,
    modal,
    modalH,
    modalP
}
})()


//Element edits
makeContent.header.textContent = 'Smokehouse BBQ';
makeContent.nav.append(makeContent.btnCt)
makeContent.btnCt.append(makeContent.btnHome, makeContent.btnMenu, makeContent.btnAbout) //Creates buttons in nav element
makeContent.btnHome.textContent = 'HOME';
makeContent.btnMenu.textContent = 'MENU';
makeContent.btnAbout.textContent = 'ABOUT';
makeContent.main.append(makeContent.modal);
makeContent.modal.append(makeContent.modalH, makeContent.modalP);
makeContent.modalH.textContent = 'The highest quality BBQ Meat in all of Otter Tail MN';
makeContent.modalP.textContent = 'Come visit us and enjoy our flavorful and juicy flame grilled Beef, Bison, Chicken and Fish.'
makeContent.footer.textContent = '© 2022 doctype-Melvin'