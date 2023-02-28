// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`)
//     }
// }
// let user1 = new User('vasya', 44, false);
// console.log(user1)
// user1.greeting('Hello')
// console.log(user1.age)  // Выведет возраст user1



// function Dev(name, age, skills) {   // Это конструктор Dev, который создает шаблон с именем, возрастом
//     this.name = name;               // и скилами. Доп функция skill будет работать если нужно добавить
//     this.age = age;                 // какие то новые скилы.
//     this.skills = skills;
//     this.addSkill = function (skill) {
//         this.skills.push(skill);
//     }
// }
//
// Dev.prototype.addSkill = function (skill) { // Функция prototype нужна если нет доступа до конструктора
//     this.skills.push(skill)
// }
//
// let dev = new Dev('kokos', 123, 'jawa') // Добавили новый обьект dev с помощью new и Конструктора
// console.log(dev)



// Array.prototype.print = function () {    // Array это конструктор. Используем функцию prototype
//     for (const item of this) {          // что бы добавить новю переменную xxx через
//         console.log(item);              // функцию print
//     }                                   // Мы добавим только GGGGGG
//     console.log('GGGGG')
// }
// let xxx = new Array(11,22,33);
// xxx.print()


// function Human(name) {
//     this.name = name;
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`)
//     }
// }
// let human1 = new Human('vasya')
// let friend = {
//     name: 'kokos',
//     age: 123
// }
// human1.greeting.call(friend, 'Hi', 'By') // У friend нет функции greeting , а нам нужно ее
//                         // ее вызвать. Для этого используем call для human1. В кавычках у call
//                         // пишем кому переназначить функцию greeting. Т.е. для friend. Это подмена
//
// human1.greeting.apply(friend, ['Hello', 'By']) // Функция apply делает то же что и call, только заполняется массивом


// let greetingCopy = human1.greeting.bind(friend); // Функция подмена.
// greetingCopy('hahaha');


// let obj = {};
// console.log(obj.__proto__); // Выводит прототип объекта obj


// class User {              // User - это класс.
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//         this.foo = function () {
//             console.log(this);
//         }
//     }
// }


