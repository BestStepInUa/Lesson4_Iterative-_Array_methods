//! Метод reduce()
//TODO Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату,
//TODO як акумулятор.

// масив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

//! Особливості reduce():
//?  - Не змінює оригінальний масив.
//?  - Поелементо перебирає оригінальний масив.
//?  - Повертає все, що завгодно.
//?  - Робить все, що завгодно.

//* Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total1 = [2, 7, 3, 14, 6].reduce((previousValue, number, index) => {
//     console.log(`Ітерація ${index}: previousValue = ${previousValue}, number = ${number}, return = ${previousValue + number}`);
//     return previousValue + number;
// });
// console.log(total1); // 32

// const total2 = [2, 7, 3, 14, 6].reduce((previousValue, number, index) => {
//     console.log(`Ітерація ${index}: previousValue = ${previousValue}, number = ${number}, return = ${previousValue + number}`);
//     return previousValue + number;
// }, 0);
// console.log(total2); // 32

// const total3 = [2, 7, 3, 14, 6].reduce((previousValue, number, index) => {
//     console.log(`Ітерація ${index}: previousValue = ${previousValue}, number = ${number}, return = ${previousValue + number}`);
//     return previousValue + number;
// }, 5);
// console.log(total3); // 37

//* Пояснення:
// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32

// Перший параметр колбек - функції(previousValue) - це акумулятор, тобто проміжний результат.
// Значення, яке поверне колбек - функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного».
// У повсякденних завданнях його застосування зводиться до роботи з числами.

//! reduce() при роботі з масивом об'єктів
//TODO Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.

//* EXP
//* Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

//! Просунутий reduce()
//* EXP
//* Припустимо у нас є наступна задача: з масиву постів твіттера окремого користувача необхідно порахувати суму усіх лайків.
//* Можна перебрати циклом for або forEach, кожне з цих рішень вимагатиме написання додаткового коду. А можна використовувати reduce.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// const tweets1 = [
//   { id: "000", likes: 10, tags: ["html", "js", "nodejs"] },
//   { id: "001", likes: 20, tags: ["js", "nodejs"] },
//   { id: "002", likes: 30, tags: ["js", "nodejs", "react"]},
//   { id: "003", likes: 40, tags: ["css", "react"] },
//   { id: "004", likes: 50, tags: ["html", "css"] },
// ];

// console.log(countLikes(tweets1));

//* Помітили властивість tags у кожного поста? Продовжуючи тему reduce, ми зберемо в масив усі теги, які зустрічаються в постах.

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

//* Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//* для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

//* Після того, як ми зібрали всі теги з постів, добре б було порахувати кількість унікальних тегів в масиві. І знову reduce стане в пригоді.

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets);
console.log(tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Початкове значення акумулятора - це порожній об'єкт {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);