/*
task name =
Day 5: Inheritance

taks =
We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

Add an area method to Rectangle's prototype.
Create a Square class that satisfies the following:
It is a subclass of Rectangle.
It contains a constructor and no other methods.
It can use the Rectangle class' area method to print the area of a Square object.
Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.
input =
3
4

expected output =
12
9

*/

//solution of the problem with explanation =
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

//solution of the problem(code) =
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(w) {
    super(w, w);
  }
}

/*

output =

>> 12
>> 9

*/
