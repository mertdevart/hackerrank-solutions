/*
task name =
Day 3: Throw

taks =
Complete the isPositive function below. It has one integer parameter, ~a~. If the value of ~a~ is positive, it must return the string YES. Otherwise, it must throw an Error according to the following rules:

If ~a~ is ~0~, throw an Error with ~message~ Zero Error.
If ~a~ is negative, throw an Error with ~message~ Negative Error.
    
input =
3
1
2
3

expected output =
YES
YES
YES

*/

//solution of the problem with explanation =
function isPositive(a) {
  // a degiskeninin 0 olup olmadigini kontrol ettik
  if (a == 0) {
    // kosul saglaniyorsa fonsiyonun Zero Error mesajini dondurmesini belirttik
    throw new Error("Zero Error");
  }
  // bir ustteki kosul saglanmiyorsa bu kosula bakariz. a degiskeninin 0'dan kucuk olup olmadigini kontrol ettik
  else if (a < 0) {
    // kosul saglaniyorsa fonsiyonun Negative Error mesajini dondurmesini belirttik
    throw new Error("Negative Error");
  }
  // yukaridaki kosullardan hicbiri saglanmiyorsa default olarak yapilacak islemi belirttik
  else {
    // fonsiyonun YES dondurmesini belirttik
    return "YES";
  }
}

//solution of the problem(code) =
function isPositive(a) {
  if (a == 0) {
    throw new Error("Zero Error");
  } else if (a < 0) {
    throw new Error("Negative Error");
  } else {
    return "YES";
  }
}

/*

output =

>> YES
>> YES
>> YES

*/
