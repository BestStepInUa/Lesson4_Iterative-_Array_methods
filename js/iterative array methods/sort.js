//! Метод sort()
//TODO Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

//! Особливості sort():
//?  - Сортує і змінює вихідний масив.
//?  - Повертає змінений масив, тобто посилання на відсортований вихідний.
//?  - За замовчуванням сортує за зростанням.
//?  - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.

//* EXP 1 Такий масив чисел буде відсортований за зростанням.
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

//* Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично.
//* Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

//* EXP 2
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// //* Масив рядків сортується за алфавітом.
// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// //* Водночас порядковий номер великих літер менший, ніж у малих.
// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Через те, що сортується вихідний масив, порушується принцип чистоти функцій
// і не можна зручно створити декілька похідних колекцій на основі вихідної.
// Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням.
// Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//! Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек - функцію з двома параметрами.
// Це функція порівняння(compare function), порядок сортування залежить від її результату.
// Метод sort() буде викликати її для двох довільних елементів.

// массив.sort((a, b) => {
//   // Тіло колбек-функції
// });

// a - перший елемент для порівняння.
// b - другий елемент для порівняння.

//TODO Сортування за зростанням
//* Якщо виклик compareFunction(a, b) повертає будь - яке від'ємне значення, тобто a менше b, сортування поставить a перед b.
//* Це сортування за зростанням.
// const scores1 = [27, 2, 41, 4, 7, 3, 75];
// const ascendingScores = [...scores1].sort((a, b) => a - b);
// console.log(ascendingScores); // [2,  3,  4, 7, 27, 41, 75]

//TODO Сортування за спаданням
//* Якщо виклик compareFunction(a, b) повертає будь - яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a.
//* Це сортування за спаданням.
// const scores2 = [61, 19, 19, 74, 35, 92, 56];
// const descendingScores = [...scores2].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//? Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного,
//? але відсортує їх по відношенню до всіх інших елементів.Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.

//! Свій порядок сортування рядків
//TODO Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

//* firstString.localeCompare(secondString)

//* Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0

// - Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// - Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// - Якщо рядки однакові, повертається нуль.

// Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

//! Сортування об'єктів
// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості.

//* EXP
// Наприклад, у нас є група студентів з балами за тест.
// Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder);