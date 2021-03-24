// const sentences = [
//   { subject: 'JavaScript', verb: 'is', object: 'great' },
//   { subject: 'Elephants', verb: 'are', object: 'large' },
// ];

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

function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for(let i=seconds; i>=0; i--) {
      setTimeout(function() {
        if(i>0) console.log(i + '...');
        else resolve(console.log("Start!"));
      }, (seconds-i)*1000);
    }
  });
}

const EventEmitter = require('events').EventEmitter;

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }

  go() {
    const countdown = this;
    const timeoutIds = [];
    return new Promise(function(resolve, reject){
      for(let i=countdown.seconds; i>=0; i--) {
        timeoutIds.push(setTimeout(function() {
          if(countdown.superstitious && i===13) {
            timeoutIds.forEach(clearTimeout);
            return reject(new Error("Принципиально это не считаем!"));
          }
          countdown.emit('tick', i);
          if(i===0) resolve();
        }, (countdown.seconds-i)*200));
      }
    });
  }
}

const c = new Countdown(14, true);

c.on('tick', function(i) {
  if(i>0) console.log(i + '...');
});

c.go()
  .then(
    function(){
      console.log('Start!');
    },
    function(err) {
      console.log(err.message);
    })