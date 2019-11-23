// viết hàm Kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str){
    var strBegin = str.slice(0, 4);
    if (strBegin === 'Java'){
        return true;
    } else {
        return false;
    }
}

console.log(startWith('JavaHello'));