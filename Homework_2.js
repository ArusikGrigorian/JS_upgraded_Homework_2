EX_1

function filterarr(arr, b){
let newArr = [];
  for(let i=0; i<arr.length; i++){       
    if(arr[i]>b){
      newArr.push(arr[i]);
    }
  }
  if (newArr.length === 0){
    return ("Such values do not exist");
  }
  return newArr;
}
filterarr([10, 25, 16, -5, 30, 15, 24], 16); 
       // [1, 1, 2, -3, 0, 8, 4, 0], 9



EX_2

function retfullevens(num1,num2){
let result=[];
let checknum;
  for(let i=num1; i<=num2; i++){
    let cndtn=true;
    checknum=i.toString().split("").map(Number);
    for(j=0; j<checknum.length; j++){
      if(checknum[j]%2!==0){
      cndtn=false;
      break;
      }
    }
    if(cndtn){
    result.push(i);
    }
  }
  if(result.length===0){
  return `Such numbers does not exist`;
  }
 return result.toString();
}
retfullevens(19,42);
           //99,199



EX_3

function getwrongindex(arr){
  for(let i=0; i<arr.length; i++) {
    if (arr[i]>arr[i+1]){
    return i+1;
    }
  }
  return -1;
}
getwrongindex([2, 12, 15, 48, 64]); 
            //[-9, -4, -4, 3, 12, 4, 5]



EX_4

function getmaxprod(arr){
let maxprod=-Infinity;
  for(let i=0; i<arr.length; i++){
    if(maxprod<arr[i]*arr[i+1]){
    maxprod=arr[i]*arr[i+1];
    }
  }
  return maxprod;
}
getmaxprod([2, 130, -5, 2, 20, -40, 1, 4, 40]);



EX_5

function retcount(arr){
  return (Math.max.apply(null,arr)-Math.min.apply(null,arr))-arr.length+1;
}
console.log(retcount([10, -5, 20, 8]));



EX_6

function geteachsum(arr){
let result=[];
  arr.forEach(function(item){
  result.push(item.reduce(function(a,b){return(a+b);}));
  });
  return result;
}
geteachsum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);
         //[[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]];
         //[[1], [2], [3], [4]];



EX_7

function reteachprod(arr){
  arr=arr.filter(item=>item%2!==0);
  arr=arr.map(item=>{return(item*arr.length);});
  return arr;
}
reteachprod([5, 4, 78, 0, -3, 7]);
          //[2, 4, 6, 88];
          //[];

