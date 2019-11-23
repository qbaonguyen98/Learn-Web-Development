// trả về phần tử thỏa mãn điều kiện cho trước (find function)
// chỉ cần gặp phần tử thỏa, trả về liền, không quan tâm các phần tử sau

//SYNTAX:
/*
            arr.find(function(item){
                //code to find
                return x;    // true of false
            });
*/

// example 1
var numbers = [1, 2, 3, 4];
var evenNumber = numbers.find(function(x){
    return x % 2 === 0;
});

console.log(evenNumber);            // only 2

// example 2

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
	var evenNum = array.find(function(num){
  	return num % 2 === 0;
  }); 
  return evenNum;
}

console.log(findFirstEvenNumber([7, 9, 0, -2]));
console.log(findFirstEvenNumber([7, 9, 3]));