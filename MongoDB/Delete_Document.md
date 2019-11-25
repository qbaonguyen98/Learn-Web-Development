## The _remove()_ method

Accept 2 **_optional_** parameters

- deletion criteria: deletion criteria according to documents will be removed
- justOne: If value is true or 1, remove **_only 1_** document (first record)

## Syntax

    $ db.COLLECTION_NAME.remove(DELETION_CRITERIA)

or

    $ db.COLLECTION_NAME.remove(DELETION_CRITERIA, 1)

## Example
_This will remove all the documents whose title is 'Lession 1'_

    $ db.myCol.remove({ title: 'Lession 1' })

## Remove all documents

    $ db.myCol.remove({})

## _Important Note_

- You can NOT delete documents from a **_capped collection_**. The ONLY thing you can do is **_drop()_** the whole collection

