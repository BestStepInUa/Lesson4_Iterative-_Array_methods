//! Імперативний vs декларативний
// Розглянемо різницю підходів на прикладі базової операції фільтрації колекції.
// Напишемо код перебирання і фільтрації масиву чисел за певним критерієм.

// Імперативний підхід
const numbersImrative = [1, 2, 3, 4, 5];
const filteredNumbersImrative = [];

for (let i = 0; i < numbersImrative.length; i += 1) {
  if (numbersImrative[i] > 3) {
    filteredNumbersImrative.push(numbersImrative[i]);
  }
}

console.log(filteredNumbersImrative); // [4, 5]

// Метод filter() приховує в собі логіку перебирання колекції і викликає callback-функцію, яку ми йому передаємо для кожного елемента, повертаючи масив елементів, що відповідають критерію.

// Декларативний підхід
const numbersDeclarative = [1, 2, 3, 4, 5];
const filteredNumbersDeclarative = numbersDeclarative.filter(value => value > 3);
console.log(filteredNumbersDeclarative); // [4, 5]