function linearSearch(list,target) {
  var res = undefined;
  // console.log(list,target)
  list.map((val,idx)=> {
    if(val == target) {
      // console.log(idx,val);
      res = idx;
    }
  })
  return res;
}

function verify (idx) {
  if(idx != undefined) {
    console.log("Target found at idx: ",idx);
  } else {
    console.log("Target no found in list")
  }
}

numbers = [1,2,3,4,5,6,7,8,9,10];

result = linearSearch(numbers,12)
verify(result)

result = linearSearch(numbers,6)
verify(result)