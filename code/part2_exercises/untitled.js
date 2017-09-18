require('../part1_exercises/support')
require('./support')
let fs = require('fs')
var _ = require('ramda')
var Task = require('data.task')
var curry = _.curry
// const compose = f => g => x => f(g(x))
// const toUpperCase = x => x.toUpperCase()
// const toLowerCase = x => x.toLowerCase()
// const exclaim = x => x + '!'
// const shout = compose(exclaim)(toUpperCase)
// console.log(shout('send in the clowns'))
const head = x => x[0]
// const reverse = reduce(function (acc, x) {
//   return [x].concat(acc)
// }, [])
// const last = compose(head, reverse)
// const tail = x => x[x.length - 1]
// var reverse = reduce(function (acc, x) {
  // return [x].concat(acc)
// }, [])
// var last = compose(head)(reverse)
// var loudLastUpper = compose(exclaim)(compose(toUpperCase)(compose(head)(reverse)));
// last = compose(head)(toUpperCase)
// var angry = compose(exclaim, toUpperCase)
// console.log(last(['jumpkick', 'roundhouse', 'uppercut']))
// console.log(loudLastUpper(['jumpkick', 'roundhouse', 'uppercut']));
// console.log(angry(['jumpkick', 'roundhouse', 'uppercut']))
// var snakeCase = function(word) {
//   return word.toLowerCase().replace(/\s+/ig, '_');
// };
// var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase)
// console.log(snakeCase('world Is'))
// var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '))
// console.log(initials('hunter stockton thompson'))
// var angry = compose(exclaim, toUpperCase);
// var latin = compose(map(angry), reverse);

// console.log(latin(['frog', 'eyes']));
// error
// var dasherize = compose(join('-'), map(toLowerCase), trace('after split'), split(' '), replace(/\s{2,}/ig, ' '))

// console.log(dasherize('The world is a vampire'))
// var id = function (x) {
  // return x
// }
// var f = function (x) {
//   return x === 4
// }
// var dd = compose(id, f)
// var dd1 = compose(f, id)
// console.log(dd == dd1)
// console.log(compose(id, f) == compose(f, id));

// const capitalize = s => toUpperCase(head(s)) + toLowerCase(tail(s))
// console.log(capitalize("smurf"))
// const strLength = s => s.length
// console.log(strLength("smurf"))

// const joiner = curry((what, xs) => xs.join(what))
// const match = curry((reg, s) => s.match(reg))
// const replace = curry((reg, sub, s) => s.replace(reg, sub))
// let Container = function (x) {
  // this.__value = x
// }
// Container.of = function (x) {
  // return new Container(x)
// }
// console.log(Container.of(3))
// console.log(Container.of('hotdog'))
// console.log(Container.of(Container.of({
//   name: 'Yoda'
// })))
// Container.prototype.map = function (f) {
//   return Container.of(f(this.__value))
// }
// console.log(Container.of(5).map(function (two) {
//   return two + 2
// }))
// console.log(Container.of('Flamethrower').map(function (s) {
//   return s.toUpperCase()
// }))
// console.log(Container.of('bombs').map(_.concat(' away')).map(_.prop('length')))
let Maybe = function (x) {
  this.__value = x
}
Maybe.of = function (x) {
  return new Maybe(x)
}
// Maybe.prototype.isNothing = function (x) {
  // return (this.__value === null || this.__value === undefined)
// }
// Maybe.prototype.map = function (f) {
  // return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
// }

// console.log(Maybe.of('Malkovich Malkovich').map(match(/a/ig)))
// console.log(Maybe.of(null).map(match(/a/ig)))
// console.log(Maybe.of({
//   name: 'Boris'
// }).map(_.prop('age')).map((add(10))))
// console.log(Maybe.of({
//   name: 'Dinah',
//   age: 14
// }).map(_.prop('age')).map(add(10)))
// let map = curry(function (f, any_functor_at_all) {
//   return any_functor_at_all.map(f)
// })
// let safeHead = function (xs) {
//   return Maybe.of(xs[0])
// }
// let streetName = compose(map(_.prop('street')), safeHead, _.prop('addresses'))
// console.log(streetName({
//   addresses: []
// }))
// console.log(streetName({
//   addresses: [{
//     street: 'shady Ln.',
//     number: 4201
//   }]
// }))
// let withdraw = curry(function (amount, account) {
//   return account.balance >= amount
//   ? Maybe.of({
//   	balance: account.balance - amount
//   }) : Maybe.of(null)
// })
// let remainingBalance = (a) => a
// let updateLedger = (a) => a
// let finishTransaction = compose(remainingBalance, updateLedger)
// let getTwenty = compose(map(finishTransaction), withdraw(20))
// console.log(getTwenty({
//   balance: 200.00
// }))
// console.log(getTwenty({
//   balance: 10.00
// }))
// let maybe = curry(function (x, f, m) {
//   return m.isNothing() ? x : f(m.__value)
// })
// getTwenty = compose(maybe("You're broke", finishTransaction), withdraw(20))
// console.log(getTwenty({
//   balance: 200.00
// }))
// console.log(getTwenty({
//   balance: 10.00
// }))
// let Left = function (x) {
  // this.__value = x
// }
// Left.of = function (x) {
  // return new Left(x)
// }
// Left.prototype.map = function (f) {
  // return this
// }
// let Right = function (x) {
  // this.__value = x
// }
// Right.of = function (x) {
  // return new Right(x)
// }
// Right.prototype.map = function (f) {
  // return Right.of(f(this.__value))
// }
// console.log(Right.of('rain').map(function (str) {
//   return 'b' + str
// }))
// console.log(Left.of('rain').map(function (str) {
//   return 'b' + str
// }))
// console.log(Right.of({
//   host: 'localhost',
//   port: 80
// }).map(_.prop('host')))
// console.log(Left.of('rolls eyes...').map(_.prop('host')))
// let moment = require('moment')
// let getAge = curry(function (now, user) {
//   let birthDate = moment(user.birthdate, 'YYYY-MM-DD')
//   if (!birthDate.isValid()) return Left.of('Birth date could not be parsed')
//   return Right.of(now.diff(birthDate, 'years'))
// })
// console.log(getAge(moment(), {
//   birthdate: '1995-02-12'
// }))
// console.log(getAge(moment(), {
//   birthdate: 'July 4, 2001'
// }))
// let concat = curry(function (str, world) {
//   return str.concat(world)
// })
// let fortune = compose(concat('If you survive, you will be'), add(1))
// let zoltar = compose(map(console.log), map(fortune), getAge(moment()))
// zoltar({
//   birthdate: '2005-12-12'
// })
// zoltar({
//   birthdate: 'balloons!'
// })
// let either = curry(function (f, g, e) {
//   switch (e.constructor) {
//     case Left: return f(e.__value)
//     case Right: return g(e.__value)
//   }
// })
// zoltar = compose(console.log, either(id, fortune), getAge(moment()))
// zoltar({
//   birthdate: '2005-12-12'
// })
// zoltar({
//   birthdate: 'balloons!'
// })
// let getFromStorage = function(key) {
// 	return function() {
// 		return localStorage[key]
// 	}
// }
let IO = function (f) {
  this.__value = f
}
//  IO.of = function (x) {
//    return new IO(function () {
//      return x
//    })
//  }
// let io_window = new IO(function () {
//   return window
// })
// io_window.map(function (win) {
//   return win.innerWidth
// })
// io_window.map(_.prop('location')).map(_.prop('href')).map(_.split('/'))
// let $ = function (selector) {
//   return new IO(function () {
//     return document.querySelectorAll(selector)
//   })
// }
// $('#myDiv').map(head).map(function (div) {
//   return div.innerHTML
// })
// let url = new IO(function () {
//   return window.location.href
// })
// let toPairs = compose(map(split('=')), split('&'))
// let params = compose(toPairs, last, split('?'))
// let eq = key => key
// let findParam = function (key) {
//   return map(compose(Maybe.of, filter(compose(eq(key), head)), params), url)
// }
// console.log(findParam('searchTerm').__value)

// IO = function(f) {
//   this.unsafePerformIO = f
// }
// IO.prototype.map = function(f) {
//   return new IO(_.compose(f, this.unsafePerformIO))
// }
// const reduce = (reducer, initial, arr) => {
//   let acc = initial
//   for(let i = 0; {length} = arr, i < length; i++) {
//     acc = reducer(acc, arr[i])
//   }
//   return acc
// }
// const filter = (fn, arr) => reduce((acc, curr) => fn(curr) ? acc.concat([curr]) : acc, [], arr)
// let idLaw1 = _.map(id)
// let idLaw2 = id
// console.log(idLaw1(Container.of(2)))
// console.log(idLaw2(Container.of(2)))
// let Container = function (x) {
//   this.__value = x
// }
// Container.of = function (x) {
//   return new Container(x)
// }
// var compLaw1 = _.compose(_.map(_.concat(' world')), _.map(_.concat(' cruel')))
// var compLaw2 = _.map(_.compose(_.concat(' world'), _.concat(' cruel')))

// console.log(compLaw1(Container.of('Goodbye')))
// => Container(' world cruelGoodbye')

// console.log(compLaw2(Container.of('Goodbye')))
// => Container(' world cruelGoodbye')
// let topRoute = _.compose(Maybe.of, _.reverse)
// let bottomRoute = _.compose(_.map(_.reverse), Maybe.of)
// console.log(topRoute('hi'))
// console.log(bottomRoute('hi'))
// var nested = Task.of([Right.of('pillows'), Left.of('no sleep for you')])
// console.log(map(map(map(toUpperCase)), nested))
// Either
// Either = function () {}
// Either.of = function (x) {
  // return new Right(x)
// }
IO = function (f) {
  this.unsafePerformIO = f
}

IO.of = function (x) {
  return new IO(function () {
    return x
  })
}
IO.prototype.map = function (f) {
  console.log(this.unsafePerformIO())
  return new IO(_.compose(f, this.unsafePerformIO()))
}
// console.log(IO.of('tetris').map(_.concat(' master')), IO.of(100).unsafePerformIO())
// console.log(Maybe.of(1336).map(add(1)))
// console.log(Task.of({
    // id: 2,
// }).map(_.prop('id')))
// console.log(Either.of('The past, present and future walk into a bar...').map(_.concat('it was tense')))

// let readFile = function (filename) {
//   return new IO(function () {
//     return fs.readFileSync(filename, 'utf-8')
//   })
// }
// let print = function (x) {
//   return new IO(function () {
//     console.log(x)
//     return x
//   })
// }
// let cat = _.compose(_.map(print), readFile)
// let cat = _.compose(_.map(print), readFile)
// console.log('yay chill ', cat('target.txt'))
// let catFirstChar = _.compose(_.map(_.head), cat)
// console.log(catFirstChar('target.txt'))
let safeProp = _.curry(function (x, obj) {
  return new Maybe(obj[x])
})
let safeHead = safeProp(0)
let firstAddressStreet = _.compose(_.map(_.map(safeProp('street'))), _.map(safeHead), safeProp('addresses'))
console.log(firstAddressStreet({
  addresses: [{
    street: {
      name: 'Mulburry',
      number: 8402
    },
    postcode: 'WC2N'
  }]
}).__value.__value.__value)
Maybe.prototype.isNothing = function (f) {
  return (this.__value === null || this.__value === undefined)
}
Maybe.prototype.join = function () {
  return this.isNothing() ? Maybe.of(null) : this.__value
}
let mmo = Maybe.of(Maybe.of('nunchucks'))
console.log(mmo.join())
IO.prototype.join = function () {
  let thiz = this
  return thiz.unsafePerformIO().unsafePerformIO()
}
let ioio = IO.of(IO.of('pizza'))
console.log(ioio.join())
let ttt = Task.of(Task.of(Task.of('sewers')))
console.log(ttt.join())
let chain = _.curry(function (f, m) {
  console.log(m)
  return m.map(f).join()
})
firstAddressStreet = _.compose(_.join, _.map(safeProp('street')), _.join, _.map(safeHead), safeProp('addresses'))
console.log(firstAddressStreet({
  addresses: [{
    street: {
      name: 'Mulburry',
      number: 8402
    },
    postcode: 'WC2N'
  }]
}))

firstAddressStreet = _.compose(chain(safeProp('street')), chain(safeHead), safeProp('addresses'))
firstAddressStreet = safeHead(safeProp('addresses'))
console.log(firstAddressStreet({
  addresses: [{
    street: {
      name: 'Mulburry',
      number: 8402
    },
    postcode: 'WC2N'
  }]
}))
