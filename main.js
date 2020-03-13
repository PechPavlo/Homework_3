'use strict'

/*
 Homework-3
Pavlo Pechenevskyi
 */

// task 1
//  сумма чисел

function sumAll(a, b, c, d) {
    let x = a + b + c + d;
    alert (x);
    return x ;
}
let sumResult = sumAll(10,20,30,40);
 console.log(sumResult);
 

 // площадь прямоугольника

 function sRectangle(height, width) { 
    return height * width;
 }
 console.log(sRectangle(23,10));


  // объём цилиндра

 function volumeCyl(heightC, dC) {   
     return heightC * 3.14 * dC**2 / 4;
 }
 console.log(volumeCyl(10,4));

// элемент  последовательности Леонардо Пизанского 

function elPizan(nFib) {
    return Math.round (Math.pow((1 + Math.sqrt(5) ) / 2, nFib) / Math.sqrt(5));
}

let numElement = +prompt('tape number of element',1);
alert(`F${numElement}= ${elPizan(numElement)}`);


// task 2

var name = 'Pavlo ';

function nameToConcol() {
    console.log(name);
}

function nameToAlert() {
    alert(name);
}

// вариант без переменной
function nameToConcolAlert() {
    console.log('Pavlo');
    alert('Pavlo');
}

nameToConcol();
nameToAlert();
nameToConcolAlert();


// task 3

// Функция Суммы всех нечетных чисел в передаваемом числе

function sumNaturOdd(naturNumber) {
    let sum = 0;
    for (let sumTemp = 0; sumTemp <= naturNumber; sumTemp++) {
        if (sumTemp%2 > 0) {
                sum = sum + sumTemp;
        };
    }
        return sum;
}

var naturNumberOdd = +prompt(`Tape natural number`,0);
console.log(`SUM of odd for ${naturNumberOdd} numbers is = ${sumNaturOdd(naturNumberOdd)}`);
alert(`SUM of odd for ${naturNumberOdd} numbers is = ${sumNaturOdd(naturNumberOdd)}`);

// Функция Нахождение наибольшего четного числа в передаваемом числе

function bigestEvenNumber(naturNumber) {
    let num;
    for (let numTemp = 0; numTemp <= naturNumber; numTemp++) {
        if (numTemp%2 == 0) {
                num = numTemp
        }
    } 
    return num;
}

var naturNumberBigest = +prompt(`Tape natural number`,0);
console.log(`Bigest even number of  ${naturNumberBigest} numbers is = ${bigestEvenNumber(naturNumberBigest)}`);
alert(`Bigest even number of  ${naturNumberBigest} numbers is = ${bigestEvenNumber(naturNumberBigest)}`);


// Функция Нажождения последнего нечетного числа в передаваемом числе

function bigestOddNumber(naturNumber) {
    let num;
    for (let numTemp = 0; numTemp <= naturNumber; numTemp++) {
        if (numTemp%2 > 0) {
                num = numTemp
        }
    } 
    return num;
}

var NumberBigestOdd = +prompt(`Tape natural number`,0);
console.log(`Bigest odd number of  ${NumberBigestOdd} numbers is = ${bigestOddNumber(NumberBigestOdd)}`);
alert(`Bigest odd number of  ${NumberBigestOdd} numbers is = ${bigestOddNumber(NumberBigestOdd)}`);


// Функция Наибольшее из трех переданных чисел

function theBigest(numFirst,numSecond,numThird) {
    if (numFirst > numSecond && numFirst > numThird ) {
        return numFirst;
    };
    if (numSecond > numFirst && numSecond > numThird ) {
        return numSecond;
    };
    if (numThird > numFirst && numThird > numSecond ) {
        return numThird;
    };
}

console.log(`Bigest  number numbers is = ${theBigest(100,200,150)}`);


// Функция Наименьшее из 5 переданных чисел

function theSmallest(n1,n2,n3,n4,n5) {
    let smallNum = arguments[0]
    for (let i = 1; i < 5; i++) {
        let arg = arguments[i];
        if (arg < smallNum) {
            smallNum = arg;
        }
    }
    return smallNum;
}

console.log(theSmallest(201,10,20,5,125));


// Функция, которая выводит в консоль тип передаваемого параметра -строка,число и т.д

function typeofToConsole(x) {
    console.log(typeof(x))
}

typeofToConsole(true);


// Функция, которая получает число дня недели и выводит в алерт Название дня

function weekDayToAlert(dayNumber) {
    switch (dayNumber) {
        case 0:
            alert ("Today is Sunday." );
            break;
         case 1:
            alert ("Today is Monday." );
            break;    
        case 2:
                alert ("Today is Tuesday. " );
                break; 
        case 3:
                alert ("Today is Wednesday. " );
                break;
        case 4:
                alert ("Today is Thursday." );
                break;
        case 5:
                alert ("Today is Friday ." );
                break;
        case 6:
                alert ("Today is Saturday. " );
                break;
        default:
            alert (`Wrong day number!!!
            You need some REST!!!
              :)`);
            break;
        }
}

weekDayToAlert(4);

// THE END !!!
