
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


    // - Створити масив з 3 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let  user = [
    {
        name:         'Taras',
        username:     'tar',
        password:      '111'
    },
    {
        name:         'Ivan',
        username:     'iv',
        password:      '222'
    },
    {
        name:         'Yuriy',
        username:     'yr',
        password:      '333'
    }
];
console.log(user[0].password, user[1].password, user[2].password);




/*Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let x = 1
if (x !==0) {
    console.log('Вірно');
}
else {
    console.log('Не вірно');
}

let y = 0
if (y !==0) {
    console.log('Не вірно')
}
else {
    console.log('Не вірно');
}


let z = -3
if (z !==0)
{
    console.log('Вірно')
}
else {
    console.log('Не вірно');
}


/* Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 20
if (time >=0 && time <15) {
    console.log(1)
}
    else if (time >=15 && time <30) {
        console.log('2 Чверть')
}
    else if (time >=30 && time <45) {
    console.log(3)
}
    else if (time >=45 && time <60) {
    console.log(4)
}
    else {
        console.log('error')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 29
if (day >0 && day <=10) {
    console.log('first decada')}
    else if (day >11 && day <=20) {
    console.log('second decada')}
    else if (day >21 && day <=31)
    {
    console.log('third decada')

}

/* - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let shedule = 1
switch (shedule) {
    case 1:
        console.log('rest')
        break;
    case 2:
        console.log("2")
        break;
    case 3:
        console.log('3')
        break;
    case 4:
        console.log("4")
        break;
    case 5:
        console.log('work and travel')
        break;
    case 6:
        console.log("6")
        break;
    case 7:
        console.log("7")
        break;
}




  /*  - Користувач вводить або має два числа.
        Потрібно знайти та вивести максимальне число з тих двох .
        Також потрібно врахувати коли введені рівні числа.*/

let a = 7;
let b = 10;
if (a>b) {
    console.log(a)}
    else if (a<b)
{
    console.log(b)
    }
    let c = 5;
    let d = 5;
    if (c===d) {
        console.log(c,d)
    }


    /*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
        за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
        (хибноподібні, тобто приводиться до false)*/

let v = '';
let res = v || 'default';
console.log(res);




   /* - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
   перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в
   консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('JS Complex')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('JC')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('PC')
}