// Событие -> event
// Обработчик -> обработчик (handler), слушатель (listener), подписчик (subscriber)
// Браузер:
// Создаёт спец. объект, в котором собраны сведения о произошедшем событии (event, ev, e)
// Вызывает коллбэк (обработчик)
// Объект (e) по умолчанию передаётся в обработчик

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

// sm.onclick = () => alert('yo!') //литерал стрелочной функции. По ней в оперативной памяти будет создана функция в
                                // оперативной памяти. Самый простой способом создать обработчик.
// sm.onclick = null // отменяем обработчик

// const fn = () => alert('yo!')
// sm.onclick = fn //передали в обработчик имя функции

// console.dir(sm)

function onClickHandler(event) {
  event.stopPropagation() // остановить всплытие события
  console.dir(event.target.name)
  // console.dir(event.currentTarget.name)
}

/*
sm.onclick = onClickHandler
sm.onmouseover = onClickHandler
sm.onmouseleave = onClickHandler*/

md.onclick = onClickHandler

// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик, в процессе всплытия события
bg.onclick = () => alert('hey');