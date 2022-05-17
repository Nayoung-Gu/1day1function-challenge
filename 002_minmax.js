const arr = [52, 273, 32, 103, 275, 24, 55];

// 최솟값 구하는 함수
const min = function(arr){
    let result = arr[0];
    for(let value of arr){
        if(value < result){
            result = value;
        }
    }
    return result;
}

const min2 = function(arr){
  return arr.sort((a,b)=> a-b)[0]
}

// 최댓값 구하는 함수
const max = function(arr){
    let result = arr[0];
    for (let value of arr){
        if (value > result){
            result = value;
        }
    }
    return result;
}

const max2 = function(arr){
  return arr.sort((a,b)=> b-a)[0]
}