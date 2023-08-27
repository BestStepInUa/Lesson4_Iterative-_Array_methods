//! Метод find()
//TODO Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то
//! Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється.
//TODO Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });

//! Особливості find():
//?  - Не змінює оригінальний масив.
//?  - Поелементо перебирає оригінальний масив.
//?  - Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//?  - Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.

//! Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості.
//* Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find(option => option.label === "blue")); // { label: 'blue', color: '#2196F3' }
console.log(colorPickerOptions.find(option => option.label === "pink")); // { label: 'pink', color: '#E91E63' }
console.log(colorPickerOptions.find(option => option.label === "white")); // undefined

console.log(colorPickerOptions.find(option => option.color === "#3F51B5"));  // { label: 'indigo', color: '#3F51B5' }
console.log(colorPickerOptions.find(option => option.color === "#F44336"));  // { label: 'red', color: '#F44336' }
console.log(colorPickerOptions.find(option => option.color === "#FFFFFF")); // undefined