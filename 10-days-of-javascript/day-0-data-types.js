/*
task name = 
Day 0: Data Types

taks =
Variables named ~firstInteger~, ~firstDecimal~, ~firstString~ and  are declared for you in the editor below. You must use the + operator to perform the following sequence of operations:
1-) Convert ~secondInteger~ to an integer (Number type), then sum it with ~firstInteger~ and print the result on a new line using console.log.
2-) Convert ~secondDecimal~ to a floating-point number (Number type), then sum it with ~firstDecimal~ and print the result on a new line using console.log.
3-) Print the concatenation of ~firstString~ and ~secondString~ on a new line using console.log. Note that ~firstString~ must be printed first.

input = 
12
4.32
is the best place to learn and practice coding!

expected output =
16
8.32
HackerRank is the best place to learn and practice coding!
*/

//solution of the problem with explanation =
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  // firstInteger ile secondInteger degerini + operatoruyle toplayip answer1 olarak yarattigimiz yeni degiskene atadik.
  // String veri tipindeki secondInteger degiskenini (Number(variable)) kullanarak tam sayi veri tipine cevirdik.
  let answer1 = firstInteger + Number(secondInteger);
  const firstDecimal = 4.0;
  // firstDecimal ile secondDecimal degerini + operatoruyle toplayip answer2 olarak yarattigimiz yeni degiskene atadik.
  // String veri tipindeki secondDecimal degiskenini (parseFloat(variable)) kullanarak ondalikli sayi veri tipine cevirdik.
  let answer2 = firstDecimal + parseFloat(secondDecimal);
  const firstString = "HackerRank ";
  // firstString ile secondString degerini + operatoruyle birlestirip answer3 olarak yarattigimiz yeni degiskene atadik.
  let answer3 = firstString + secondString;
  // console.log yardimiyla degerleri atadigimiz degiskenleri console ekranina yazdirdik.
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
}

//solution of the problem(code) =
function performOperation(secondInteger, secondDecimal, secondString) {
  const firstInteger = 4;
  let answer1 = firstInteger + Number(secondInteger);
  const firstDecimal = 4.0;
  let answer2 = firstDecimal + parseFloat(secondDecimal);
  const firstString = "HackerRank ";
  let answer3 = firstString + secondString;
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
}

/*

output = 
>>16
>>8.32
>>HackerRank is the best place to learn and practice coding!

*/
