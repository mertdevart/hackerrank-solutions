/*
task name =
Day 8: Dictionaries and Maps

taks =
Given ~n~ names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each ~name~ queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for ~name~ is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

input =
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry

expected output =
sam=99912222
Not found
harry=12299933

*/
//solution of the problem with explanation =
function processData(input) {
  let inputArray = input.split("\n");
  let index = inputArray.shift();
  let inputArray2 = inputArray.join(" ").split(" ");
  let phoneBook = {};
  for (let i = 0; i < index * 2; i += 2) {
    phoneBook[inputArray2[i]] = inputArray2[i + 1];
  }
  for (let j = index * 2; j < inputArray2.length; j++) {
    if (phoneBook[inputArray2[j]]) {
      console.log(`${inputArray2[j]}=${phoneBook[inputArray2[j]]}`);
    } else {
      console.log("Not found");
    }
  }
}

//solution of the problem(code) =
function processData(input) {
  let inputArray = input.split("\n");
  let index = inputArray.shift();
  let inputArray2 = inputArray.join(" ").split(" ");
  let phoneBook = {};
  for (let i = 0; i < index * 2; i += 2) {
    phoneBook[inputArray2[i]] = inputArray2[i + 1];
  }
  for (let j = index * 2; j < inputArray2.length; j++) {
    if (phoneBook[inputArray2[j]]) {
      console.log(`${inputArray2[j]}=${phoneBook[inputArray2[j]]}`);
    } else {
      console.log("Not found");
    }
  }
}

/*

output =

>> sam=99912222
>> Not found
>> harry=12299933

*/
