// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let arr = 'hello world' + 'lorem ipsum' + 'javascript is cool';
console.log(arr.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
let arr2 = 'hello world' + 'lorem ipsum' + 'javascript is cool';
console.log(arr2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
let arr3 = 'HELLO WORLD' + 'LOREM IPSUM' + 'JAVASCRIPT IS COOL';
console.log(arr3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
let str = ' dirty string   '
console.log((str.substring(1, 13)));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let str2 = 'Ревуть воли як ясла повні';
let split = str2.split(' ');
console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let map = numbers.map(value => value.toString());
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    const sortNums = (nums,direction) => {
        switch (direction) {
            case 'ascending':
                return nums.sort((a,b) => a-b)
            case 'descending':
                return nums.sort((a,b) => b-a)
        }
    }
console.log(sortNums(nums,'ascending')) // [3,11,21]
console.log(sortNums(nums,'descending')) // [21,11,3]


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

const sortedArr = coursesAndDurationArray.sort ((a,b) => b.monthDuration - a.monthDuration);
console.log(sortedArr)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filteredArr = coursesAndDurationArray.filter(({monthDuration})=> monthDuration > 5);
console.log(filteredArr)

// -- за допомоги map перетворити кожен елемент на наступний тип {,title,monthDuration}

const mappedArr = coursesAndDurationArray.map((value,index)=>{
    return {
        ...value,
        id:index +1
    }
})
console.log(mappedArr);


//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
//