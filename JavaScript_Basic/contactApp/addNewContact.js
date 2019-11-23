var readline = require('readline-sync');

var addNewContact = function(contacts) {
    var name = readline.question('Enter new contact name: ');
    //console.log(name);
    var phoneNumber = readline.question('Enter new contact phone number: ');
    contacts.push({name: name, phoneNumber: phoneNumber});
    return contacts;
};

module.exports = addNewContact;