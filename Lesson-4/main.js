// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function p1 (a,b) {
    console.log(a+b)
}
p1 (0,6)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function p2 (a,b,r=1) {
    console.log(a+b+r)
}
p2 (1,1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function p3 (a,b,r=1,h=1) {
    console.log(a+b+r+h)
}
p3 (1,1)

// - створити функцію яка приймає масив та виводить кожен його елемент

let numbers =['qqq','www','eee','rrr']
function mass(numbers) {
    for (const item of numbers) {
        console.log(item)
    }
}
mass(numbers)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function p4 (Paragraph) {
    document.write(
        `
    <div>
        <p>${Paragraph}</p>
    </div>
    `
    );
}
p4('Paragraph');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function p5 (Text) {
    document.write(
        `
    <div>
      <ul>
        <li>${Text}</li>
        <li>${Text}</li>
        <li>${Text}</li>
      </ul>
    </div>
    `
    );
}
p5('Some Text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function p6 (Text,number) {
    document.write(
        `
    <div>
      <ul>
        <li>${Text}</li>
        <li>${Text}</li>
        <li>${Text}</li>
      </ul>
    </div>
    `
    );
    if (Text) {
        console.log('length = ',number)
    }
}
p6('Some Text',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr1 = [333,'string',true,false];
function arr(list){
        console.log(list)
}
arr(arr1)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


let arr2 = [
    {id: 1},
    {name: 'Olya'},
    {age: 20}
];
function obj(mass){
    document.write(`<div>${mass[0].id}</div>`)
    document.write(`<div>${mass[1].name}</div>`)
    document.write(`<div>${mass[2].age}</div>`)
}
 obj(arr2)

// - створити функцію яка повертає найменьше число з масиву
function num(){
    const xxx = [arguments]
    let result = 1+2+3
    for (const  number of xxx){
        result = result = 1
    }
    console.log(result)
}
num(1,2,3)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(number) {
    const aaa = Array.from(arguments);
    let result = 0;
    for (const  number of aaa) {
        result =  result + number;
    }
    console.log('result :',result)
}
sum(1,2,10)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250