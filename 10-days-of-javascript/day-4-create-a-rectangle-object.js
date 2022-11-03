/*
task name =
Day 4: Create a Rectangle Object

taks =
Complete the function in the editor. It has two parameters: ~a~ and ~b~. It must return an object modeling a rectangle that has the following properties:

~length~: This value is equal to ~a~.
~width~: This value is equal to ~b~.
~perimeter~: This value is equal to ~2*(a+b)~ 
~area~: This value is equal to ~a*b~
input =
4
5

expected output =
4
5
18
20

*/

//solution of the problem with explanation =
function Rectangle(a, b) {
  // myObject adinda bir obje olusturduk.
  let myObject = {
    // nesneler olusturup icine degerler atadik.
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  // return komutu ile fonksiyonun disariya myObject objesini dondurmesini sagladik.
  return myObject;
}

//solution of the problem(code) =
function Rectangle(a, b) {
  let myObject = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  return myObject;
}

/*

output =

>> 4
>> 5 
>> 18
>> 20

*/
