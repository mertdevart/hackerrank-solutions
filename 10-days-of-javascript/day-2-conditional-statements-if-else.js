/*
task name =
Day 1: Functions

taks =
Complete the getGrade(score) function in the editor. It has one parameter: an integer, ~score~ , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her ~grade~ according to the following rules:
if 25 < score <= 30 then grade = "A";
if 20 < score <= 25 then grade = "B";
if 15 < score <= 20 then grade = "C";
if 10 < score <= 15 then grade = "D";
if 5  < score <= 10 then grade = "E";
if 0  <= score <= 5 then grade = "F";
    

input =
11

expected output =
D

*/

//solution of the problem with explanation =
function getGrade(score) {
  // grade adli bir degisken tanimladik
  let grade;
  // if blogunu kullanarak degiskenimiz eger istedigimiz degerler icerisindeyse grade degiskenine not karsiligi denk gelen harf notunu atadik
  if (25 < score && score <= 30) {
    grade = "A";
    // else if blogunu kullanarak degiskenimiz eger istedigimiz degerler icerisindeyse grade degiskenine not karsiligi denk gelen harf notunu atadik
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (0 <= score && score <= 5) {
    grade = "F";
  }
  // return komutu ile fonksiyonun disariya grader degiskenini dondurmesini sagladik
  return grade;
}

//solution of the problem(code) =
function getGrade(score) {
  let grade;
  if (25 < score && score <= 30) {
    grade = "A";
  } else if (20 < score && score <= 25) {
    grade = "B";
  } else if (15 < score && score <= 20) {
    grade = "C";
  } else if (10 < score && score <= 15) {
    grade = "D";
  } else if (5 < score && score <= 10) {
    grade = "E";
  } else if (0 <= score && score <= 5) {
    grade = "F";
  }
  return grade;
}

/*

output =

>>D

*/
