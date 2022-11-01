/*
task name =
Day 2: Loops

taks =
First, print each vowel in ~s~ on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in ~s~.
Second, print each consonant (i.e., non-vowel) in ~s~ on a new line in the same order as it appeared in ~s~.
    
input =
javascriptloops

expected output =
a
a
i
o
o
j
v
s
c
r
p
t
l
p
s

*/

//solution of the problem with explanation =
function vowelsAndConsonants(s) {
  // for dongusu kurduk, i degiskeni tanimdalik ve for dongusunun parametlerini yani kurallarini belirledik.
  // for(i den baslasin; i degeri, s degerinin uzulugunun -1 inden kucuk veya esit olana kadar dongu devam etsin; her dongude i, 1'er 1'er artsin)
  for (let i = 0; i <= s.length - 1; i++) {
    //sart blogunda s degiskeninin i'ninci karekteri a veya e veya u veya o veya i karakterine esitse console log ile console ekranina s degiskeninin i'ninci karekterini yazdir
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "u" ||
      s[i] == "o" ||
      s[i] == "i"
    ) {
      console.log(s[i]);
    }
  }
  // for dongusu kurduk, i degiskeni tanimdalik ve for dongusunun parametlerini yani kurallarini belirledik.
  // for(i den baslasin; i degeri, s degerinin uzulugunun -1 inden kucuk veya esit olana kadar dongu devam etsin; her dongude i, 1'er 1'er artsin)
  for (let i = 0; i <= s.length - 1; i++) {
    //sart blogunda s degiskeninin i'ninci karekteri a ve e ve u ve o ve i karakterine esit degilse console log ile console ekranina s degiskeninin i'ninci karekterini yazdir
    if (
      s[i] != "a" &&
      s[i] != "e" &&
      s[i] !== "u" &&
      s[i] !== "o" &&
      s[i] !== "i"
    ) {
      console.log(s[i]);
    }
  }
}

//solution of the problem(code) =
function vowelsAndConsonants(s) {
  for (let i = 0; i <= s.length - 1; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "u" ||
      s[i] == "o" ||
      s[i] == "i"
    ) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i <= s.length - 1; i++) {
    if (
      s[i] != "a" &&
      s[i] != "e" &&
      s[i] !== "u" &&
      s[i] !== "o" &&
      s[i] !== "i"
    ) {
      console.log(s[i]);
    }
  }
}

/*

output =

>> a
>> a
>> i
>> o
>> o
>> j
>> v
>> s
>> c
>> r
>> p
>> t
>> l
>> p
>> s

*/
