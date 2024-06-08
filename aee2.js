let arrx= [11,22,33,44,55,66];
console.log(arrx);
arrx.push(99); // to add the element
console.log(arrx);
arrx.pop(); // delete the element
console.log(arrx);

let arrnx= [2,3,4];
let arrnx2= [78,79,80];
console.log(arrx.concat(arrnx, arrnx2));



//reduce
 
let arred= [1,2,3,4,5,6];
function sum(arred){
    let sum=0;
    for (i=0;  i< arred.length; i++){
        sum=sum+arred[i];
    }
    return sum;
}
 console.log(sum(arred));

let sumval= arred.reduce(function func(sum, curr){
    sum= sum+curr;
    return sum;
},0);


