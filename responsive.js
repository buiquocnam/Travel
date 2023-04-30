const menuBar = $('.menu-bar')
const menu = $('.menu')
const menuItems = $$('.menu-item')

menuBar.onclick = () => {
      menu.style.display = "block"
      menu.classList.add('active')
      menuBar.style.display = "none"
}

menuItems.forEach(menuItem => {
      menuItem.onclick = () => {
            menu.classList.remove('active')
      }
});

