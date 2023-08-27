//! Метод map()
//TODO Метод map(callback) використовується для трансформації масиву.
//TODO Він викликає колбек - функцію для кожного елемента вихідного масиву,
//TODO а результат її роботи записує у новий масив, який і буде результатом виконання методу.
// массив.map((element, index, array) => {
//   // Тіло колбек-функції
// });

//! Особливості map(callback):
//?  - Поелементо перебирає оригінальний масив.
//?  - Не змінює оригінальний масив.
//?  - Результат роботи колбек-функції записується у новий масив.
//?  - Повертає новий масив однакової довжини з оригінальним.

// Його можна використовувати для того, щоб змінити кожен елемент масиву.
// Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// console.log(`Original Arrey: ${planets}`); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(`planetsInUpperCase: ${planetsInUpperCase}`); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(`planetsInLowerCase: ${planetsInLowerCase}`); // ['земля', 'марс', 'венера', 'юпітер']

// Оригінальний масив не змінився
// console.log(`Original Arrey still the same: ${planets}`); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек - функції,
// що робить код чистішим і простішим для сприйняття.

//* EXT1
// Припустимо, є масив цілих чисел. Потрібно створити на його основі новий масив тієї ж довжини, але такий,
// кожен елемент якого буде представляти результат множення відповідного елемента вихідного масиву на 2.

// Рішення цього завдання може виглядати так:
// const arr1 = [1, 2, 3];
// const arr2 = [];
//* Класичний for
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }
//* Метод перебирання forEach
// arr1.forEach(function (number) {
//     arr2.push(number * 2);
// });

// console.log(arr1);
// console.log(arr2);

//TODO Реалізація через map()
//* Якщо ж над завданням подумати, то виявиться, що у об'єктів типу Array в JavaScript є метод map().
//* Цей метод викликають у вигляді map(callback).Він створює новий масив, заповнений елементами масиву, для якого його викликають,
//* обробленими за допомогою переданої йому функції callback.

//? Ось як виглядає рішення цього завдання з використанням методу map():
// const arr1 = [1, 2, 3];
// const arr2 = arr1.map(function(item) {
//   return item * 2;
// });

// console.log(arr1);
// console.log(arr2);

//* Те саме, але з використанням анонімної стрілочної функції
// const arr1 = [1, 2, 3];
// const arr2 = arr1.map((item) => item * 2);

// console.log(arr1);
// console.log(arr2);

//! map() при роботі з масивом об'єктів\
// Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів.
// Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.
//* Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']