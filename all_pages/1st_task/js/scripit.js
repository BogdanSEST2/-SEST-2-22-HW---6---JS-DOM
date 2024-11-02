window.addEventListener('DOMContentLoaded', () => {
    const changeThemeButton = document.querySelector('.header__change-color-theme-button');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const selectBlock = document.querySelector('.main__form > select');
    const form = document.querySelector('.main__form');
    const mainFormTitle = document.querySelector('.main__form-title');
    const resetButton = document.querySelector('.main__form-reset');
    const firstInput = document.querySelectorAll('.main__form input')[0];
    const secondInput = document.querySelectorAll('.main__form input')[1];
    
    let firstValue = '';
    let secondValue = '';

    changeThemeButton?.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        [document.body, header, footer].forEach(el => el.classList.toggle('light'));
    });


    headerBurger?.addEventListener('click', () => {
        headerMenu.classList.toggle('__active');
        headerBurger.classList.toggle('__active');
        document.body.style.overflow = headerBurger.classList.contains('__active') ? 'hidden' : '';
    });


    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && headerBurger.classList.contains('__active')) {
            headerBurger.classList.remove('__active');
            headerMenu.classList.remove('__active');
            document.body.style.overflow = '';
        }
    });


    firstInput?.addEventListener('input', () => firstValue = firstInput.value);
    secondInput?.addEventListener('input', () => secondValue = secondInput.value);


    form?.addEventListener('submit', (event) => {
        event.preventDefault(); 
        let result = 'Заполните форму';
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        switch (selectBlock?.value[0]) {
            case '+':
                result = `${firstValue} + ${secondValue} = ${num1 + num2}`;
                break;
            case '-':
                result = `${firstValue} - ${secondValue} = ${num1 - num2}`;
                break;
            case '*':
                result = `${firstValue} * ${secondValue} = ${num1 * num2 % 1 === 0 ? num1 * num2 : (num1 * num2).toFixed(3)}`;
                break;
            case '/':
                result = num2 !== 0 ? 
                    `${firstValue} / ${secondValue} = ${num1 / num2 % 1 === 0 ? num1 / num2 : (num1 / num2).toFixed(3)}` :
                    'Деление на 0 невозможно';
                break;
            default:
                break;
        }
        
        mainFormTitle.textContent = result;
    });

    resetButton?.addEventListener('click', () => {
        mainFormTitle.textContent = 'Заполните форму';
        form.reset();
        firstValue = '';
        secondValue = '';
    });
});
