// Easy
function median(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(median([1, 4, 7]));
  console.log(median([10, 5]));
  console.log(median([1.5, 3, 2.5, 1]));
// Medium
let nums = [4,5,6,7,0,1,2]
let firstNums = (numArr, target) => numArr.indexOf(target)
console.log(firstNums(nums,2))

// Hard
// I created to functions one that turns the background red and one that turns it white
const chgColor = () =>{
  document.body.style.background = 'red';
}
const changeColor = () =>{
  document.body.style.background = 'white';
}
// Not sure if you wanted me to do it the way the challenge says but this worked as well