/*
task name =
Day 7: Arrays

taks =
Given an array, ~A~, of ~N~ integers, print ~A~'s elements in reverse order as a single line of space-separated numbers.

input =
4
1 4 3 2

expected output =
2 3 4 1

*/
//solution of the problem with explanation =
function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  // newArray adli dizi tanimladik. reverse metodu ile diziyi tersten yazdirdik ve join metodu ile diziye bosluk birakarak ekledik.
  let newArray = arr.reverse().join(" ");
  // console log ile console ekranina newArray adli diziyi yazdirdik.
  console.log(newArray);
}

//solution of the problem(code) =
function main() {
  const n = parseInt(readLine().trim(), 10);
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
  let newArray = arr.reverse().join(" ");
  console.log(newArray);
}

/*

output =

>> 2 3 4 1

*/
