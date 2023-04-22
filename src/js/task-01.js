// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesList = document.querySelector('#categories'); // посилання на вузол список у дереві

const categoriesItems = categoriesList.querySelectorAll('.item'); //створить псевдомасив лішек цього списку

console.log(`Number of categories: ${categoriesItems.length}`); // порахує довжину псевдомасиву
console.log('\n');

// переберемо масив методом forEach()

categoriesItems.forEach(item => {

    //у кожній лішці будемо знаходити вміст елементу h2 і привласнювати її змінній
    
    const categoryName = item.querySelector('h2').textContent; 

    // для підрахунку лішек всередині кожного item, виведемо їх псевдомасив 
    
    const arrItems = item.querySelectorAll('li');

    console.log(`Category: ${categoryName}`);
    
    console.log(`elements: ${arrItems.length}`);

    console.log('\n');
  
});

