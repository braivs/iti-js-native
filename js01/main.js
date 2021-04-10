// Copy objects and arrays

const student = {
  name: 'Alex',
  age: 23,
  friends : ['Bob', 'Nick'] // -> #a55
} // -> @ -> #42
const studentPlus = {} // -> @ -> #43
student.age = 24

const studentYo = student // #42

studentYo.age = 35

const copyStudent = {...student, // -> @ -> #44
  friends: [...student.friends] // -> #a56
} // -> @ -> #44
console.log(student === studentPlus) // false

student.friends.push('Ann')

console.log(copyStudent)


// 1. Константой является операция присваивания
// 2. Если это объект (array & func), то в переменной хранится ссылка
// на этот объект ("адрес" этого объекта)

function fn(num) {
  const pow = Math.pow(num, 2)
  const sqrt = () => console.log(pow)
  return [pow, sqrt]
}
console.log((fn(10)))

const [numPow, logNumPow] = fn(10)
const [num1Pow, log1NumPow] = fn(15)
