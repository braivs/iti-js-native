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
console.log('==1==')
let copyUser = {...user};

//Проверка:
console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

//2. Полная (глубокая) копия объекта user
console.log('==2==')
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

//3. Поверхностная копия массива students
console.log('==3==')
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents)
console.log(students.length === copyStudents.length)

//4*. Полная (глубокая) копия массива students (map)
console.log('==4==')
let deepCopyStudents = students.map((s) => {
  return {...s}
});

//Проверка:
console.log(deepCopyStudents === students)
// console.log(???)

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
console.log('==5==')
let copyStudents5 = [...students]
let sortByName = copyStudents5.sort((a, b) => b.name > a.name ? -1 : 1);
console.log(sortByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
console.log('==5a==')
let copyStudents5a = [...students];
let sortByScores = copyStudents5a.sort((a, b) => b.scores - a.scores);
console.log(sortByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
console.log('==6==')
let copyStudents6 = [...students];
let bestStudents = copyStudents6.filter(st => st.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log('==6a==')
let bestStudentsCopy = [...bestStudents]
let topStudents = bestStudentsCopy.slice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор )
console.log('==6b==')
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
console.log('==7==')
let notMarriedStudents = students.filter(st => st.isMarried === false);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
console.log('==8==')
let studentsNames = students.map(st => st.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
console.log('==8a==')
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
console.log('==9==')
let trueStudents = students.map(st => {
  return {...st, isStudent: true}
});
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
console.log('==10==')
let studentsWithMarriedNick = students.map(st => {
  if (st.name === 'Nick') {
    return {...st, isMarried: true}
  } else return {...st}
});
let studentsWithMarriedNick2 = students.map(st => st.name === 'Nick' ? {...st, name: true} : {...st})
console.log(studentsWithMarriedNick)
console.log(studentsWithMarriedNick2)

//11. Найдите студента по имени Ann (find)
console.log('==11==')
let ann = students.find(st => st.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
console.log('==12==')
let bestStudent = students.reduce((acc, cur) => cur.scores > acc.scores ? cur : acc);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
console.log('==13==')
let scoresSum = students.reduce((acc, cur) => acc + cur.scores, 0);
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (arr) => {
  console.log('==14==')
  let friends = students.map(st => st.name)
  let studentWithFriends = arr.map((s) => {
    let friendsWithNoSelf = friends.filter(st => s.name !== st)
    return {...s, friends: friendsWithNoSelf}
  })
  return (studentWithFriends)
}
console.log(addFriends(students));









