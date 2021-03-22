// bai 1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits);
// what's in fruits?
console.log(fruits.length);

// bai 2
let styles = ["jazz", "Bules"];

var stort = styles;

stort.push("Rock-n-Roll");

console.log(stort);

styles[Math.floor((styles.length - 1) / 2)] = "Classic"; // cong thuc  tinh de chen vao giua

console.log(styles);

// tach gia tri dau tien trong mang

styles.shift();

console.log(styles);

// them rap va reggae dung unshift

styles.unshift("Rap", "Reggae");

console.log(styles);

// bai 3

let arr = ["a", "b"];

arr.push(function () {
  console.log(this);
})

arr[2](); // ?


// bai 5

function getMaxSubSum(arr) {
  let maxsum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxsum = Math.max(maxsum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxsum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));

// bai 6
function camelize(str) {
  return str
    .split('-')
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(camelize("background-color") == 'backgroundColor');

// bai 7 
function filterRangeInplace(arr, a, b) {
  // a va b la tap xac dinh de xoa
  //return arr.filter(item => (a <= item && item <= b));
  // su dung ham filter de tim kiem cac phan tu o giua
  for (let index = 0; index < arr.length; index++) {
    // duyet tu dau den cuoi mang 
    let val = arr[index]; // luu tru gia tri trong mang

    if (val < a || val > b) {  // neu gia tri mang no nam ngoai a va b thi xoa

      arr.splice(index, 1); // i la vi tri bat dau , 1 la loai bo 1 phan tu
      index--; // sau khi loai bo giam phan tu xuong
    }

  }
}

let a = [5, 3, 8, 1];

filterRangeInplace(a, 1, 4);
console.log(a);

let b = [5, 2, 1, -10, 8];

b.sort((a, b) => b - a); // sap xep giam dan  b - a
console.log(b);

b.sort((a, b) => a - b); // sap xep tang dan a - b;

console.log(b);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// // ham map tao ra mot mang moi chi co toan ten name
// let names = users.map(item => item.name);

// console.log(names);
// bai 13 
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };


// let user = [john, pete, mary];

// let usersMapped = user.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

// console.log(usersMapped[0].fullName, usersMapped[0].id);

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

// sortByAge(arrage);

// console.log(arrage[0].name);
// console.log(arrage[1].name);
// console.log(arrage[2].name);

function getAverageAge(users) {
  return users.reduce((prev,user) => prev + user.age,0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arrage = [john,pete,mary];


console.log(getAverageAge(arrage));