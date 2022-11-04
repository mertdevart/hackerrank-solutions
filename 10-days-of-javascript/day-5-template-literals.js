/*
task name =
Day 5: Template Literals

taks =
The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:

Finds the initial values of ~s1~ and ~s2~ by plugging the area and perimeter values into the formula:
where ~A~ is the rectangle's area and ~P~ is its perimeter.
Creates an array consisting of ~s1~ and ~s2~ and sorts it in ascending order.
Returns the sorted array.
input =
10
14

expected output =
10
14

*/

//solution of the problem with explanation =
function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const result = [];
  result.push((p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4);
  result.push((p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4);
  return result.sort();
}

//solution of the problem(code) =
function sides(literals, ...expressions) {
  const [a, p] = expressions;
  const result = [];
  result.push((p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4);
  result.push((p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4);
  return result.sort();
}

/*

output =

>> 10
>> 14

*/
