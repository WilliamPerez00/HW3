function max(iterable, key) {
    var maximum = x;
    for (var x in iterable) {
      var a = key(x);
      if ( a >= key(maximum)) {
        maximum = x;
      }
    }
    return maximum;
  }

const reverser=(x) -> -x;

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      prev.append (value);
    } else if (typeof prev == 'object' && prev != null) {
      prev [key] = value;
    } else {
      key = value;
    }
    return null;
  }

async function promise_me(truthy) {
const a = new Promise((resolve, reject) => {
    console.log(1)
    resolve(5)
})
console.log(2)
console.log(3)
console.log(4)
const five = ______ ______
console.log(five)
return five
}