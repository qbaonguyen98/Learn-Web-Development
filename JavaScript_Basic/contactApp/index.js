/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var fs = require('fs');
var readline = require('readline-sync');

var addNewContact = require('./addNewContact.js');
var changeContactInfo = require('./changeContactInfo.js');
var deleteContact = require('./deleteContact.js');
var findContact = require('./findContact.js');


function optionHandler(contacts){
    console.log('\r\n**********************************************************');
    console.log('*******************     CONTACT APP    *******************');
    console.log('**********************************************************');
    console.log('0. Show all contacts');
    console.log('1. Add new contact');
    console.log('2. Change contact info');
    console.log('3. Delete contact');
    console.log('4. Find contact');
    console.log('5. Save and close');
    var option = readline.question('Your choice is > ');
    switch (option){
        case '0':
            console.log(contacts);
            optionHandler(contacts)
            break;
        case '1': 
            contacts = addNewContact(contacts);
            optionHandler(contacts)
            break;
        case '2':
            contacts = changeContactInfo(contacts);
            optionHandler(contacts)
            break;
        case '3':
            contacts = deleteContact(contacts);
            optionHandler(contacts)
            break;
        case '4':
            contacts = findContact(contacts);
            optionHandler(contacts)
            break;
        case '5':
            save(contacts);
            break;
        default:
            console.log('Invalid Option !!!');
            optionHandler(contacts)
    }
}

function loadData(){
    return JSON.parse(fs.readFileSync('./data.json', {encoding: 'utf8'}));
}

function save(contacts){
    fs.writeFileSync('./data.json', JSON.stringify(contacts));
    console.log('Saved and Close !');
}

function main(){
    var contacts = loadData();
    optionHandler(contacts);
}

main();

 