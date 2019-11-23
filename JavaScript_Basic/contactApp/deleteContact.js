var readline = require('readline-sync');

var deleteContact = function(contacts) {
    console.log(contacts);
    var nameToDelete = readline.question('Enter name of contact to be deleted: ');
    for(var contact of contacts){
        if (nameToDelete === contact.name){
            console.log('Contact', contact, 'deleted');
            contacts.splice(contacts.indexOf(contact), 1);
            return contacts;
        }
    }
    console.log('No contact found !');
    console.log('Back to main menu ...');
    return contacts;
};

module.exports = deleteContact;