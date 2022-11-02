/*
task name =
Day 3: Intro to Conditional Statements

taks =
Given an integer, ~n~, perform the following conditional actions:

If ~n~ is odd, print Weird
If ~n~ is even and in the inclusive range of ~2~ to ~5~, print Not Weird
If ~n~ is even and in the inclusive range of ~6~ to ~20~, print Weird
If ~n~ is even and greater than ~20~, print Not Weird
    
input =
3

expected output =
Weird

*/

//solution of the problem with explanation =
function main() {
  // num adli degisken tanimdalik ve readLine() yardimi ile bize verilen degeri atadik.
  const num = readLine();
  // kosul olarak num sayisinin 2 ye bolumden kalanin 1 olmasi dedik.
  if (num % 2 == 1) {
    // console.log ile console ekranina Weird yazdirdik.
    console.log("Weird");
  }
  // bir ust kosul saglanmadiysa ve burda belirttigimiz kosul saglandiysa yapilacak islemi belirttik
  else if (5 >= num && num >= 2) {
    // console.log ile console ekranina Not Weird yazdirdik.
    console.log("Not Weird");
  }
  // bir ust kosul saglanmadiysa ve burda belirttigimiz kosul saglandiysa yapilacak islemi belirttik
  else if (20 >= num && num >= 6) {
    // console.log ile console ekranina Weird yazdirdik.
    console.log("Weird");
  }
  // bir ust kosul saglanmadiysa ve burda belirttigimiz kosul saglandiysa yapilacak islemi belirttik
  else if (num > 20) {
    // console.log ile console ekranina Not Weird yazdirdik.
    console.log("Not Weird");
  }
}

//solution of the problem(code) =
function main() {
  const num = readLine();
  if (num % 2 == 1) {
    console.log("Weird");
  } else if (5 >= num && num >= 2) {
    console.log("Not Weird");
  } else if (20 >= num && num >= 6) {
    console.log("Weird");
  } else if (num > 20) {
    console.log("Not Weird");
  }
}

/*

output =

>> Weird

*/
