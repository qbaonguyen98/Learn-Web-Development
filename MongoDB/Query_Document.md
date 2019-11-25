## To query data from collections, use the _find()_ method

#### Syntax

    $ db.COLLECTION_NAME.find()

_It will display all the documents in a non-structured way_

_To display results in formatted way, use:_

    $ db.COLLECTION_NAME.find().pretty()

## Query the document on basis of some conditions

| Operation             | Syntax                    |  Example                                                  |
| :----                 | :----                     | :----                                                     |
| Equal                 | { key: value }            | db.myCol.find({ 'by': 'tutorials point' }).pretty()       |
| Less Than             | { key: {$lt: value} }     | db.myCol.find({ 'likes': {$lt: 50} }).pretty()            |
| Less Than or Equal    | { key: {$lte: value} }    | db.myCol.find({ 'likes': {$lte: 50 }}).pretty()           |
| Greater Than          | { key: {$gt: value} }     | db.myCol.find({ 'likes': {$gt: 50} }).pretty()            |
| Greater Than or Equal | { key: {$gte: value} }    | db.myCol.find({ 'likes': {$gte: 50} }).pretty()           |
| Not Equal             | { key: {$ne: value} }     | db.myCol.find({ 'likes': {$ne: 50} }).pretty()            | 

## _AND_ condition

    $ db.myCol.find(
        {
            $and: [
                { key1: value1 }, 
                { key2: {$lt: value2} }
            ]
        }
    ).pretty()

## _OR_ condition

    $ db.myCol.find(
        {
            $or: [
                { key1: {$gt: value1} }, 
                { key2: value2 }
            ]
        }
    ).pretty()

## Combine _AND_ and _OR_

Example statement: if ( (likes > 10) && (by == 'Reus' || title == 'Overview') )

    $ db.myCol.find(
        { 'likes': {$gt: 10}},
        $or: [
            { 'by': 'Reus' },
            { 'title': 'Overview' }
        ]
    )
