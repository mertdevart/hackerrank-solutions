/*
task name =
Day 4: Count Objects

taks =
Complete the function in the editor. It has one parameter: an array, ~a~, of objects. Each object in the array has two integer properties denoted by ~x~ and ~y~. The function must return a count of all such objects ~o~ in array ~a~ that satisfy ~o.x == o.y~.

input =
5
1 1
2 3
3 3
3 4
4 5

expected output =
2

*/

//solution of the problem with explanation =
function getCount(objects) {
  // count adli bir degisken tanimladik ve 0 degerini atadik
  let count = 0;
  // for dongusu kurup butun objeynin icindekileri gezdik
  for (let i = 0; i <= objects.length - 1; i++) {
    // bizden istenilen kosul saglaniyorsa count'u 1 arttirdik
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  // return komutu ile fonksiyonun disariya count degiskenini dondurmesini sagladik
  return count;
}

//solution of the problem(code) =
function getCount(objects) {
  let count = 0;
  for (let i = 0; i <= objects.length - 1; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}

/*

output =

>> 2

*/
