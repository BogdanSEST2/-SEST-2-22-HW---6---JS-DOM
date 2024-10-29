window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const mainList = document.querySelector('.main__list');

    changeThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('light');
        document.documentElement.classList.toggle('light');
        header.classList.toggle('light');
        footer.classList.toggle('light');
        mainList.classList.toggle('light');
    }); 
});