let students = [
  {
    name: "Bob",
    age: 22,
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
  if(st.age > 25) {
    console.log(i)
  }
  return {...st, age: st.age + 1}
}

// Задача увеличить всем студентам возраст
// копию делаем, чтобы не изменился исходный.
console.log(students.map(st => ({...st, age: st.age + 1})))

// напишем свой map
// исходный массив параметром передаём
/*function map(array, func) {
  const newArr = [] // создаём новый массив
  for (let i = 0; i < array.length; i++) {
    newArr[i] = func(array[i])
  }
  return newArr;
}*/

console.log(map(students, st => ({...st, age: st.age + 1})))

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