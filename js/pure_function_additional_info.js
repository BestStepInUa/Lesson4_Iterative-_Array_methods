//! Pure function (чиста функція)
//TODO Функція, яка відповідає цим двом вимогам, називається чистою:

//TODO - Вона завжди, при виклику її з одними й тими ж аргументами, повертає один і той же результат (в ході виконання функції не змінюється нічого за її межами)
//TODO - При виконанні функції не відбувається ніяких побічних ефектів.


// function circleArea(radius){
//   return radius * radius * 3.14
// }

// console.log(circleArea(5));

//*---------------------------------//
//? Не чиста - бо повертає різні значення прикожному виклику

// let counter = (function(){
//   let initValue = 0
//   return function(){
//     initValue++;
//     return initValue
//   }
// })()

// console.log(counter());
// console.log(counter());
// console.log(counter());

//*---------------------------------//
//? Не чиста - бо змінює глобальну змінну

// let femaleCounter = 0;
// let maleCounter = 0;
// function isMale(user){
//   if(user.sex === 'man'){
//     maleCounter++;
//     return true
//   }
//   return false
// }

//! Навіщо потрібні чисті функції?
//* Чому ми проводимо межу між звичайними і чистими функціями ?
//* Справа в тому, що у чистих функцій є безліч сильних сторін.
//* Їх застосування дозволяє підвищити якість коду. Поговоримо про те, що нам дає використання чистих функцій.

//TODO -/- 1 -/- Код чистих функцій зрозуміліший, ніж код звичайних функцій, його легше читати
// Кожна чиста функція націлена на виконання конкретного завдання.Вона, при виклику з одними і тими ж вхідними даними,
// завжди повертає один і той же результат. Це серйозно покращує читабельність коду і спрощує його документування.

//TODO -/- 2 -/- Чисті функції краще піддаються оптимізації при компіляції їх коду
// Припустимо, є такий фрагмент коду:

// for (int i = 0; i < 1000; i++){
//     console.log(fun(10));
// }
// Якщо fun - це функція, яка не є чистою, то під час виконання цього коду цю функцію доведеться викликати у вигляді fun(10) 1000 разів.

// А якщо fun - це чиста функція, то компілятор зможе оптимізувати код. Він може виглядати приблизно так:

// let result = fun(10)
// for (int i = 0; i < 1000; i++){
//     console.log(result);
// }

//TODO -/- 3 -/- Чисті функції легше тестувати
// Тести чистих функцій не повинні бути залежними від контексту.
// Коли пишуть модульні тести для чистих функцій, таким функціям просто передають якісь вхідні значення і перевіряють те,
// що вони повертають, на відповідність певним вимогам.

// Ось простий приклад.Чиста функція приймає у вигляді аргументу масив чисел і додає до кожного елементу цього масиву число 1,
// повертаючи новий масив. Ось її скорочене представлення:

// function incrementNumbers(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//      newArray.push(array[i] + 1);
//     }
//     console.log(newArray);
//     return newArray;
// }

// const incrementNumbers = function(array){
//   let newArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//      newArray.push(array[i] + 1);
//     }
//     console.log(newArray);
//     return newArray;
// }

// let list = [1, 2, 3, 4, 5];
// incrementNumbers(list);
// assert.equals(incrementNumbers(list), [2, 3, 4, 5, 6])

// Якщо функція не є чистою, то для її перевірки потрібно врахувати безліч зовнішніх чинників, здатних вплинути на її поведінку.
// В результаті протестувати подібну функцію буде складніше, ніж чисту.

//! Кешування результатів роботи функцій
// Припустимо, є чиста функція, яка виглядає так:
// function computed(str) {
//     // Suppose the calculation in the funtion is very time consuming
//     console.log('2000s have passed')
      
//     // Suppose it is the result of the function
//     return 'a result'
// }

// Для того щоб підвищити продуктивність роботи коду нам не завадить вдатися до кешування результатів обчислень які виконуються у функції.
// При виклику такої функції з тими ж параметрами, з якими вона вже викликалася, повторно виконувати ті ж обчислення не доведеться.
// Замість цього відразу ж будуть повернуті їх результати, збережені раніше в кеші.

// Як оснастити функцію кешем ? Для цього можна написати особливу функцію, яку можна використовувати в якості обгортки для цільової функції.
// Цій особливій функції ми дамо ім'я cached.
// Ця функція приймає цільову функцію у вигляді аргументу і повертає нову функцію.
// У функції cached можна організувати кешування результатів виклику обертатися нею функції з використанням звичайного об'єкта Object
// або за допомогою об'єкта, що представляє собою структуру даних Map.

//? Ось як може виглядати код функції cached:
// function computed(str) {
//     // Suppose the calculation in the funtion is very time consuming
//     console.log('2000s have passed')
      
//     // Suppose it is the result of the function
//     return 'a result'
// }

// function cached(fn){
//   // Create an object to store the results returned after each function execution.
//   const cache = Object.create(null);

//   // Returns the wrapped function
//   return function cachedFn (str) {

//     // If the cache is not hit, the function will be executed
//     if ( !cache[str] ) {
//         let result = fn(str);

//         // Store the result of the function execution in the cache
//         cache[str] = result;
//     }

//     return cache[str]
//   }
// }

// let cachedComputed = cached(computed);

// console.log(cachedComputed('same parameters'));
// console.log('|-----------------------|')
// console.log(cachedComputed('same parameters'));
// console.log('|-----------------------|')
// console.log(cachedComputed('same parameters'));

//! «Ледачі» функції