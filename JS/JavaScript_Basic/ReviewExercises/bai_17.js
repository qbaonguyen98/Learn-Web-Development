// Maximum possible sum of some of its k consecutive numbers 
// (numbers that follow each other in order.) of a given array of positive integers

function maxOfSumChain(arr,k){
    var arrPart = [];
    var maxSum = 0;
	for (i = 0; i <= arr.length-k; i++){
        arrPart = arr.slice(i, i+k);                  // cut k elements from left to right
        var sumOfArrPart = arrPart.reduce(function(a, b){
            return a + b;
        });
        if (sumOfArrPart > maxSum)  maxSum = sumOfArrPart;
    }  
    return maxSum; 
}

console.log(maxOfSumChain([1,3,2],2));

console.log(maxOfSumChain([1,3,2,6,2],3));