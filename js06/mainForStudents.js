console.log('hi')

const students = [
  {
    name: 'Bob',
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: 'Alex',
    age: 21,
    isMarried: true,
    scores: 90
  },
  {
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: 'John',
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    name: 'Helen',
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    name: 'Ann',
    age: 20,
    isMarried: false,
    scores: 105
  },
];

const user = {
  name: 'Bob',
  age: 23,
  friends: ['Alex', 'Nick', 'John']
}

//1. Создайте поверхностную копию объекта user
console.log('=== 1 ===')
let copyUser = {...user}; // new Object()


//Проверка:
console.log(user === copyUser) //false
console.log(user.friends === copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
console.log('=== 2 ===')
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user === copyUser) //false
console.log(user.friends === deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students]; // new Array()

//Проверка:
console.log(copyStudents === students) // false
console.log(copyStudents[1] === students[1]) // true

//4*. Полная (глубокая) копия массива students (map)
console.log('=== 4 ==')
let deepCopyStudents = students.map(st => ({...st}));

//Проверка:
console.log(deepCopyStudents === students) //false
console.log(deepCopyStudents[1] === students[1]) //false

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

console.log('== 5 ==')
//5. Отсортируйте deepCopyStudents по алфавиту (sort)
function sortFn(a, b) {
  switch (a.name > b.name) {
    case true:
      return 1
    case false:
      return -1
    default:
      return 0
  }
}

let sortByName = students.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(sortByName);

console.log('== 5a ==')
//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortByScores = deepCopyStudents.sort((a,b) => b.scores - a.scores);
console.log(sortByScores);

console.log('== 6 ==')
//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(st => st.scores >= 100);
console.log(bestStudents)

console.log('== 6a ==')
//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

console.log('== 6b ==')
//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор )
// let newDeepCopyStudents = topStudents.concat(deepCopyStudents); //более старый вариант
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents]
console.log(newDeepCopyStudents)

console.log('== 7 ==')
//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(st => !st.isMarried);
console.log(notMarriedStudents)

console.log('== 8 ==')
//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(st => st.name);
console.log(studentsNames)

console.log('== 8a ==')
//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(',');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(' ');
console.log(namesWithComma)

console.log('== 9 ==')
//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(st => ({...st, isStudent: true}));
console.log(trueStudents)

console.log('== 10 ==')
//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st );
console.log(studentsWithMarriedNick)

console.log('== 11 ==')
//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(st => st.name = 'Ann');
console.log(ann)

console.log('== 12 ==')
//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = newDeepCopyStudents.reduce((acc, st) => acc.scores > st.scores ? acc : st);
console.log(bestStudent)

console.log('== 13 ==')
//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends =  (students) => {
  let friends = students.map( st => st.name );
  let newStudents = students.map( st => {
    let friendsNoSelf = friends.filter(fr => st.name !== fr)
    return {...st, friendsNoSelf}
  } )
  return newStudents;
}
console.log('==14==')
console.log(addFriends(students));