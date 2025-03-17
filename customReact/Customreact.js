function customRender(reactElement,container)
{
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttributeNS('target',reactElement.props)
    container.appendChild(domElement)
    */
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children') continue;
        domElement.setAttribute(prop ,reactElement.props[prop])
    }
    container.appendChild(domElement
    )
}//aur yeh custom react niche wale code ko render karwa rahahai 
const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com/',
        target: '_blank'
        },
        children: 'click me to visit google'    
}//yeh saara custom react hai jo main khud se likh araha hoo
// {jisko bhi chahiye woh yaare jese likhe}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)