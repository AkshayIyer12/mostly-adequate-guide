require('./support.js')
const compose = (f, g) => x => f(g(x))
const toUpperCase = x => x.toUpperCase()
const toLowerCase = x => x.toLowerCase()
 const exclaim = x => x + '!'
// const shout = compose(exclaim)(toUpperCase)
// console.log(shout('send in the clowns'))
const head = x => x[0]
//const tail = x => x[x.length-1]
var reverse = reduce(function (acc, x) {
  return [x].concat(acc)
}, [])
var last = compose(head, reverse)
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
var id = function(x) {
  return x;
};
var f = function(x) {
  return x === 4;
};
// var dd = compose(id, f)
// var dd1 = compose(f, id)
// console.log(dd == dd1)
// console.log(compose(id, f) == compose(f, id));

// let capitalize = s => toUpperCase(head(s)) + toLowerCase(tail(s))
// console.log(capitalize("smurf"))