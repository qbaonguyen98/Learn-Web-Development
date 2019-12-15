/****************************************************************** */
/*       Giải thích đồng bộ và không đồng bộ trong lập trình        */
/****************************************************************** */

//                                  **************
//                                  **   SYNC   **
//                                  **************
//  Time line
//  |--------------------|-------------------------|------------------------------------>
//  task 1              task 1 DONE                task 2 DONE
//                      => task 2                  => task 3



//                                  **************
//                                  **   ASYNC   **
//                                  **************
//  Time line
//  |---------|----------|---------------------|---------------------------------------->
//  task 1    task 2     task 1 DONE           task 2 DONE
//

// nói đơn giản: ASYNC là "trong lúc task này đang chạy thì làm task khác"


// example:     fs.readFile
var fs = require('fs');

console.log('START');
fs.readFile('./fsReadFileExample.txt', {encoding: 'utf8'}, function(err, data){
    console.log(data);
});
console.log('END');

/*
    the result is:
                        START
                        END
                        ASYNC example
    
    >>> That is because while readFile process is running, the log command is excecuted
*/