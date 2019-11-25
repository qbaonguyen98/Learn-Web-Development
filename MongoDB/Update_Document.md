## To update documents, use _update()_ or _save()_ method

_update()_: update the values in existing document
<br/>
<br />
_save()_: replace the existing document with the passed document

## _update()_

#### Syntax
    $ db.COLLECTION_NAME.update(SELECTION_CRITERIA, UPDATED_DATA)

#### Example
_This will set the new title 'Lession 2' of **a single document** whose title is 'Lession 1'_

    $ db.myCol.update(
        { 'title': 'Lession 1' }, 
        { $set: {'title': 'Lession 2'} }
    )

_To update multiple documents which satisfy the condition, set the parameter **multi** to true_

    $ db.myCol.update(
        { 'title: 'Lession 1' },
        { $set: {'title': 'Lession 2} },
        { multi: true }
    )

## _save()_

#### Syntax
    $ db.COLLECTION_NAME.save({ _id:ObjectId(), NEW_DATA })

#### Example
_This will replace the document with the _id = '5983548781331adf45ec5'_

    $ db.myCol.save(
        {
            '_id': ObjectId(5983548781331adf45ec5), 
            'title': 'New Topic',
            'by': 'Tutorials Point'
        }
    )