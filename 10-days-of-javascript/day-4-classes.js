/*
task name =
Day 4: Classes

taks =
Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.

Note: The perimeter method must be lowercase and spelled correctly.

*/

//solution of the problem with explanation =
// polygon adli class tanimdalik
class Polygon {
  //classin bekledigi degeri tanimladik
  constructor(polygonValue) {
    // alinan degeri classta tanimdalik
    this.polygonValue = polygonValue;
  }
  // classa perimeter adinda method ekledik
  perimeter() {
    //perimeter methodunun yapicagi isi yazdik
    let sum = 0;
    for (let i = 0; i <= this.polygonValue.length - 1; i++) {
      sum += this.polygonValue[i];
    }
    // return komutu ile fonksiyonun disariya sum degiskenini dondurmesini sagladik
    return sum;
  }
}

//solution of the problem(code) =
class Polygon {
  constructor(polygonValue) {
    this.polygonValue = polygonValue;
  }
  perimeter() {
    let sum = 0;
    for (let i = 0; i <= this.polygonValue.length - 1; i++) {
      sum += this.polygonValue[i];
    }
    return sum;
  }
}

/*

output =

>> 60
>> 40
>> 143

*/
