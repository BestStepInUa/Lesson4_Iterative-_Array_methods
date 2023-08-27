//! Метод findIndex()
//TODO Метод findIndex(callback) - це сучасна заміна методу indexOf().
//TODO Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність.
//TODO Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.

// масив.findIndex((element, index, array) => {
//   // Тіло колбек-функції
// });

//! Особливості findIndex():
//?  - Не змінює оригінальний масив.
//?  - Поелементо перебирає оригінальний масив.
//?  - Повертає індекс першого елемента, що задовольняє умову, тобто, коли колбек повертає true.
//?  - Якщо жоден елемент не задовольняє умову, тобто для всіх елементів колбек повернув false, метод повертає -1.

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.findIndex(option => option.label === "blue")); // 2
console.log(colorPickerOptions.findIndex(option => option.label === "pink")); // 3
console.log(colorPickerOptions.findIndex(option => option.label === "white")); // -1