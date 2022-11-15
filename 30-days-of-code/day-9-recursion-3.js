/*
task name =
Day 9: Recursion 3

taks =
Function Description
Complete the factorial function in the editor below. Be sure to use recursion.

factorial has the following paramter:

int n: an integer
Returns

int: the factorial of ~n~
Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of ~0~ .

input =
3

expected output =
6

*/

//solution of the problem with explanation =
function factorial(n) {
  // result adli bir degisken tanimladik. kisa if yapisi ile n 1 olana kadar n ile bir altindaki sayi ile carpip fonksiyonu tekrar cagirdik.
  let result = n === 1 ? n : n * factorial(n - 1);
  // return ile result degiskenini dondurmesini sagladik
  return result;
}

//solution of the problem(code) =
function factorial(n) {
  let result = n === 1 ? n : n * factorial(n - 1);
  return result;
}

/*

output =

>> 6

*/
