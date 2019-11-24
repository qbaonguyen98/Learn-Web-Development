## Some data types in MondoDB

#### String
    must be UTF-8 valid

#### Integer
    can be 32 bit or 64 bit depending upon your server

#### Boolean
    value: true/false

#### Double
    for floating point values

#### Min/Max keys
    used to compare a value against the lowest and highest BSON elements

#### Array
    you got it

#### Timestamp
    this can be handy for recording when a document has been modified or added.

#### Object
    used for embedded documents

#### NUll
    store null value

#### Symbol
    used identically to a string; however, it's generally reserved for languages that use a specific symbol type

#### Date
    store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it

#### Object ID
    store the document’s ID

#### Binary data
    store binary data

#### Code
    store JavaScript code into the document

#### Regular expression
    store regular expression