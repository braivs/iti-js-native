const array = [22, 34, 12, 1, 56, 99, 0, 65, 76]

// сортировка пузырьком:
// 01
/*for(let i = 0; i < array.length; i++) {
  if(array[i] > array[i + 1]){
    let temp = array[i]
    array[i] = array[i + 1]
    array[i + 1] = temp
  }
}*/

// в результате однократного прогона, самое большое число должно всплыть наверх (взлететь наверх, стать последним)
// за один прогон отсортируется только одно число

// 02: оптимизация, когда сравниваем последнюю пару: за один раз ставим и последний и предпоследний член массива.
// А когда самый последний, то уже сравнивниваем с underfind
/*for(let i = 0; i < array.length - 1; i++) {
  if(array[i] > array[i + 1]){
    let temp = array[i]
    array[i] = array[i + 1]
    array[i + 1] = temp
  }
}*/

// 03 цикл. Это базовый алгоритм сортировки пузырьком
/*for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i]
      array[i] = array[i + 1]
      array[i + 1] = temp
    }
  }
}*/

//04 синтаксическая оптимизация, с деструкторизацией.
/*for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
    }
  }
}*/

// 05 логическая оптимизация. Сокращаем внутренний цикл, на колличество уже отсортированных последних чисел.
/*for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1 - j; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
    }
  }
}*/

// по убыванию
for (let j = 0; j < array.length - 1; j++) {
  for (let i = 0; i < array.length - 1 - j; i++) {
    if (array[i] < array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]]
    }
  }
}
// console.log(array)

// sort
// сортирует в порядке возрастания символов в таблице юникода
const strings = ['Bob', 'Donald', 'игорь', 'Alex', 'redux', '900', 'Юрий']
console.log(strings.sort())

// c числами по умолчанию будет накладка. Потому что sort будет сортировать числа как строки по юникоду
const numbers = [1000, 2, 1, 90];
console.log(numbers.sort())

// чтобы работать с числами в sort надо передать функцию сравнения (compate function)
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
/*function compareFn(a, b) {
  if (a <= b) {
    return - 1 //любое отрицательное число, значит ничего менять не надо
  }
  else {
    return 1 // поменять местами
  }
}*/

// console.log(numbers.sort(compareFn))

//оптимизация со стрелочной функцией
const compareFn = (n, m) => n - m
console.log(numbers.sort(compareFn))

// сортировка массива объектов
const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: "alex",
    age: 23,
    isMarried: true,
    scores: 89
  },
  {
    name: "Helge",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 121
  },
];

//пишем по каким свойствам массива хотим провести сортировку
// console.log(students.sort((a,b) => {a.scores - b.scores}))

// в обратном порядке
// чейнинг, последовательное применение методов. Такое возможно делать, когда метод возвращает массив.
console.log(students
  .sort((a,b) => a.scores - b.scores)
  .reverse()
)

// по именам. Сравнения строк без вычитания.
console.log(students.sort((a,b) => a.name < b.name ? -1 : 1))

//регистро независимо
console.log(students.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))


