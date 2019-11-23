// STRICT comparison: => compare both type and content
        // identity
        var a = [1, 2];
        var b = [1, 2];
        console.log(a === b);   // false, a and b refer to diferrent objects

        var a = '2000';
        var b = '100';
        console.log(a === b);   // false, 2 equal strings MUST have the same length,
                                // same sequence of character, same character in
                                // corresponding position

        // non-identity
        console.log(100 !== 100);
        console.log('1' !== 1);

// TYPE-CONVERTING comparison: => convert to the same type before compare
        // equality
        console.log('2' == 2);  // true, type is converted

        // inequality
        console.log('3' != 3);  // false