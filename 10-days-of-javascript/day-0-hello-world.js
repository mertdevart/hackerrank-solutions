/*
task name = 
Day 0: Hello, World!

taks =
A greeting function is provided for you in the editor below. It has one parameter, ~parameterVariable~. Perform the following tasks to complete this challenge:
1-) Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already 
provided in the editor.
2-) Use console.log() to print the contents of  ~parameterVariable~ (i.e., the argument passed to main).

input format = 
string

input = 
Welcome to 10 Days of JavaScript!

output format =
Print the following two lines of output:
1-) On the first line, print Hello, World! (this is provided for you in the editor).
2-) On the second line, print the contents of.

output =
Hello, World!
Welcome to 10 Days of JavaScript!
*/

//solution of the problem with explanation =
function greeting(parameterVariable) {
  // Javascript dilinde console ekranina birsey yazdirmak icin console.log(parameter) kullaniriz
  console.log("Hello, World!");
  // Bize verilen degiskeni console.log(parameter) kullanarak console ekranina yazdirdik
  console.log(parameterVariable);
}

//solution of the problem(code) =
function greeting(parameterVariable) {
  console.log("Hello, World!");
  console.log(parameterVariable);
}

/*

input =
Welcome to 10 Days of JavaScript!

output = 
>>Hello, World!
>>Welcome to 10 Days of JavaScript!

*/
