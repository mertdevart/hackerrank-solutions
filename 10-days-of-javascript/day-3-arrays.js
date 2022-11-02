/*
task name =
Day 3: Arrays

taks =
Complete the getSecondLargest function in the editor below.
getSecondLargest has the following parameters:
int nums[n]: an array of integers
Returns=
int: the second largest number in ~nums~
    
input =
5
2 3 6 6 5

expected output =
5

*/

//solution of the problem with explanation =
function getSecondLargest(nums) {
  //sort metodunu kullanarak numbs dizisini buyukten kucuge dogru siraladik.
  nums.sort(function (a, b) {
    return b - a;
  });
  // for dongusu ile butun dizinin ilk indexinden gezmeye basladik.
  for (let i = 0; i <= nums.length; i++) {
    // if yardimi ile bulundugumuz indexteki degerin bir sonraki indexteki degere esit olup olmadigini kontrol ettik.
    if (nums[i] != nums[i + 1]) {
      // kosul saglandiysa secondLargest adli degisken tanimladik ve 2. en buyuk sayiyi deger olarak atadik.
      var secondLargest = nums[i + 1];
      // kosul saglandiysa bizden istenileni buldugumuz icin for dongusunu durdurduk.
      break;
    }
  }
  // return komutu ile fonksiyonun disariya secondLargest degiskenini dondurmesini sagladik
  return secondLargest;
}

//solution of the problem(code) =
function getSecondLargest(nums) {
  nums.sort(function (a, b) {
    return b - a;
  });
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      var secondLargest = nums[i + 1];
      break;
    }
  }
  return secondLargest;
}

/*

output =

>> 5

*/
