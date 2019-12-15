function omitCharAt(str, n) {
	//Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
    //Lưu ý cho chuối 'abcd' :
    // 		element    'a'|'b'|'c'|'d'
    //		index 	    0	|	1	|	2	|	3
    //  n = 4 thì chuỗi trả về là 'bcd'
    //  n = 1 ------------------- 'acd'
    //  n = 2 ------------------- 'abd'
    var strArr = str.split('');
    if (n < str.length){
        strArr.splice(n, 1);
        return strArr.join('');
    } else {
        strArr.splice((n % str.length), 1);
        return strArr.join('');
    }
}

console.log(omitCharAt('abcd', 2));

console.log(omitCharAt('abcd', 4));