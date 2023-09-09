function sort(arr) {
  let l = arr.length;

  for (let i = 0; i < l - 1; i++) {

    for (let k = 0; k < l - 1 - i; k++) {

      if (arr[k] > arr[k + 1]) {
        let n = arr[k + 1];
        arr[k + 1] = arr[k];
        arr[k] = n;
      }
    }
  }


  return arr;
}

const arrr = [0, 1, 2, 3, 4, 2, 2, 2, 3, 0, 41, 4, 51, 2222];
console.log(sort(arrr));

const oldArray = [1, 12, 23, 4, 5];
const newArray = oldArray.slice();
newArray.pop();
console.log(oldArray);
console.log(newArray);

const video = ['video', 'movie', 'films'],
  blogs = ['wordpress', 'blogger'],
  internert = [...video, ...blogs, 'vk'];
console.log(internert);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 3, 4];

log(...num);
const ar2 = ['1','b'];
const newArr2 = [...ar2];
newArr2.push('s');
console.log(ar2);
console.log(newArr2);

const ob = {
  one: 1,
  two: 2
};
const newQ = {... ob};
newQ.tree = 3;
console.log(newQ);
console.log(ob);