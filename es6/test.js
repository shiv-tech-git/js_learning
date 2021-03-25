// const sentences = [
//   { subject: 'JavaScript', verb: 'is', object: 'great' },
//   { subject: 'Elephants', verb: 'are', object: 'large' },
// ];

// const { iteratee } = require("underscore");

// function say({ subject, verb, object }) {
//   console.log(`${subject} ${verb} ${object}`);
// }

// for (const s of sentences) {
//   say(s);
// }

// const Car = (function() {
//   const carProps = new WeakMap();

//   class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//       this._userGears = ['P', 'N', 'R', 'D'];
//       carProps.set(this, { userGear: this._userGears[0] });
//     }

//     get userGear() {
//       return carProps.get(this)._userGear;
//     }

//     set userGear(value) {
//       if(this._userGears.indexOf(value) < 0)
//         throw new Error(`Ошибочная передача: ${value}`);
//       carProps.get(this).userGear = value;
//     }

//     shift(gear) {
//       this.userGear = gear;
//     }
//   }

//   return Car;
// })();

// let myCar = new Car('Tesla', 'Model S')
// myCar.shift('R')

// class Super {
//   constructor() {
//     this.name = 'Super';
//     this.issuper = true;
//   }
// }

// Super.prototype.sneaky = 'Not recommended!';

// class Sub extends Super {
//   constructor() {
//     super();
//     this.name = 'Sub';
//     this.isSub = true;
//   }
// }

// const obj = new Sub();

// for (const p in obj) {
//   console.log(`${p}: ${obj[p]}${obj.hasOwnProperty(p) ? '' : ' (inherited)'}`);
// }

// obj.test = 'test'
// console.log(obj.test)

// const object = {
//   field1: 'test1',
//   field2: 'test2'
// }

// function* interrogate() {
//   const name = yield 'What is your name?';
//   const color = yield 'What is your favorite color';
//   return `${name}: favorite color is ${color}.`;
// }

// const it = interrogate();

// function test(arg) {
//   console.log(it.next(arg).value);
// }

// for (var i = 5; i >= 0; i--) {
//   setTimeout(function() {
//     console.log(i===0 ? "Start!" : i);
//   }, (5 - i)*1000);
// }

// function countdown(seconds) {
//   return new Promise(function(resolve, reject) {
//     for(let i=seconds; i>=0; i--) {
//       setTimeout(function() {
//         if(i>0) console.log(i + '...');
//         else resolve(console.log("Start!"));
//       }, (seconds-i)*1000);
//     }
//   });
// }

// const EventEmitter = require('events').EventEmitter;
// const log = require('why-is-node-running');
// var wtf = require('wtfnode');

// class Countdown extends EventEmitter {
//   constructor(seconds, superstitious) {
//     super();
//     this.seconds = seconds;
//     this.superstitious = !!superstitious;
//   }

//   go() {
//     const countdown = this;
//     const timeoutIds = [];
//     return new Promise(function(resolve, reject){
//       for(let i=countdown.seconds; i>=0; i--) {
//         timeoutIds.push(setTimeout(function() {
//           if(countdown.superstitious && i===13) {
//             timeoutIds.forEach(clearTimeout);
//             return reject(new Error("Принципиально это не считаем!"));
//           }
//           countdown.emit('tick', i);
//           if(i===0) resolve();
//         }, (countdown.seconds-i)*200));
//       }
//     });
//   }
// }

// function launch() {
//   return new Promise(function(resolve, reject){
//     let r = Math.random()
//     r = 0.3;
//     if( r < 0.5) return;
    
//     console.log("Lets go!");
//     setTimeout(function() {
//       resolve("On orbit!");
//     }, 1000);
//   });
// }

// function addTimeout(fn, timeout) {
//   if(timeout === undefined) timeout = 1000;
//   return function(...args) {
//     return new Promise(function(resolve, reject) {
//       const tid = setTimeout(reject, timeout, new Error("Promise period has been expired"));
//       fn(...args).then(function(msg) {resolve(msg);});
//     })
//   }
// }

// const c = new Countdown(5, true);

// c.on('tick', function(i) {
//   if(i>0) console.log(i + '...');
// });

// c.go()
//   .then(addTimeout(launch, 4*1000))
//   .then(function(msg){
//     console.log(msg);
//   })
//   .catch(function(err) {
//     console.log("Huston, we got a problem: " + err.message);
//   })

// const fs = require('fs');

// function nfcall(f, ...args) {
//   return new Promise(function(resolve, reject) {
//     f.call(null, ...args, function(err, ...args) {
//       if(err) return reject(err);
//       resolve(args.length < 2 ? args[0] : args);
//     });
//   });
// }

// function ptimeout(delay) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(resolve, delay);
//   });
// }

// function grun(g) {
//   const it = g();
//   (function iterate(val){
//     const x = it.next(val);
//     if(!x.done) {
//       if(x.value instanceof Promise) {
//         x.value.then(iterate).catch(err => it.throw(err));
//       } else {
//         setTimeout(iterate, 0, x.value);
//       }
//     }
//   })();
// }

// function* theFutureIsNow() {
//   const dataA = yield nfcall(fs.readFile, __dirname + '/a.txt');
//   const dataB = yield nfcall(fs.readFile, __dirname + '/b.txt');
//   const dataC = yield nfcall(fs.readFile, __dirname + '/c.txt');
  
//   yield ptimeout(4*1000);
//   yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
// }

// grun(theFutureIsNow);

// let txt = fs.readFile(__dirname +'/a.txt', "utf8", (err, data) => {
//   if (err) {
//     console.log(err.stack);
//     return;
//   }});



//   fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })

// console.log(__dirname +'/a.txt')

// const highlightActions = document.querySelectorAll('[data-action="highlight"]');
// highlightActions[0].dataset.containing = 'Жираф';
// highlightActions[0].dataset.casesensitive = "true";

// for(let a of highlightActions) {
//     a.addEventListener('click', evt => {
//         evt.preventDefault();
//         highlightParas(a.dataset.containing);
//     });
// }

// const removeHighlightActions = document.querySelectorall('[data-acrio="removeHighlights"]');
// for(let a of removeHighlightActions) {
//     a.addEventListener('click', evt => {
//         evt.preventDefault();
//         removeParaHighlights();
//     });
// }

// function refreshServerInfo() {
//     const req = new XMLHttpRequest();

//     req.addEventListener('load', function() {
//         console.log(this.responseText);
//         const data = JSON.parse(this.responseText);
//         const serverInfo = document.querySelector('.serverInfo');
//         Object.keys(data).forEach(p => {
//             const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"`);
//             for (let r of replacements) {
//                 r.textContent = data[p];
//             }
//         });
//     });
//     req.open('GET', 'http://localhost:7070', true);
//     req.send();
// }

// function refreshServerInfo() {
//     const $serverInfo = $('.serverInfo');
//     $.get('http://localhost:7070').then(
//         function(data) {
//             Object.keys(data).forEach(p => {
//                 $(`[data-replace="${p}"]`).text(data[p]);
//             });
//         }
//     )
// }
// setInterval(refreshServerInfo, 1000);
// console.log('test');

// const debug1 = require('./my_module.js')('First');
// const debug2 = require('./my_module.js')('Second');

// debug1("first is running.")
// debug2("second is running.")

// setTimeout(() => {
//     debug1("something happends 1");
//     debug2("something happends 2");
// }, 500);

 
// const fs = require('fs')

// const filenames = process.argv.slice(2)

// let counts = filenames.map(f => {
//     try {
//         const data = fs.readFileSync(f, {encoding: 'utf8'})
//         return `${f}: ${data.split('\n').length}`
//     } catch {
//         return `${f}: reading error`
//     }
// })

// console.log(counts.join('\n'))


const exec = require('child_process').exec

exec('ls -la', function(err, stdout, stderr) {
    if(err) return console.error('ls command error')

    stdout = stdout.toString();
    console.log(stdout)
    stderr = stderr.toString()

    if(stderr !== '') {
        console.error('Error:')
        console.error(stderr)
    }
})