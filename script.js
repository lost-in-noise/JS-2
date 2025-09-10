// TASK 1
let a = 12;
let b = 8;
let c = 25;
let d = 5;

let sum = a + b + c + d;
let average = sum / 4;

console.log("ჯამი:", sum);
console.log("საშუალო არითმეტიკული:", average);

// TASK 2
let firstName = "გიორგი";
let surname = "პეტრაშვილი";
console.log("სახელი და გვარი:", firstName, surname);

// TASK 3
let number = 10;

// ვარიანტი 1: ტერნარული ოპერატორით
console.log(number % 2 === 0 ? "რიცხვი ლუწია" : "რიცხვი კენტია");

// ვარიანტი 2: IF-ELSE
if (number % 2 === 0) {
  console.log("რიცხვი ლუწია");
} else {
  console.log("რიცხვი კენტია");
}
