/*
task name =
Day 3: Try, Catch, and Finally

taks =
Complete the reverseString function; it has one parameter, ~s~. You must perform the following actions:
1-)Try to reverse string ~s~ using the split, reverse, and join methods.
2-)If an exception is thrown, catch it and print the contents of the exception's ~message~ on a new line.
3-)Print ~s~ on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
    
input =
"1234"

expected output =
4321

*/

//solution of the problem with explanation =
function reverseString(s) {
  //try ile fonksiyonun islem yapmayi denemesini belirtiyoruz
  try {
    // reverseS adli degisken olusturup deger olarak stringin terten yazilmis halini atadik.(split metodu ile stringi bolduk ve dizi olusturduk, reverse metodu ile diziyi terse cevirdik, join metodu ile tekrardan birlestirdik.)
    var reversedS = s.split("").reverse().join("");
  } catch (err) {
    // eger try icinde istenilen islem hata verdiyse ne yapilacagini tanimladik
    // verilen hatayi console ekranina yazdirdik
    console.log(err.message);
  } finally {
    // try catch islemleri bittik sonra final olarak ne yapilacigi tanimladik
    // try icindeki islem tamamdiysa ilk degeri, hata verdiyse ikinci degeri console ekranina yazdirdik
    console.log(reversedS || s);
  }
}

//solution of the problem(code) =
function reverseString(s) {
  try {
    var reversedS = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(reversedS || s);
  }
}

/*

output =

>> 4321

*/
