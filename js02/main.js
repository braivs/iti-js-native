let students = [
  {
    name: "Bob",
    age: 26,
    isMarried: true,
    scores: 85
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },{
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
];

function addYear(st, i) {
  if (st.age > 25) {
    console.log(i)
  }
  return {...st, age: st.age + 1}
}

// неверный путь, когда берём исходный элемент и работаем с исходный. Без копии
/*function nullFt(st) {
  st = null
  return null
}*/

// Задача увеличить всем студентам возраст
// копию делаем, чтобы не изменился исходный.
// console.log(students.map(st => ({...st, age: st.age + 1})))
console.log(students.map(addYear)) // вариант с отедльной функцией

// напишем свой map
// исходный массив параметром передаём
/*function map(array, func) {
  const newArr = [] // создаём новый массив
  for (let i = 0; i < array.length; i++) {
    newArr[i] = func(array[i])
  }
  return newArr;
}*/

// рефакторим map
function map(array, func) {
  const newArr = []
  /*array.forEach(st => { // перебирает массив и для каждого элемента выполняет операцию
    newArr.push(func(st))
  })*/
  array.forEach((st, i) => { // Другой вариант. Может принимать второй параметр в качестве индекса.
    newArr[i] = func(array[i])
  })
  return newArr;
}

console.log(map(students, st => ({...st, age: st.age + 1})))

// как добавить свойство не испортив исходный массив
function addProp(elem) {
  return {...elem, isMarried: false}
}

// Напишем самодельный фильтр
function  filter(array, func) {
  const newArr = []
  /*for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      newArr[i] = func(array[i])
    }
  }*/
  // аналоги на ForEach
  array.forEach(st => {
    if (func(st) === true) {
      newArr.push(st)
    }
  })
  return newArr;

}

// Получить неженатых студентов
function getNotMarriedStudent(st) {
  return !st.isMarried
}
// console.log(filter(students, getNotMarriedStudent))
// более красиво:
console.log(filter(students, st => !st.isMarried))

// Напишем свой собственный Find
/*function find(array, func) {
  for (let i = 0; i < array.length; i++) {
    if(func(array[i]) === true) {
      return array[i]
    }
  }
}*/

// Псевдоистина и псевдоложь
function find(array, func) {
  for (let i = 0; i < array.length; i++) {
    if(func(array[i])) { // false -> 0, '', null, NaN, undefined ([], {}, '' - true)
      return array[i]
    }
  }
}

// const getAlex = s => s.name === 'Alex'
const getAlex = s => s.name === 'Alex' && s.age > 20 // если хотим искать по нескольким условияи
console.log(find(students, getAlex))