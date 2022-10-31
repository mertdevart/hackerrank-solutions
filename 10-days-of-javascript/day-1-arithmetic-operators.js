/*
task name =
Day 1: Arithmetic Operators

taks =
Complete the following functions in the editor below:
1-)getArea(length, width): Calculate and return the area of a rectangle having sides ~length~ and ~width~.
2-)getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides ~length~ and ~width~.


input =
3
4.5

expected output =
13.5
15
\*/

//solution of the problem with explanation =
function getArea(length, width) {
  // area adli bir degisken tanimladik
  let area;
  // tanimladigimiz degiskene alani bulmak icin gerek islemleri yapip sonucu atadik
  area = length * width;
  // return komutu ile fonksiyonun disariya area degiskenini dondurmesini sagladik
  return area;
}
function getPerimeter(length, width) {
  // perimeter adli bir degisken tanimladik
  let perimeter;
  // tanimladigimiz degiskene cevreyi bulmak icin gerek islemleri yapip sonucu atadik
  perimeter = 2 * (length + width);
  // return komutu ile fonksiyonun disariya perimeter degiskenini dondurmesini sagladik
  return perimeter;
}

//solution of the problem(code) =
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}
function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}

/*

output =

>>13.5
>>15

\*/
