// let students = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// let newArr = students.map((item, index) => {
//   return item.name.toUpperCase();
// });
// console.log(newArr);
// let sozArr = ["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"];
// let newArr = sozArr.filter((item) => {
//   return item.length >= 5;
// });
// console.log(newArr);
// 1-masala
// let students = [1, 2, 3, 4, 8, 8, 9, 9, 9];
// let newArr = students.map((item, index) => {
//   return item * item;
// });
// console.log(newArr);
// 2-masala
// let sonArr = [1, 2, 3, -5, -10, 10, -9, 0, 15, -10];
// let newArr = sonArr.filter((item) => {
//   if (item <= 0) {
//     return item;
//   } else {
//   }
// });
// console.log(newArr);
// 4-masala
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let boshlangich = 0;
// let keyingi = 0;
// let nol = false;
// for (let num of arr) {
//   if (nol) {
//     boshlangich += num;
//   } else if (num !== 0) {
//     keyingi += num;
//   } else {
//     nol = true;
//   }
// }
// console.log(keyingi);
// console.log(boshlangich);
// 5-masala
// let arr = [1, 2, 3, 0, 4, 5, 6];
// let boshlangich = 0;
// let keyingi = 0;
// let nol = false;
// for (let num of arr) {
//   if (nol) {
//     boshlangich += num;
//   } else if (num !== 0) {
//     keyingi += num;
//   } else {
//     nol = true;
//   }
// }
// console.log("ocirgi uch element -", boshlangich);
// 6-masala
// let arr = [1, 2, 3, 4, 4];
// console.log(arr);
// 8-masala
function belgi(str) {
  let result = "";
  let arr = str.split("*");
  for (let i = 0; i < +arr[1]; i++) {
    result += `${arr[0]}`;
  }
  return result;
}
console.log(belgi("x * 10"));
