//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){
    if (str === '') return 'empty string'; 
    var countP = 0;
    var countT = 0;
    for(i=0; i<str.length; i++){
        if (str[i] === 'p'){
            countP++;
        }
        if (str[i] === 't'){
            countT++;
        }
    }
    if (countP === countT){
        return true;
    } else {
        return false;
    }
}

console.log(equal_pt('paatpss'));