/*
task name =
Day 5: Arrow Functions

taks =
Complete the function in the editor. It has one parameter: an array, . It must iterate through the array performing one of the following actions on each element:

If the element is even, multiply the element by ~2~.
If the element is odd, multiply the element by ~3~.
The function must then return the modified array.
input =
5
1 2 3 4 5

expected output =
3 4 9 8 15

*/

//solution of the problem with explanation =
function modifyArray(nums) {
  const newNums = nums.map((el) => (el % 2 === 0 ? el * 2 : el * 3));
  return newNums;
}

//solution of the problem(code) =
function modifyArray(nums) {
  const newNums = nums.map((el) => (el % 2 === 0 ? el * 2 : el * 3));
  return newNums;
}

/*

output =

>> 3 4 9 8 15

*/
