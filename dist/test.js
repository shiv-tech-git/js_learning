'use strict'; // const sentences = [
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Super = function Super() {
  _classCallCheck(this, Super);

  this.name = 'Super';
  this.issuper = true;
};

Super.prototype.sneaky = 'Not recommended!';

var Sub = /*#__PURE__*/function (_Super) {
  _inherits(Sub, _Super);

  var _super = _createSuper(Sub);

  function Sub() {
    var _this;

    _classCallCheck(this, Sub);

    _this = _super.call(this);
    _this.name = 'Sub';
    _this.isSub = true;
    return _this;
  }

  return Sub;
}(Super);

var obj = new Sub();

for (var p in obj) {
  console.log("".concat(p, ": ").concat(obj[p]) + (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}