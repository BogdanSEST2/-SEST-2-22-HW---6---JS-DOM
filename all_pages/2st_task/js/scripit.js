import myGalleryDatabase from "./data.js";



window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const mainContainer = document.querySelector('.main__container');


    changeThemeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        document.body.classList.toggle('light');
        header.classList.toggle('light');
        footer.classList.toggle('light');
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

    
    const renderAllPictures = () => {
        for (let i = 0; i < myGalleryDatabase.length; i++) {
            const mainImgCard = document.createElement('div');
            const mainImgCardContainer = document.createElement('div');
            const img = document.createElement('img');
            const mainCardTitle = document.createElement('h2');

            mainImgCard.classList.add('main__img-card');
            mainImgCardContainer.classList.add('main__img-card-container'),
            mainCardTitle.classList.add('main__card-title');
            
            img.setAttribute('src', myGalleryDatabase[i].img.substring(1));
            img.setAttribute('alt', myGalleryDatabase[i].title);

            mainCardTitle.textContent = myGalleryDatabase[i].title;
            mainImgCardContainer.append(img);
            mainImgCard.append(mainImgCardContainer, mainCardTitle);
            mainContainer.append(mainImgCard);
        }
    }

    mainContainer.addEventListener('click', (e) => {
        if (e.target.closest('.main__img-card')) {
            console.log(1);
        } else {
            console.log(0);   
        }
    });

    

    renderAllPictures();
});