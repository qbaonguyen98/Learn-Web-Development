function findMaxDiff(arr) {
	/*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
    */
    if (arr.length <= 1){
        return 0;
    } else {
        var diffs = [];
        arr.reduce(function(a,b){
            diffs.push(Math.abs(a-b));
            return b;
        });
        var maxDiff = diffs[0];
        for (var value of diffs){
            if (value >= maxDiff)   maxDiff = value;
        }
        return maxDiff;
    }
}

console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));