/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // find occurrences of array elements
    var occurrences = arr.reduce(function(a, b){
        if (a[b] === undefined){
            a[b] = 1;
        } else {
            a[b]++;
        }
        return a;
    }, {});
    // find max occurrence
    var maxOccurrence = 0;
    for (var ele in occurrences){
        if (occurrences[ele] > maxOccurrence)    maxOccurrence = occurrences[ele];
    } 
    // push elements with max occurence to return array
    var outputArr = [];
    for (var ele in occurrences){
        if (occurrences[ele] === maxOccurrence){
            outputArr.push(parseInt(ele, 10));
        }
    }
    return outputArr;
}

console.log(findMostFrequent([0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26]));