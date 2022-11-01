/*
task name =
Day 2: Operators

taks =
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
    
input =
12.00
20
8

expected output =
15

*/

//solution of the problem with explanation =
function solve(meal_cost, tip_percent, tax_percent) {
  // totalCost adli degisken olusturduk
  let totalCost;
  // tipCost adli degisken olusturduk ve bahsis degerini hesaplayip tipCost degiskenine deger olarak atadik.
  let tipCost = (meal_cost / 100) * tip_percent;
  // taxCost adli degisken olusturduk ve vergi degerini hesaplayip taxCost degiskenine deger olarak atadik.
  let taxCost = (tax_percent / 100) * meal_cost;
  // totalCost adli degiskene toplam tutari hesaplayip deger olarak atadik.
  totalCost = meal_cost + tipCost + taxCost;
  // console.log ile toplam tutari yazdirdik. Math.round(parameters) metodu ile totalCost icindeki degeri en yakin tam sayiya yuvarladik.
  console.log(Math.round(totalCost));
}

//solution of the problem(code) =
function solve(meal_cost, tip_percent, tax_percent) {
  let totalCost;
  let tipCost = (meal_cost / 100) * tip_percent;
  let taxCost = (tax_percent / 100) * meal_cost;
  totalCost = meal_cost + tipCost + taxCost;
  console.log(Math.round(totalCost));
}

/*

output =

>> 15

*/
