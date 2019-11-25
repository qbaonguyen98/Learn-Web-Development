## What does _projection_mean in MongoDB ?
    Projection means selecting only the necessary data rather than selecting the whole data of the document

## This concept is applied when you use _find()_ method
In MongoDB, when you execute _find()_ method, then it _displays all fields_ of a document
<br />
<br />
To limit this, you need to set a list of fields with value 1 or 0
<br />
- 1: show the field
- 0: hide the field

## Example
_This will only display the 'title' field of documents_

    $ db.myCol.find({}, { 'title': 1, _id: 0 })