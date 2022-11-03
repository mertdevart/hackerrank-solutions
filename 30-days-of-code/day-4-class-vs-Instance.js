/*
task name =
Day 4: Class vs. Instance

taks =
Write a Person class with an instance variable, ~age~, and a constructor that takes an integer, ~initialAge~, as a parameter. The constructor must assign ~initialAge~ to ~age~ after confirming the argument passed as ~initialAge~ is not negative; if a negative argument is passed as ~initialAge~, the constructor should set ~age~ to ~0~ and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

yearPasses() should increase the ~age~ instance variable by ~1~.
amIOld() should perform the following conditional actions:
If ~age < 13~, print You are young..
If ~age >= 13~ and ~age < 18~, print You are a teenager..
Otherwise, print You are old..
To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

Note: Do not remove or alter the stub code in the editor.
    
input =
4
-1
10
16
18

expected output =
Age is not valid, setting age to 0.
You are young.
You are young.

You are young.
You are a teenager.

You are a teenager.
You are old.

You are old.
You are old.

*/

//solution of the problem(code) =
class Person {
  constructor(initialAge) {
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
    }
    this._age = initialAge < 0 ? 0 : initialAge;
  }
  get age() {
    return this._age;
  }
  amIOld() {
    if (this._age < 18 && this._age >= 13) {
      console.log("You are a teenager.");
    } else if (this._age < 13) {
      console.log("You are young.");
    } else {
      console.log("You are old.");
    }
  }
  yearPasses() {
    this._age++;
  }
}

/*

output =

>> Age is not valid, setting age to 0.
>> You are young.
>> You are young.

>> You are young.
>> You are a teenager.

>> You are a teenager.
>> You are old.

>> You are old.
>> You are old.

*/
