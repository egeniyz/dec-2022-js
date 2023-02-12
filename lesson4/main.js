function writer(title, price, description) {
    document.write(`
        <div>
    <h2>${title} ${price}</h2>
            <p>${description}</p>
        </div>`
    )
}
writer('milk', 23, 'white')


function calcul (a, b) {
    let result = a+b;
    return result;
}
console.log(calcul(10,20));

function calc (sum) {
    let pdv = 20;
    let war = 1.5;
    // let rez = sum - pdv - war;
    return sum - pdv - war;
}
console.log(calc(100));

function supercalc (num1, num2) {
    let obj = {
        dif: num1 - num2,
        add: num1 + num2
    };
    return obj;
}
console.log(supercalc(10, 20))

function calcArgum () {
    let basket = 0;
    for (const num of arguments) {
    basket = basket + num;
    }
    return basket;
}
console.log(calcArgum(10, 20, 30)) // В консоль можно вывести нужное кол-во аргументов. В данном случае 3, но можно другое кол-во

function  rees (y, z, ... x) {
    console.log(x)
}
rees (1,2,3,4,5); // Выводит в массив остаток в функции rees

function outer() {
    let x = 100;
    function inner() {
        return x;
    }
    return inner;
}
console.log(outer()()); // Выводится функция inner. Она внешнюю имеет переменную 100. В данном случае происходит зымыкание inner на переменную 100

let z = {
    name: 'vasya',
    greeting: function () {
        console.log('hello I ' + this.name); // Вместо this можно поставить z
        // console.log(this)
    }
}
z.greeting();