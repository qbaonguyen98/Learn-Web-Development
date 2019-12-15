/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr){
    var maxSub = 0;
    for (i=0; i<arr.length; i++){       // lấy từng phần tử trong arr
        for (k=0; k<arr.length; k++){   // lấy 1 phần tử đó trừ cho các phần tử còn lại
            var temp = Math.abs(arr[i] - arr[k]);
            if (temp > maxSub){
                maxSub = temp;
            }  
        }
    }
    return maxSub;
}

console.log(findmaxDiff([13, 2, 3, 8, 9]));

console.log(findmaxDiff([1, 2, 3, 18, 9]));