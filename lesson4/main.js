// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
let arearec = a*b;
return arearec
};
console.log(rectangle(5,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    const P = 3.14
    let areacir = P*r*r
    return areacir
};
console.log(circle(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h,r) {
    const P = 3.14
    let areacil = 2*P*r*(h+r)
    return areacil
};
console.log(cylinder(5,10))

// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [1, 12, 23, 7];
function arr(array) {
    for (let element of array) {
        console.log(element)
    }
    }
arr(users)

// створити функцію яка створює параграф з текстом. Текст задати через аргумент
function title(text) {
    document.write(

        `<div><h1> ${text} </h1>
        </div>`
    )
}
title('The beginning of the book');

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(li) {
    document.write (`
        <div>
    <ul>
    <li>${li}</li>
    <li>${li}</li>
    <li>${li}</li>
</ul>        
        </div>`
    )
}
list('item')

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, num=3) {
    for (let i = 0; i<num; i++) {
        document.write(`<li>${text}</li>`)
    }
}
list2('My name is')

// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let prim = [1,7,12,'20', true];
function primitive(array1) {

    document.write(`<li>${array1[0]}</li> 
                    <li>${array1[1]}</li>
                    <li>${array1[2]}</li>
                    <li>${array1[3]}</li>
                    <li>${array1[4]}</li>`)
}
primitive(prim)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


// - створити функцію яка повертає найменьше число з масиву


// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13




// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах




// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]




// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)



// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250









// function foo(name, age) {
//     let user = {name, age};
//     return {
//         getName() {
//             return user.name;
//         }
//         }
//     }
//
// let name2 = foo('Vasya', 20)
// console.log(name2.getName());   //    Замикання


// function writer(title, price, description) {
//     document.write(`
//         <div>
//     <h2>${title} ${price}</h2>
//             <p>${description}</p>
//         </div>`
//     )
// }
// writer('milk', 23, 'white')
//
//
// function calcul (a, b) {
//     let result = a+b;
//     return result;
// }
// console.log(calcul(10,20));
//
// function calc (sum) {
//     let pdv = 20;
//     let war = 1.5;
//     // let rez = sum - pdv - war;
//     return sum - pdv - war;
// }
// console.log(calc(100));
//
// function supercalc (num1, num2) {
//     let obj = {
//         dif: num1 - num2,
//         add: num1 + num2
//     };
//     return obj;
// }
// console.log(supercalc(10, 20))
//
// function calcArgum () {
//     let basket = 0;
//     for (const num of arguments) {
//     basket = basket + num;
//     }
//     return basket;
// }
// console.log(calcArgum(10, 20, 30)) // В консоль можно вывести нужное кол-во аргументов. В данном случае 3, но можно другое кол-во
//
// function  rees (y, z, ... x) {
//     console.log(x)
// }
// rees (1,2,3,4,5); // Выводит в массив остаток в функции rees
//
// function outer() {
//     let x = 100;
//     function inner() {
//         return x;
//     }
//     return inner;
// }
// console.log(outer()()); // Выводится функция inner. Она внешнюю имеет переменную 100. В данном случае происходит зымыкание inner на переменную 100
//
// let z = {
//     name: 'vasya',
//     greeting: function () {
//         console.log('hello I ' + this.name); // Вместо this можно поставить z
//         // console.log(this)
//     }
// }
// z.greeting();