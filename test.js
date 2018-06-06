// function A(name){
//   this.name = name
// }

// function B(age, ...otherargs){
//   A.apply(this, otherargs)
//   this.age = age
// }

// //new A()的__proto__指向A的prototype，也就是B.prototype.__proto__指向A的prototype
// B.prototype = new A()

// B.prototype.constructor = B

// var b = new B(13, "eric")

// console.log(b.__proto__.__proto__ === A.prototype)

// console.log(b.__proto__.__proto__.__proto__ === Object.prototype)


// Function.__proto__       Object



// function* flatten(arr){
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] instanceof Array){
//       yield* flatten(arr[i])
//     }else{
//       yield arr[i]
//     }
//   }
// }


// Array.prototype.flat = function (){
//   var flatten = function*(arr){
//     for(let i = 0 ; i < arr.length ; i++){
//       if(arr[i] instanceof Array){
//         yield* flatten(arr[i])
//       }else{
//         yield arr[i]
//       }
//     }
//   }
//   return Array.from(flatten(this))
// }

// let a = [1,2,3,4,[1,2,34,[2,3,45,[5]]]]

// console.log(a.flat())


// Object.prototype.keyss = function (){
//   var temp = function*(){
//     for(var i in this){
//       if(this.hasOwnProperty(i)){
//         yield i
//       }
//     }
//   }
//   return Array.from(temp.call(this))
// }

// Object.prototype.valuess = function (){
//   var temp = function*(){
//     for(var i in this){
//       if(this.hasOwnProperty(i)){
//         yield this[i]
//       }
//     }
//   }
//   return Array.from(temp.call(this))
// }

// Object.prototype[Symbol.iterator] = function* (){
//   for(let i in this){
//     yield this[i]
//   }
// }

// let a = {name: "eric", age: 123}

// let s = a[Symbol.iterator]()

// // console.log(a.keyss(), a.valuess())
// for(let i of a){
//   console.log(i)
// }

// console.log(s.next())

// console.log(s.next())

// function* f() {
//   for(var i = 0; true; i++) {
//     var reset = yield i;
//     if(reset) { i = -1; }
//   }
// }
// 1 1 2 3 5
// var g = f();

// console.log(g.next()) // { value: 0, done: false }

// console.log(g.next()) // { value: 1, done: false }

// console.log(g.next(true)) // { value: 0, done: false }


// Number.prototype.fib = function(){
//   var fibn = function*(n){
//     if(n == 1 || n == 2){
//       yield 1
//     }else{
//       yield* fibn(n-1)
//       yield* fibn(n-2)
//     }
//   }
//   return Array.from(fibn(this)).length
// }

// for(var i = 1;i<40;i++){
//   console.log(i.fib())
// }



// var flat = function(arr){
//   let final = []
//   for(let i = 0 ; i < arr.length ; i++){
//     if(arr[i] instanceof Array){
//       final = final.concat(flat(arr[i]))
//     }else{
//       final.push(arr[i])
//     }
//   }
//   return final
// }

// console.log(flat([1,2,3,[1,2,3,[2,3]]]))

// var a = [1,2,3,[1,2,3,[2,3]]]

// function flatten(arr){
//   var flat = function*(a){
//       for(let i=0,length = a.length;i<length;i++){
//           if(a[i] instanceof Array){
//               yield* flat(a[i])
//             }else{
//               yield a[i]
//             }
//         }
//     }
//     return Array.from(flat(arr))
// }

// function flatten(arr){
//   return arr.reduce((a, b) => {
//     if(b instanceof Array){
//       return a.concat(flatten(b))
//     }else{
//       return a.concat(b)
//     }
//   },[])
// }

// function flatten(arr){
//   return arr.join(',').split(',').map((i) => parseInt(i))
// }

// function flatten(arr){
//   while(arr.some(i => Array.isArray(i))){
//     arr = [].concat(...arr)
//   }
//   return arr
// }

// function flatten(arr){
//   return arr.reduce((a,b) => {
//       return a.concat(b instanceof Array ? flatten(b) : b)
//     },[])
// }


// for(var i = 1;i<40;i++){
//   console.log(fib(i))
// }
// function fib(n){
//   if(n == 1 || n == 2){
//     return 1
//   }else{
//     return fib(n-1) + fib(n-2)
//   }
// }

// console.log(fib(40))

var request = require('request');

request('http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the baidu homepage.
  }
})





















