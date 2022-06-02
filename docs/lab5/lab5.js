"use strict";

//question number 1
console.log(max(2,3));

//question number 2
console.log(maxOfThree(3, 4, 5));

//question number 3
console.log(isVowel("b"));

//question number 4
console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));

//question number 5
console.log(reverse("jag testar"));

//question number 6
console.log(findLongestWord(["aa", "bbbb", "ccccc"]));

//question number 7
console.log(filterLongWords(["aa", "bbbb", "ccccc"], 3));

//question number 8
console.log(computeSumOfSquares([1, 2, 3, 4]));

//question number 9
console.log(printOddNumbersOnly([1, 2, 3, 4]))

//question number 10
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4]));

//question number 11
console.log("q-11 " + sumFunctional([1,2,3,4]));
console.log("q-11 "+ multiplyFunctional([1,2,3,4]));

//question number 12
console.log("q-12 " + findSecondBiggest([1, 2, 3, 4, 5]));

//question number 13
console.log("q-13 "+ printFibo(5, 0, 1));

function printFibo(n, a, b) {
    if(n <= 0) return 0;

    if(n == 1) return a;

    let i = 2;
    let fiboSeries = [];
    fiboSeries.push(a);
    fiboSeries.push(b);

    while(i <= n) {
        fiboSeries.push(a + b);
        let temp = b;
        b = a + b;
        a = temp;
        i++;
    }
    return fiboSeries;

}

function findSecondBiggest(arr){
    let biggest = arr[0];
    biggest = arr.reduce((acc, nextVal) => {
        if(nextVal > biggest)
            return nextVal;
    });
    arr.splice(arr.indexOf(biggest), 1);
    biggest = arr[0];
    biggest = arr.reduce((acc, nextVal) => {
        if(nextVal > biggest)
            return nextVal;
    });
    return biggest;
}

function sumFunctional(arr){
    let sum = arr.reduce((acc, nextVal) => acc + nextVal);
    return sum;
}

function multiplyFunctional(arr){
    let product = arr.reduce((acc, nextVal)=> acc * nextVal, 1);
    return product;
}

function computeSumOfSquaresOfEvensOnly(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0)
            sum = sum + (arr[i] * arr[i]);
    }
    return sum;
}

function printOddNumbersOnly(arr){
    let retrunArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0)
            retrunArr.push(arr[i]);
    }
    return retrunArr;
}

function computeSumOfSquares(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + (arr[i] * arr[i]);
    }
    return sum;

}

function filterLongWords(arr, j){
    let retrunArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= j)
            retrunArr.push(arr[i]);
    }

    return retrunArr;
}

function findLongestWord(arr){
    let longestLength = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestLength)
            longestLength = arr[i].length;
    }

    return longestLength;
}


function reverse(a){
    let rev = "";
    for(let i = (a.length - 1); i >= 0; i--){
        rev = rev + a[i];
    }
    return rev;
}

function sum(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}

function multiply(a){
    let product = 1;
    for(let i = 0; i < a.length; i++){
        product = product * a[i];
    }
    return product;
}

function isVowel(s){
    if(s.localeCompare("a") == 0 ||
        s.localeCompare("e") == 0 ||
        s.localeCompare("i") == 0 ||
        s.localeCompare("o") == 0 ||
        s.localeCompare("u") == 0){
            return true;
        }
    return false;
}

function maxOfThree(a, b, c){
    if(a > b && a > c)
        return a;
    else if(b > a && b > c)
        return b;
    else
        return c;
}

function max(x,y){
    if(x > y) 
        return x;
    else
        return y;
}

