/*
task name =
Day 6: Let's Review

taks =
Given a string, ~S~, of length ~N~ that is indexed from ~0~ to ~N-1~, print its even-indexed and odd-indexed characters as ~2~ space-separated strings on a single line (see the Sample below for more detail).

Note: ~0~ is considered to be an even index.
    
input =
2
Hacker
Rank

expected output =
Hce akr
Rn ak

*/
//solution of the problem with explanation =
function processData(input) {
  //bize verilen tek satirlik metni bosluklarindan bolum herbirini dizi olusturup icine atadik
  const myArray = input.split("\n");
  // bize verilen ilk satirdaki integer degeri kadar dondurecek for dongusu kurduk
  for (let i = 1; i <= parseInt(myArray[0]); i++) {
    // tek ve cift indexteki karakterleri buldugumuzda saklayabilmek icin 2 adet dizi olusturduk
    let evenString = "";
    let oddString = " ";
    // myArray dizisinin icindeki degerlerin herbirininin icindeki dergerleri gezdik
    for (let j = 0; j < myArray[i].length; j++) {
      // index numarasina gore tek mi cift mi diye kontrol ettik ve ona gore gerekli diziye atadik
      j % 2 == 0 ? (evenString += myArray[i][j]) : (oddString += myArray[i][j]);
    }
    // console.log ile console ekranina dizileri yazdirdik
    console.log(evenString + oddString);
  }
}

//solution of the problem(code) =
function processData(input) {
  const myArray = input.split("\n");
  for (let i = 1; i <= parseInt(myArray[0]); i++) {
    let evenString = "";
    let oddString = " ";
    for (let j = 0; j < myArray[i].length; j++) {
      j % 2 == 0 ? (evenString += myArray[i][j]) : (oddString += myArray[i][j]);
    }
    console.log(evenString + oddString);
  }
}

/*

output =

>> Hce akr
>> Rn ak

*/
