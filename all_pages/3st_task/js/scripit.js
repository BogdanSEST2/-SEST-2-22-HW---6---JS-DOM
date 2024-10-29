const mainTitle = document.querySelector('h1');
const fontSizeProperty = window.getComputedStyle(mainTitle, null).getPropertyValue('font-size');

console.log(Number(fontSizeProperty.substring(0, fontSizeProperty.length - 2)));
console.log(fontSizeProperty);
console.log(mainTitle);
console.log(mainTitle.textContent);
console.log(window.getComputedStyle(mainTitle, null));


