window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');

    const nameInput = document.querySelector('.main-form input[placeholder="Имя"]');
    const emailInput = document.querySelector('.main-form input[placeholder="Email"]');
    const passwordInput = document.querySelector('.main-form input[placeholder="Password"]');
    const mainForm = document.querySelector('.main-form'); 

    const nameLiItem = document.querySelectorAll('.main__form-list li')[0];
    const emailLiItem = document.querySelectorAll('.main__form-list li')[1];
    const passwordLiItem = document.querySelectorAll('.main__form-list li')[2];
    
    const popupMessageSuccess = document.querySelector('.main__popup-message-success');
    const mainPopupClose = document.querySelector('.main__popup-close');
    
    

    changeThemeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        document.body.classList.toggle('light');
        header.classList.toggle('light');
        footer.classList.toggle('light');
    });

    headerBurger.addEventListener('click', () => {
        headerMenu.classList.toggle('__active');
        headerBurger.classList.toggle('__active');
        document.body.style.overflow = headerMenu.classList.contains('__active') ? 'hidden' : '';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && headerMenu.classList.contains('__active')) {
            headerBurger.classList.remove('__active');
            headerMenu.classList.remove('__active');
            document.body.style.overflow = '';
        }
    });

    const validateField = (input, liItem, condition) => {
        if (condition) {
            liItem.classList.add('__correct');
            liItem.classList.remove('__wrong');
        } else {
            liItem.classList.add('__wrong');
            liItem.classList.remove('__correct');
        }
    };

    const allLiItemsContainsRequiredClass = (requiredClass) => {
        return nameLiItem.classList.contains(requiredClass) &&
            emailLiItem.classList.contains(requiredClass) &&
            passwordLiItem.classList.contains(requiredClass)
    }

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        validateField(nameInput, nameLiItem, nameInput.value.trim() !== '');
        validateField(emailInput, emailLiItem, emailInput.value.includes('@') && emailInput.value.includes('.'));
        validateField(passwordInput, passwordLiItem, passwordInput.value.length >= 8);

        if (
            allLiItemsContainsRequiredClass('__correct')
        ) {
            popupMessageSuccess.classList.add('__active');
            mainForm.reset();

            mainPopupClose.addEventListener('click', () => {
                popupMessageSuccess.classList.remove('__active');
                [nameLiItem, emailLiItem, passwordLiItem].forEach(item => item.classList.remove('__correct', '__wrong'));
            });
        }
    });
});