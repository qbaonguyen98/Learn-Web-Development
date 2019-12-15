// Viết hàm lấy extension của một file

function getExtensionFilename(filename) {
    var len = filename.length;
    var dotPosition = 0;
    for (i=len-1; i>=0; i--){
        if(filename[i] === '.'){
            dotPosition = i;
            break;
        }
    }
    return filename.slice((dotPosition+1));
}

console.log(getExtensionFilename('C:\Users\NamHandsome\Desktop\index.html')).to.equal('html');