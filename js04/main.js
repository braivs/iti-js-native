const tlID_1 = '34jf-76kg'// v1()
const tlID_2 = '57jf-89kd'// v1()

const todoLists = [
  {
    id: tlID_1,
    title: 'What to learn',
    filter: 'all',
    tasks: [
      {},
      {}
    ]
  },
  {
    id: tlID_2,
    title: 'What to buy',
    filter: 'all',
    tasks: [
      {},
      {}
    ]
  },
]

const tasks = {
  [tlID_1] : [ // '34jf-76kg'
    {name: 'HTML', isDone: true},
    {name: 'Redux', isDone: true}
  ],
  [tlID_2]: [ // '57jf-89kd'
    {name: 'Weed', isDone: true},
    {name: 'Potato', isDone: true}
  ],
  [3 + 2]: []
}

console.log(tasks)
console.log(tasks[todoLists[0].id][1].name)
console.log(tasks[tlID_1][1].name)

// метод reduce
let numbers = [23, 45, 35, 78, 56, 98]
console.log (numbers.reduce((acc, el) => acc + el, 0)) // 335 //сумма элементов
console.log (numbers.reduce((acc, el) => acc > el ? acc : el, 0)) // найти максимальный элемент массива

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

function findAlex(acc, el) {
  if(el.name === 'Alex') {
    acc = el
  }
  return acc
}

console.log(students.reduce(findAlex, null))

// фильтрация массива через reduce
function getBestStudent(acc, el) {
  if (el.scores >= 100) {
    acc.push(el)
  }
  return acc
}
console.log(students.reduce(getBestStudent, []))

//аналог map добавить +10 очков каждому
function addScores(acc, el) {
  acc.push({...el, addScores: el.scores + 10})
  return acc
}

console.log(students.reduce(addScores, []))
