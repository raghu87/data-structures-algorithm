function binarySearch(list, target) {
  first = 0;
  last = list.length - 1;

  while(first <= last) {
    midPoint = Math.floor((first + last) / 2)
    if(list[midPoint] == target) {
      return midPoint;
    } else if(list[midPoint] < target) {
      first = midPoint + 1;
    } else {
      last = midPoint - 1;
    }
  }
  return undefined;
}

function verify (idx) {
  if(idx != undefined) {
    console.log("Target found at idx: ",idx);
  } else {
    console.log("Target no found in list")
  }
}

numbers = [1,2,3,4,5,6,7,8,9,10];

result = binarySearch(numbers,12)
verify(result)

result = binarySearch(numbers,6)
verify(result)