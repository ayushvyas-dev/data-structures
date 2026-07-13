const arr = [1, 2, 3, 'ayush', true];

arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}

// time complexities
// insert/remove from end O(1)
// insert/remove from beginning O(n)
// access O(1)
// search O(n)
// push/pop (1)
// shift/unshift/concat/slice/splice O(n)
// forEach/map/filter/reduce O(n)
// map,filter,reduce,concat, slice and splice
