
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль




let arr = ['first', 2 , true , '4' , 5 , [1 , 2] , 'seven' , 'eight' , 'nine' , 10]
console.log('first')
console.log(2)
console.log(true)
console.log('4')
console.log(5)
console.log(arr[5])
console.log('seven')
console.log('eight')
console.log('nine')
console.log(10)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title:         'how bryansk burned',
    pageCount:     28,
    genre:         'near future'
};
console.log(book1)

let book2 = {
    title:         'how kursk burned',
    pageCount:     43,
    genre:         'near future'
};
console.log(book2)

let book3 = {
    title:         'how moscow burned',
    pageCount:     101,
    genre:         'near future'
};
console.log(book3)

/*
    - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let book4 = {
    title:         'how bryansk burned',
    pageCount:     28,
    genre:         'near future',
    authors : [ {
        name: 'Petrenko',
        age:  41}
    ]
};
console.log(book4)

let book5 = {
    title:         'how kursk burned',
    pageCount:     43,
    genre:         'near future',
    authors : [ {
        name: 'Shevchenko',
        age:  47
    }
    ]
};
console.log(book5)

let book6 = {
    title:         'how moscow burned',
    pageCount:     101,
    genre:         'near future',
    authors : [ {
        name: 'Zaluzhnyi',
        age:  51
    }
    ]
};
console.log(book6)


    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача





/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
    - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/



    /*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/





   /* - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/
