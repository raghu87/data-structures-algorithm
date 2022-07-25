function recursiveBinarySearch (list,target) {
  if(list.length == 0){
    return false;
  } else {
    midPoint = Math.floor(list.length / 2)

    if(list[midPoint] == target) {
      return true;
    } else {
      if(list[midPoint] < target) {
        return recursiveBinarySearch(list.slice(midPoint+1), target);
      } else {
        return recursiveBinarySearch(list.slice(0,midPoint),target);
      }
    }
  }
}

function verify (result) {  
  console.log("Target found: ",result)  
}

numbers = [1,2,3,4,5,6,7,8,9,10];

result = recursiveBinarySearch(numbers,20)
verify(result)

result = recursiveBinarySearch(numbers,6)
verify(result)