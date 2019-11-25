## The _createCollection()_ method

#### Syntax
$ db.createCollection(name, [options])

    - name (String): name of collection to be created
    - options (Document): specify options about memory size and indexing

    - options has the following format:
        {
            capped (Boolean): If true, the collection has fixed size (so you also have to specify the 'size' parameter). It automatically overwrites its oldest entries when it reaches its maximum size

            autoIndexid (Boolean): If true, automatically create index on _id field (default = false)

            size (number): size (in bytes) of a capped collection

            max (number): maximum number of documents allowed in the capped collection
        }

_While inserting the document, MongoDB first checks size field of capped collection, then it checks max field_

#### Example
    $ db.createCollection("myCollection")

#### Show all collections in database
    $ show collections

#### Another example
    $ db.createCollection("myCol", { capped : true, autoIndexId : true, size : 6142800, max : 10000 } )

_In MongoDB, you don't need to create collection. MongoDB creates collection automatically, when you insert some document_


