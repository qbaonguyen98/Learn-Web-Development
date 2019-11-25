## To insert data into collection, use _insert()_ or _save()_ method.

#### Syntax

    $ db.COLLECTION_NAME.insert(document)

#### Example

###### Insert 1 document

    db.myCol.insert({
        title: 'MongoDB Overview', 
        description: 'MongoDB is no sql database',
        by: 'tutorials point',
        url: 'http://www.tutorialspoint.com',
        tags: ['mongodb', 'database', 'NoSQL'],
        likes: 100
    })

*The _id field is automatically assigned to the document by MongoDB*

###### Insert multiple documents

    db.myCol.insert([
        {
            title: 'MongoDB Overview', 
            description: 'MongoDB is no sql database',
            by: 'tutorials point',
            url: 'http://www.tutorialspoint.com',
            tags: ['mongodb', 'database', 'NoSQL'],
            likes: 100
        },
        {
            title: 'NoSQL Database', 
            description: "NoSQL database doesn't have tables",
            by: 'tutorials point',
            url: 'http://www.tutorialspoint.com',
            tags: ['mongodb', 'database', 'NoSQL'],
            likes: 20, 
            comments: [	
                {
                    user:'user1',
                    message: 'My first comment',
                    dateCreated: new Date(2013,11,10,2,35),
                    like: 0 
                }
            ]
        }
    ])

#### The _save()_ method
    
    $ db.COLLECTION_NAME.save(document)

*The save() method works similarly to insert() if you don't specify the _id field in the document. Otherwise, it will overwrite the existing document with the same _id*
