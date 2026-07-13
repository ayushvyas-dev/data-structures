const obj = {
  name: 'ayush',
  age: 21,
  myFunction: function () {
    console.log(this.name);
  },
};
obj.gender = 'male';
obj.myFunction();

console.log(obj.name);
console.log(obj['age']);
console.log(obj);

delete obj.gender;

// object.keys() .values() .entries()

// insert/remove/access O(1)
// search O(n)
// object.keys()/.values()/.entries() O(n)
