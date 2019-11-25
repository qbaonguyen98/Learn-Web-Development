## Indexes support the efficient resolution of queries !

- Without indexes, MongoDB must **_scan every document_** of a collection to select the satisfied documents

- Indexes are special data structures, that store a small portion of the data set in an easy-to-traverse form

- The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index

## To create an index, use _ensureIndex()_ method

#### Syntax

    $ db.COLLECTION_NAME.ensureIndex({ key: 1 })

- **_key_** is the name of the field on which you want to create index
- **_1_** is for ascending (descending = -1)

#### You can create index on multiple fields

    $ db.myCol.ensureIndex({ 'title': 1, 'description': -1 })

#### _ensureIndex()_ also accepts _some optional parameters_
_See details in the file: /images/ensureIndex_optional_params.png_

- background (Boolean)
- unique (Boolean)
- name (string)
- dropDups (Boolean)
- sparse (Boolean)
- expireAfterSeconds (integer)
- v (index version)
- weights (document)
- default_language (string)
- language_override (string)