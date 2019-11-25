## To sort documents, use _sort()_ method

#### Syntax

    $ db.COLLECTION_NAME.find().sort({ field: SORTING_ORDER })

SORTING_ORDER accepts 2 values:

- 1: ascending (Default)
- -1: descending

#### Example
_This will display the documents sorted by title in the descending order_

    $ db.myCol.find({}, { 'title': 1, _id: 0 }).sort({ 'title': -1 })