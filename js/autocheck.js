//* TASK 4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//       return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

//* TASK 5

// const orderedItems = [1, 2, 3];

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//     console.log(totalPrice);
//   });

//   // Change code above this line
//   return totalPrice;
// }

// calculateTotalPrice(orderedItems);

//* TASK 6

// const numbersArr = [1, 2, 3];

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray(numbersArr, 1));

//* TASK 7

// const arr1 = [24, 12, 27, 3];
// const arr2 = [12, 8, 3, 36, 27];

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (el) {
//     if (secondArray.includes(el)) {
//       commonElements.push(el)
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements(arr1, arr2)); // [ 12, 27, 3 ]

//* TASK 10\

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const arr = [12, 8, 3, 36, 27];

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => totalPrice += item);

//   return totalPrice;
// }

// console.log(calculateTotalPrice(arr));

//* TASK 11

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   });
//   return filteredNumbers;
// }

// const numbersArr = [1, 2, 3];
// console.log(filterArray(numbersArr, 1));

//* TASK 12

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }

// const arr1 = [24, 12, 27, 3];
// const arr2 = [12, 8, 3, 36, 27];

// console.log(getCommonElements(arr1, arr2));

//* TASK 13

// function changeEven(numbers, value) {
//   const changedArr = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       changedArr.push(number + value)
//     } else {
//       changedArr.push(number);
//     }
//   });
  
//   return changedArr;
// }

// const arr = [1, 2, 3, 4];

// console.log(changeEven(arr, 2));

//* TASK 14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

//* TASK 15
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67
//   },
// ];

// const titles = books.map(book => book.title);
// console.log(titles);


//* TASK 17-18
// const getUserNames = users => users.map(user => user.name);
// const getUserEmails = users => users.map(user => user.email);

//* TASK 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 === 1);

//* TASK 20

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, arr) => arr.indexOf(genre) === index);

//* TASK 21

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

//* TASK 22
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);


//* TASK 24
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

//* TASK 25
const getFriends = users => users.flatMap(user => user.friends).filter((friend, index, arr) => arr.indexOf(friend) === index);

//* TASK 26
const getActiveUsers = users => users.filter(user => user.isActive === true);


//* TASK 30
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);

//* TASK 31
const isEveryUserActive = users => users.every(user => user.isActive === true);