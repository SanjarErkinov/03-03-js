// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы в консоль.
// 2) Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите в консоль столбец тех элементов массива, которые больше 3-х, но меньше 10.
// 3) Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// 4) Дан массив [1,2,45,"hello", 233, 100, "world", 45]. Переберите массив так чтоб у вас в консоли были только числа
// 5) Составьте массив дней недели. С помощью цикла выведите выходные дни в консоль.


// #1
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }


// #2
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 3 && arr[i] < 10) console.log(arr[i]);;
// }


// #3
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//       console.log(num);
//     }
//   }


// #4
// let arr = [1,2,45,"hello", 233, 100, "world", 45];

// console.log(arr.filter(item => typeof item === "number"));


// #5
// let arr = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'сб' || arr[i] == 'вс') {
//         console.log(arr[i]);
//     }
// }