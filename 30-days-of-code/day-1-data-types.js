/*
task name =
Day 1: Functions

taks =
Complete the code in the editor below. The variables ~i~, ~d~, and ~s~ are already declared and initialized for you. You must:
1-)Declare ~3~ variables: one of type int, one of type double, and one of type String.
2-)Read ~3~ lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your ~3~ variables.
3-)Use the  operator to perform the following operations:
    -Print the sum of ~i~ plus your int variable on a new line.
    -Print the sum of ~d~ plus your double variable to a scale of one decimal place on a new line.
    -Concatenate ~s~ with the string you read as input and print the result on a new line.

input =
12
4.0
is the best place to learn and practice coding!

expected output =
16
8.0
HackerRank is the best place to learn and practice coding!
*/

//solution of the problem with explanation =
//process.stdin.resume();...
// i2, d2, s2 adli degiskenler tanimlandi
var i2;
var d2;
var s2;
// Tanimlanan degiskenlerin veri tipleri belirtildi ve input olarak degerleri atandi
i2 = Number(readLine());
d2 = Number(readLine());
s2 = String(readLine());
// console.log yardimi ile degiskenleri console ekranina yazdirdik
console.log(i + i2);
// cikti olarak noktali sayi gormek icin toFixed(parameters) kullandik
console.log((d + d2).toFixed(1));
console.log(s + s2);

//solution of the problem(code) =
//process.stdin.resume();...
var i2;
var d2;
var s2;
i2 = Number(readLine());
d2 = Number(readLine());
s2 = String(readLine());
console.log(i + i2);
console.log((d + d2).toFixed(1));
console.log(s + s2);

/*

output =

>>16
>>8.0
>>HackerRank is the best place to learn and practice coding!

\*/
