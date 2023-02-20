// let phone = '38 067-123-123'
// let rezult = phone
// .replaceAll(' ','')
// .replaceAll('-','')
// console.log(rezult); // Делаем с помощью replaceAll несколько замен. Пробел и тире на нет пробела

// let arr = [11,22,33,44,55,66,77];
// arr.splice(2,4)
// console.log(arr);

// let concat = arr.concat([1,2,3])
// console.log(concat)
// // console.log(concat.reverse())
// // console.log(arr.includes(11))
// let users = [
//     {name: 'Yura',  age: 21},
//     {name: 'Lexa',  age: 25},
//     {name: 'Kolya', age: 28},
//     {name: 'Ivan',  age: 30}
// ];
// users.forEach((u) =>
// {
//     delete u.age
//     console.log(u)   // Удалит в массиве u поля age
// })


// let map = users.map((value, index) => {
// return {name: value.name, age: value.age, id: index +1}  // value и index это аргументы map
// })
// console.log(map); // map изменяет массив users так, что изменяет его имя и содержимое. Здесь добавится id.

// let find = users.find(value => value.age === 28);
// console.log(find)   // Поиск обьекта age который равен 28

// console.log(users.every(value => typeof value.name === 'string')) // every проверяет являются ли поля name стринговыми
// console.log(users.some(value =>  value.age > 28))   //   some Проверяет хотя бы одно значение полей age, которые > 28.

// let nums = [-12, 30, 5, 40];
// let sort = nums.sort((a,b) => a-b)
// console.log(sort) // sort сортирует числа массава путем отнимания соседних цифр. Если a-b<0, то они расположены от меньшего до большего.
//     // Если a-b>0, то цифры меняются местами


// console.log(users.sort((a,b) => { // Сортировка по имени
//     if (a.name < b.name) {
//         return -1
//     }
//     if(a.name > b.name) {
//         return 1
//     }
//     if (a.name ===b.name) {
//         return 0
//     }
// }))

// let nums = [11,22,33,44,55];
// console.log(nums.reduce((accumulator, value) => {
// if (value % 2 ===0) {
//     accumulator.even.push(value);
// }
// else {
//     accumulator.odd.push(value);
// }
// return accumulator;
// }, {even: [], odd: []})); // Из массива создается обьект с четными(even) и нечетными(odd)


// let userCheks = [
//     {name: 'Yura', check: 50},
//     {name: 'Ivan', check: 70},
//     {name: 'Kolya', check: 90},
//     {name: 'Petro', check: 40},
// ]
// let map = userCheks.map(value => value.check);
// let reduce = map.reduce((acc, value) => {
//     return acc + value }, 0); // Суммируются чеки поля check. Начиная с нуля
// console.log(reduce);



