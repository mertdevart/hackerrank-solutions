/*
task name =
Day 1: Functions

taks =
Implement a function named factorial that has one parameter: an integer, ~n~. It must return the value of ~n!~ (i.e., ~n~ factorial).

input =
4

expected output =
24
*/

//solution of the problem with explanation =
function factorial(n) {
  // counter adinda bir degisken tanimladik ve n degiskeninden degeri icine atadik.
  let counter = n;
  // for dongusu olusturduk. counter degiskeninin degeri kadar dongunun donmesi sagladik ve her deger ile bir onceki degeri carpip tekrar n degiskeninin icine atadik
  for (let i = 1; counter > i; i++) {
    n = n * i;
  }
  // return komutu ile fonksiyonun disariya n degiskenini dondurmesini sagladik
  return n;
}

//solution of the problem(code) =
function factorial(n) {
  let counter = n;
  for (let i = 1; counter > i; i++) {
    n = n * i;
  }
  return n;
}

/*

output =

>>24

\*/
