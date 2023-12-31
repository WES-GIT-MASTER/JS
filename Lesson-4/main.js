// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function p (a,b) {
    return a * b;
}

console.log(p(2,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function p2 (r) {
    return 3.14 * r * r;
}

console.log(p2(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function p3 (h,r) {
    return (2 * 3.14 * r * r) + (2 * 3.14 * r * h);
}
console.log(p3(15,3))


// - створити функцію яка приймає масив та виводить кожен його елемент

function mass (arr){
    for (const item of arr) {
        console.log(item)
    }
}
mass(['vasya',31,false]) ;

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function write (text){
    document.write(`<p>${text}</p>`);
}
write('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function writer2 (text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
writer2('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function writer3 (text,index) {
    document.write(`<ul>`);
    for (let i = 0; i < index; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
writer3('some text',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function writer4  (arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
writer4([33,'text',true,false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function userObjects(arr){
    for (const user of arr) {
        document.write(`
        <div>
        <p>name: ${user.name}</p>
        <p>age: ${user.age}</p>
        <p>status: ${user.status}</p>
        </div>
        `)
    }
}
userObjects (users)

// - створити функцію яка повертає найменьше число з масиву

function numbers(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log('Min Number:',numbers([1,5,-3,-56,100,200]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function numbers2  (arr)  {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}
console.log('Sum of Numbers:',numbers2([1,5,-3,-56,100,200]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap1 (arr,index1,index2) {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;
    return arr;
}
console.log(swap1([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sum,currencyes,result){
    for (const curr of currencyes) {
        if (curr.currency === result){
            return sum / curr.value
        }
    }
}
const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(result)
