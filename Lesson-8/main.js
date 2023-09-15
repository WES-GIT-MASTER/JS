// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// const users = [
//     {id: 1,name:'Ivan',surname:'qqq',email:'qqq@.com',phone:'+38000000011'},
//     {id: 2,name:'Yana',surname:'www',email:'www@.com',phone:'+38000000012'},
//     {id: 3,name:'Sasha',surname:'eee',email:'eee@.com',phone:'+38000000013'},
//     {id: 4,name:'Misha',surname:'rrr',email:'rrr@.com',phone:'+38000000014'},
//     {id: 5,name:'Vasya',surname:'ttt',email:'ttt@.com',phone:'+38000000015'},
//     {id: 6,name:'Nina',surname:'yyy',email:'yyy@.com',phone:'+38000000016'},
//     {id: 7,name:'Masha',surname:'uuu',email:'uuu@.com',phone:'+38000000017'},
//     {id: 8,name:'Olya',surname:'iii',email:'iii@.com',phone:'+38000000018'},
//     {id: 9,name:'Ira',surname:'ooo',email:'ooo@.com',phone:'+38000000019'},
//     {id: 10,name:'Oksana',surname:'ppp',email:'ppp@.com',phone:'+38000000020'},
// ];
const users = [
    new User(1, 'Ivan', 'qqq', 'qqq@.com', '+38000000011'),
    new User(2, 'Yana', 'www', 'www@.com', '+38000000012'),
    new User(3, 'Sasha', 'eee', 'eee@.com', '+38000000013'),
    new User(4, 'Misha', 'rrr', 'rrr@.com', '+38000000014'),
    new User(5, 'Vasya', 'ttt', 'ttt@.com', '+38000000015'),
    new User(6, 'Nina', 'yyy', 'yyy@.com', '+38000000016'),
    new User(7, 'Masha', 'uuu', 'uuu@.com', '+38000000017'),
    new User(8, 'Olya', 'iii', 'iii@.com', '+38000000018'),
    new User(9, 'Ira', 'ooo', 'ooo@.com', '+38000000019'),
    new User(10, 'Oksana', 'ppp', 'ppp@.com', '+38000000020'),
]
console.log(users);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
const filteredUsers = users.filter((user) => !(user.id % 2));
console.log(filteredUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
const sortedUsers = users.sort((a, b) => a.id - b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

function Client(id, name, surname, email, phone, order) {
    User.call(this, id, name, surname, email, phone)
    this.order = order;
}

const Clients = [
    new Client(1, 'Ivan', 'qqq', 'qqq@.com', '+38000000011', [
        'milk', 'bread', 'bear'
    ]),
    new Client(2, 'Yana', 'www', 'www@.com', '+38000000012', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(3, 'Sasha', 'eee', 'eee@.com', '+38000000013', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(4, 'Misha', 'rrr', 'rrr@.com', '+38000000014', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(5, 'Vasya', 'ttt', 'ttt@.com', '+38000000015', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(6, 'Nina', 'yyy', 'yyy@.com', '+38000000016', [
        'bear'
    ]),
    new Client(7, 'Masha', 'uuu', 'uuu@.com', '+38000000017', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(8, 'Olya', 'iii', 'iii@.com', '+38000000018', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(9, 'Ira', 'ooo', 'ooo@.com', '+38000000019', [
        'apple', 'milk', 'bread', 'bear'
    ]),
    new Client(10, 'Oksana', 'ppp', 'ppp@.com', '+38000000020', [
        'apple', 'milk', 'bread', 'bear'
    ]),
];
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
const sortedArr = Clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedArr);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

function Car(model, produser, year, maxSpeed, volume) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        for (const Key in this) {
            if (typeof this[Key] ===
                'function') {
                continue;
            }
            console.log(`${Key.toUpperCase()}`, this[Key])
        }
    }
    this.increaseMaxSpeed = function (addedSpeed) {
        this.maxSpeed = this.maxSpeed + addedSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (addedDriver) {
        this.driver = addedDriver;
    }
}

const Car1 = new Car('xxx', 'Audi', 2015, 200, 4.2)
Car1.drive();
Car1.info();
Car1.increaseMaxSpeed(30);
Car1.info();
Car1.changeYear(2025);
Car1.info();

function Driver(name, age, exp) {
    this.name = name;
    this.age = age;
    this.exp = exp;
}

const newDriver = new Driver('Oleg', 2000, 5)

Car1.addDriver(newDriver);
Car1.info();
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

class Car2 {
    constructor(model, produser, year, maxSpeed, volume) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (const Key in this) {
            if (typeof this[Key] ===
                'function') {
                continue;
            }
            console.log(`${Key.toUpperCase()}`, this[Key])
        }
    }

    increaseMaxSpeed(addedSpeed) {
        this.maxSpeed = this.maxSpeed + addedSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(addedDriver) {
        this.driver = addedDriver;
    }
}
const car2 = new Car2('x5','bmw',2028,500,3.2)
car2.drive();
car2.info();
car2.increaseMaxSpeed(30);
car2.info();
car2.changeYear(2025);
car2.info();

class Driver {
    constructor(name, age, exp) {
        this.name = name;
        this.age = age;
        this.exp = exp;
    }
}

const newDriver = new Driver('Oleg', 2000, 5)

car2.addDriver(newDriver);
car2.info();

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку