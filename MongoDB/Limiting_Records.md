## To limit the records, use _limit()_ method

#### Syntax

    $ db.COLLECTION_NAME.find().limit(NUMBER)

_NUMBER is the number of documents that you want to be displayed_

#### Example
_This will display only two documents_

    $ db.mycol.find({}, {'title': 1, _id: 0}).limit(2)

_If you don't specify the NUMBER value, it will display all documents from the collection_

## _skip()_ method
used to skip the number of documents

    $ db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

_This will display only the second document_

    $ db.myCol.find({}, {'title': 1, _id: 0}).limit(1).skip(1)