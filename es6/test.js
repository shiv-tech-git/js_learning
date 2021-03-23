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

for (var i = 5; i >= 0; i--) {
  setTimeout(function() {
    console.log(i===0 ? "Start!" : i);
  }, (5 - i)*1000);
}
