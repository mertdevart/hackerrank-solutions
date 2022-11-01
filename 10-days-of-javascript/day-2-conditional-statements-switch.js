/*
task name =
Day 2: Conditional Statements: Switch

taks =
Complete the getLetter(s) function in the editor. It has one parameter: a string, ~s~ , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
If the first character in string ~s~ is in the set {a,e,i,o,u}, then return A.
If the first character in string ~s~ is in the set {b,c,d,f,g}, then return B.
If the first character in string ~s~ is in the set {h,j,k,l,m}, then return C.
If the first character in string ~s~ is in the set {n,o,p,q,r,s,t,u,v,w,y,z}, then return D.
    

input =
adfgt

expected output =
A

*/

//solution of the problem with explanation =
function getLetter(s) {
  // letter adli degisken tanimladik
  let letter;
  // A, B, C adli diziler tanimladik ve iclerine bize verilen harf gruplarini atadik
  const A = ["a", "e", "i", "o", "u"];
  const B = ["b", "c", "d", "f", "g"];
  const C = ["h", "j", "k", "l", "m"];
  // switch-case yardimi ile letter degiskenine gelmesi gereken harfi bulduk
  switch (true) {
    // inputun ilk karakterini .includes metodu ile A dizisi icinde olup olmadigini kontrol ettik
    case A.includes(s[0]):
      // case sartini sagliyorsa letter degiskenine A degerini atadik
      letter = "A";
      // case sarti saglandiysa switch-case'i durdurduk
      break;
    // inputun ilk karakterini .includes metodu ile B dizisi icinde olup olmadigini kontrol ettik
    case B.includes(s[0]):
      // case sartini sagliyorsa letter degiskenine B degerini atadik
      letter = "B";
      // case sarti saglandiysa switch-case'i durdurduk
      break;
    // inputun ilk karakterini .includes metodu ile C dizisi icinde olup olmadigini kontrol ettik
    case C.includes(s[0]):
      // case sartini sagliyorsa letter degiskenine C degerini atadik
      letter = "C";
      // case sarti saglandiysa switch-case'i durdurduk
      break;
    // yukarida belirttigimiz case sartlarinin hicbiri saglanmadiysa default olarak ne yapilacigini belirttik
    default:
      // lettera D degerini atadik
      letter = "D";
      // switch-case'i durdurduk
      break;
  }
  // return komutu ile fonksiyonun disariya letter degiskenini dondurmesini sagladik
  return letter;
}

//solution of the problem(code) =
function getLetter(s) {
  let letter;
  const A = ["a", "e", "i", "o", "u"];
  const B = ["b", "c", "d", "f", "g"];
  const C = ["h", "j", "k", "l", "m"];
  switch (true) {
    case A.includes(s[0]):
      letter = "A";
      break;
    case B.includes(s[0]):
      letter = "B";
      break;
    case C.includes(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
      break;
  }
  return letter;
}

/*

output =

>>A

*/
