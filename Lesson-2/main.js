// ************************* масиви та обєкти (1-4) ************************* //
//
//  (1) - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль //

let arr = [
    [1,2,3,4,5,'go','wait','stop',true,false]
]
console.log(arr[0][0]);
console.log(arr[0][1]);
console.log(arr[0][2]);
console.log(arr[0][3]);
console.log(arr[0][4]);
console.log(arr[0][5]);
console.log(arr[0][6]);
console.log(arr[0][7]);
console.log(arr[0][8]);
console.log(arr[0][9]);


//   (2) - Створити 3 об'єкти які описують книги.
//   Поля об'єкту : title ,pageCount, genre. //

let TheHobbit = {
    title: 'The Hobbit',
    pageCount: 368,
    genre: 'fantasy',
}
let TheAtlasSix = {
    title: 'The Atlas Six',
    pageCount: 384,
    genre: 'historical',
}
let Encyclopaedia = {
    title: 'Encyclopaedia of Faeries',
    pageCount: 336,
    genre: 'scientific',
}
console.log(TheHobbit)
console.log(TheAtlasSix)
console.log(Encyclopaedia)


//   (3) - Створити 3 об'єкти які описують книги.
//   Поля об'єкту : title ,pageCount, genre, authors.
//   Поле "автори" - являється  масивом. Кожен автор має поля name та age. //

let bookOne = {
    title: 'bookOne',
    pageCount: 100,
    genre: 'History',
    authors: [[name = 'Vasya', age = 30],[name ='Ira', age = 25],[name = 'Diana', age = 29]]
}
console.log(bookOne)
let bookTwo = {
    title: 'bookTwo',
    pageCount: 200,
    genre: 'fantasy',
    authors: [[name = 'Sasha', age = 36],[name ='Dima', age = 41],[name = 'Oksana', age = 33]]
}
console.log(bookTwo)
let bookThree = {
    title: 'bookThree',
    pageCount: 300,
    genre: 'comic',
    authors: [[name = 'Olya', age = 40],[name ='Pasha', age = 33],[name = 'Svetlana', age = 27]]
}
console.log(bookThree)


//   (4) - Створити масив з 10 об'єктами які описують сутніть "користувач".
//   Поля: name, username,password.
//   Вивести в консоль пароль кожного користувач


let Users = [
    [name = 'user 1',username = '@1',password = 1],
    [name = 'user 2',username = '@2',password = 2],
    [name = 'user 3',username = '@3',password = 3],
    [name = 'user 4',username = '@4',password = 4],
    [name = 'user 5',username = '@5',password = 5],
    [name = 'user 6',username = '@6',password = 6],
    [name = 'user 7',username = '@7',password = 7],
    [name = 'user 8',username = '@8',password = 8],
    [name = 'user 9',username = '@9',password = 9],
    [name = 'user 10',username = '@10',password = 10]
]
console.log(Users[0][2]);
console.log(Users[1][2]);
console.log(Users[2][2]);
console.log(Users[3][2]);
console.log(Users[4][2]);
console.log(Users[5][2]);
console.log(Users[6][2]);
console.log(Users[7][2]);
console.log(Users[8][2]);
console.log(Users[9][2]);

// ************************* логічні розгалуження (1-7) ************************* //

//  (1) - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//  Перевірте  скрипт при a, що дорівнює 1, 0, -3 //

let e = 10
if (e !== 0) {
    console.log(true)}
else (console.log(false))
let a = '1, 0, -3'
console.log(typeof a)


//  (2) - Дано змінну time яка рівна числу від 0 до 59.
//  Потрібно написати код, який перевірить, до якої четверті години попадає число
//  (в першу, другу, третю або четверту частину години). //

let time = 59>0
if (time <14 ) {console.log(1)}
else console.log(false)
if (time <29 ) {console.log(2)}
else console.log(false)
if (time <44 ) {console.log(3)}
else console.log(false)
if (time <59  ) {console.log(4)}
else console.log(false)

//  (3) - У змінній day дано якесь число від 1 до 31.
//  Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю). //

let day = 31>1
if (day <10){console.log(1)}
else console.log(false)
if (day <20){console.log(2)}
else console.log(false)
if (day <31){console.log(3)}
else console.log(false)


//  (4) - Скласти розклад на тиждень за допомогою switch.
//  Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//  (можна замість плану на день, назву дня англійською). //

let week = prompt('What day of the week?')
switch (week) {
    case '1':
        console.log('Monday');
        break
    case '2':
        console.log('Tuesday');
        break
    case '3':
        console.log('Wednesday');
        break
    case '4':
        console.log('Thursday');
        break
    case '5':
        console.log('Friday');
        break
    case '6':
        console.log('Saturday');
        break
    case '7':
        console.log('Sunday');
        break
}


//  (5) - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа. //

let user = [100,200]
console.log(user)
if (user){console.log(200);
}
if (user && 100) {
    console.log(false)
}


//  (6) - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
//  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false) //

let x = '' || "default"
if (!!x){console.log(x)}


//  (7) - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//  За допомоги іф перевірити кожен його елемент на тривалість навчання.
//  У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray[0])
if (coursesAndDurationArray[0].monthDuration <6){console.log(false)}
else (console.log("Супер"));
console.log(coursesAndDurationArray[1])
if (coursesAndDurationArray[1].monthDuration <6){console.log(false)}
else (console.log("Супер"));
console.log(coursesAndDurationArray[2])
if (coursesAndDurationArray[2].monthDuration <6){console.log(false)}
else (console.log("Супер"));
console.log(coursesAndDurationArray[3])
if (coursesAndDurationArray[3].monthDuration <6){console.log(false)}
else (console.log("Супер"));
console.log(coursesAndDurationArray[4])
if (coursesAndDurationArray[4].monthDuration <6){console.log(false)}
else (console.log("Супер"));
console.log(coursesAndDurationArray[5])
if (coursesAndDurationArray[5].monthDuration <6){console.log(false)}
else (console.log("Супер"));









