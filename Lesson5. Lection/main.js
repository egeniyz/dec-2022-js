// let arr = [1,2,3,[4,5], [6,7,8]];
// let flatArray = [];
// function flatter (array) {
//     for (let item of array) {
//         if(Array.isArray(item)) {
//             flatter(item);
//         }
//         else {
//             flatArray.push(item)
//         }
//     }
// }
// flatter (arr)
// console.log(flatArray)   // Рекурсия

// let xxx = function ()  {
//     console.log('hello');
// }
// foobar(xxx)
// function foobar (rrr) { // rrr - это колбек. Он выводит функцию ххх. Вызывается rrr, а показывает xxx
//     rrr();
// }

// let users = [
//     {name: 'vasua', age : 29, status: false},
//     {name: 'kolya', age : 30, status: true},
//     {name: 'petya', age : 31, status: false},
//     {name: 'olya', age : 32, status: true}
]
// let filter = users.filter(function (user) {
//     return user.age > 30;
// })
// console.log(filter); // Выводит юзеров с возрастом за 30. Колбек

// let filter = users.filter(function(allname) {
//     return allname.name === 'olya'
// });
// console.log(filter)     // Выводит юзера Оля и все ее данные. Колбек

