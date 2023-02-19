// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let rectangle = (a,b) => a+b
console.log(rectangle(5,21))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

let circle = (r, Pi) => r*r*Pi
console.log(circle(10, 3.14))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder = (h,r,Pi) => 2*Pi*r*(h+r)
console.log(cylinder(10,20,3.14))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [1, 12, 23, 7];
// function arr(array) {
//     for (let element of array) {
//         console.log(element)
//     }
// }
// arr(users)



// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function title(arguments) {
//     document.write(
//
//         `<div><h1> ${arguments} </h1>
//         </div>`
//     )
// }
// title('The beginning of the book');







// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(li) {
//     document.write (`
//         <div>
//     <ul>
//     <li>${li}</li>
//     <li>${li}</li>
//     <li>${li}</li>
// </ul>
//         </div>`
//     )
// }
// list('item')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list2(text, num=3) {
//     for (let i = 0; i<num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
// list2('My name is')








// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let prim = [1,7,12,'20', true];
// function primitive(array1) {
//
//     document.write(`<li>${array1[0]}</li>
//                     <li>${array1[1]}</li>
//                     <li>${array1[2]}</li>
//                     <li>${array1[3]}</li>
//                     <li>${array1[4]}</li>`)
// }
// primitive(prim)

let prim = (a1,b1,c1) => {
    document.write(`   <li>a1</li> 
//                     <li>b1</li>
//                     <li>c1</li>`)
}
console.log(prim(1,true, 'Hello'))


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// function objBlockCreator(objects) {
//     for (const item of objects) {
//         document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//     }
// }

// - створити функцію яка повертає найменьше число з масиву

// function minNum(numbers) {
//
//     let min = numbers[0];
//     for (const number of numbers) {
//         if (min > number) {
//             min = number
//         }
//     }
//     return min;
// }
//
// minNum([-11, -22, -33]);



// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(numbers) {
//     let basket = 0;
//     for (const number of numbers) {
//         basket += number;
//     }
//     return basket;
// }

// створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//     arr[index1] = v2;
//     arr[index2] = v1;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44, 55], 0, 4));




// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(uah, currencies, exitCurrency) {
//     for (const item of currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//     }
//
// }
//
// console.log(exchange(
//     10000,
//     [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42},
//         {currency: 'GBP', value: 43}
//     ],
//     'USD'
// ));





