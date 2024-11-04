import myGalleryDatabase from "./data.js";



window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const mainContainer = document.querySelector('.main__container');


    changeThemeButton?.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        document.body.classList.toggle('light');
        header.classList.toggle('light');
        footer.classList.toggle('light');
    });

    headerBurger?.addEventListener('click', () => {
        headerMenu.classList.toggle('__active');
        headerBurger.classList.toggle('__active');
        document.body.style.cssText = 'overflow: hidden;';
        document.body.style.overflow = headerBurger.classList.contains('__active') ? 'hidden' : '';
    });

    window?.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            if (headerBurger.classList.contains('__active') && headerMenu.classList.contains('__active')) {
                headerBurger.classList.remove('__active');
                headerMenu.classList.remove('__active');
                document.body.style.overflow = '';
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
        const popup = document.querySelector('.popup__picture-menu');
        const popupImg = document.querySelector('.popup__picture-img-block img');
        const popupCloseButton = document.querySelector('.popup__picture-img-block button');


        if (e.target.closest('.main__img-card')) {
            const currentImagePath = e.target.parentNode.firstElementChild.firstElementChild.getAttribute('src');
            const currentAltTextToImg = e.target.parentNode.firstElementChild.firstElementChild.getAttribute('alt');
            
            popupImg.setAttribute('src', currentImagePath);
            popupImg.setAttribute('alt', currentAltTextToImg);
            document.body.style.cssText = 'overflow: hidden;';
            
            setTimeout(() => {
                popup.classList.add('__active');
            }, 100);
        } else {
            console.log(0);   
        }

        popupCloseButton.addEventListener('click', () => {
            popup.classList.remove('__active');
            document.body.style.cssText = 'overflow: auto;';
        });
    });

    

    renderAllPictures();
});