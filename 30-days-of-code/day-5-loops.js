/*
task name =
Day 5: Loops

taks =
Given an integer, ~n~, print its first ~10~ multiples. Each multiple ~n x i~ (where ~1 <= i <=10~) should be printed on a new line in the form: n x i = result.
    
input =
2

expected output =
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20

*/

//solution of the problem(code) =
function main() {
  const n = parseInt(readLine().trim(), 10);
  let m = 0;
  for (let i = 1; i <= 10; i++) {
    m = i * n;
    console.log(n + " x " + i + " = " + m);
  }
}
/*

output =

>> 2 x 1 = 2
>> 2 x 2 = 4
>> 2 x 3 = 6
>> 2 x 4 = 8
>> 2 x 5 = 10
>> 2 x 6 = 12
>> 2 x 7 = 14
>> 2 x 8 = 16
>> 2 x 9 = 18
>> 2 x 10 = 20

*/
