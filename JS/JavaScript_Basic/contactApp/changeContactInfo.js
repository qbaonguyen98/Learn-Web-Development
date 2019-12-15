var readline = require('readline-sync');

function changeContactInfo(contacts){
    console.log(contacts);
    var nameToChange = readline.question('Enter name of contact to be changed: ');
    for (var contact of contacts){
        if(nameToChange === contact.name){
            var newName = readline.question('Enter new name: ');
            var newPhone = readline.question('Enter new phone number: ');
            
            if (newName === '' && newPhone === ''){
                console.log('Contact unchanged');
            }
            else if (newName === '' && newPhone !== ''){
                console.log('Contact name unchanged');
                contact.phoneNumber = newPhone;
                console.log('Phone number changed to', newPhone);
            }
            else if (newName !== '' && newPhone === ''){
                console.log('Contact phone number unchanged');
                contact.name = newName;
                console.log('Name changed to', newName);
            }
            else{
                contact.name = newName;
                console.log('Name changed to', newName);
                contact.phoneNumber = newPhone;
                console.log('Phone number changed to', newPhone);
            }
            return contacts;
        }
    }
    console.log('Incorrect name !');
    console.log('Back to main menu...');
    return contacts;
}

module.exports = changeContactInfo;