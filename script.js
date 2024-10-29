window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const mainList = document.querySelector('.main__list');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');


    changeThemeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        document.body.classList.toggle('light');
        header.classList.toggle('light');
        footer.classList.toggle('light');
        mainList.classList.toggle('light');
    });

    headerBurger.addEventListener('click', () => {
        headerMenu.classList.toggle('__active');
        headerBurger.classList.toggle('__active');
        document.body.style.cssText = 'overflow: hidden;';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (headerBurger.classList.contains('__active') && headerMenu.classList.contains('__active')) {
                headerBurger.classList.remove('__active');
                headerMenu.classList.remove('__active');
            }
        }
    });
});