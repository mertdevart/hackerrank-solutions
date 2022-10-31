/*
task name =
Day 1: Let and Const

taks =
1-) Declare a constant variable, ~PI~, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
2-) Read a number, ~r~ , denoting the radius of a circle from stdin.
3-) Use ~PI~ and ~r~ to calculate the ~area~ and ~perimeter~ of a circle having radius ~r~.
4-) Print ~area~ as the first line of output and print ~perimeter~ as the second line of output.

input =
2.6

expected output =
21.237166338267002
16.336281798666924
\*/

//solution of the problem with explanation =
function main() {
  // PI degiskeni olusturduk ve Math.PI objesini kullanarak PI degiskenine pi sayisini atadik.
  const PI = Math.PI;
  // rCircle degiskeni olusturduk ve readline() modulunu kullanrak bize verilen r degerini rCircle degiskenine atadik.
  let rCircle = readLine();
  // area degiskeni olusturduk ve dairenin alanini bulmak icin gerekli islemi yapip sonucunu olusturdugumuz degiskene atadik.(** 2 carpi operatorunun yan yana kullanimi ussu islemi yapar)
  let area = PI * rCircle ** 2;
  // perimeter degiskeni olusturduk ve dairenin cevresini bulmak icin gerekli islemi yapip sonucunu olusturdugumuz degiskene atadik.
  let perimeter = PI * rCircle * 2;
  // console.log yardimi ile degiskenleri console ekranina yazdirdik
  console.log(area);
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

//solution of the problem(code) =
function main() {
  const PI = Math.PI;
  let rCircle = readLine();
  let area = PI * rCircle ** 2;
  let perimeter = PI * rCircle * 2;
  console.log(area);
  console.log(perimeter);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

/*

output =

>>21.237166338267002
>>16.336281798666924

\*/
