var readline = require('readline-sync');
var xoaDauTV = require('./xoaDauTiengViet.js');

var findContact = function(contacts) {
    var keyword = xoaDauTV(readline.question('Enter keyword to find contact: ', {encoding: 'utf8'}));
    var stdKeyword = keyword.toLowerCase();
    var keywordLength = stdKeyword.length;
    var resultFound = false;
    for (var contact of contacts){
        // base on name
        for (i=0; i<(contact.name.length - keywordLength + 1); i++){
            var subName = xoaDauTV(contact.name.slice(i, (i+keywordLength)));         
            if (stdKeyword === subName.toLowerCase()){
                console.log('Suggested result: ', contact);
                resultFound = true; //continue;
            }
        }
        // base on number
        for (i=0; i<(contact.phoneNumber.length - keywordLength + 1); i++){
            var subPhoneNumber = contact.phoneNumber.slice(i, (i+keywordLength));           
            if (stdKeyword === subPhoneNumber){
                console.log('Suggested result: ', contact);
                resultFound = true; //continue;
            }
        }
    }
    if (!resultFound){
        console.log('No results !');
        console.log('Back to main menu ...');
    }
    return contacts;
};
module.exports = findContact;