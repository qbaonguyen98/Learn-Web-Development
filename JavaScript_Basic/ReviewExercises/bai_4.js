// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
	var max = a;
  if (b > max)	max = b;
  if (c > max){
  	return c;
  } else {
  	return max;
  }
}

console.log(findMax(-6, 5, 4));