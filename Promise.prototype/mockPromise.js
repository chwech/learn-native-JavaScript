/**
 * 2019年7月2日12:17:26
 * 实现Promise, 须符合Promise A+规范
 */
var PENDING = 'pending';
var RESOLVED = 'resolved';
var REJECTED = 'rejected';

var status = '[[PromiseStatus]]';
var value = '[[PromiseValue]]';

function MockPromise (fn) {
  // 初始状态
  this[status] = PENDING;
  this[value] = void 0;
  var _this = this
  var resolve = function mockResolve (value) {
    if (_this[status] === PENDING) {
      _this[status] = RESOLVED
      _this[value] = value
    }
  }
  var reject = function mockReject (value) {
    if (_this[status] === PENDING) {
      _this[status] = REJECTED
      _this[value] = value
    }
  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MockPromise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled === 'function') {
    if (this[status] === RESOLVED) {
      onFulfilled(this[value])
    }
  }
  if (typeof onRejected === 'function') {
    if (this[status] === REJECTED) {
      onRejected(this[value])
    }
  }
}

