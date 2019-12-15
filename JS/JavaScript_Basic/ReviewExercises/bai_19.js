/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự của 1 chuỗi String cho trước
thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    if (str1.length !== str2.length){
        return false;
    } else{
        var sameCount = 0;                      // đếm kí tự giống nhau
        for(i=0; i<str1.length; i++){
            for(k=0; k<str2.length; k++){
                if (str1[i] === str2[k]){
                    str2 = str2.replace(str2[k], ''); // lấy 1 kí tự của str1, dò vs từng kí tự trong
                    sameCount++;                      // str2, thấy giống, bỏ kí tự đó ra khỏi str2
                    break;                            // tăng biến đếm lên, chuyển sang kí tự tiếp theo
                }                                     // của str1
            }
        }
        if (sameCount === str1.length)    return true;  // giả sử chuỗi dài 4, mà có 4 ký tự giống nhau
        return false;                                   // => can arrange
    }
}

console.log(rearrangeChar('fgagaawef23423','haefawf'));

console.log(rearrangeChar('afaw','afaw'));