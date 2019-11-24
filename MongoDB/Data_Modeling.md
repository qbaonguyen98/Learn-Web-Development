## Some considerations while designing Schema in MongoDB
    - If you separate objects into several documents, make sure there should NOT be need of JOINS

    - Optimize your schema for most frequent use cases

### Example

#### Requirement
    - Every post has the unique title, description and url
    - Every post can have one or more tags
    - Every post has the name of its publisher and total number of likes
    - Every post has comments given by users along with their name, message, data-time and likes
    - On each post, there can be zero or more comments

#### Design in RDBMS Schema: need at least 3 tables
    Table 1: POST
        - post_id
        - title
        - description
        - url
        - likes
        - publisher
    
    Table 2: COMMENTS
        - comment_id
        - post_id
        - by_user
        - message
        - data_time
        - likes
    
    Table 3: TAG_LIST
        - tag_id
        - post_id
        - tag
    
_Therefore, when querying data, we have to join 3 tables_

#### Design in MongoDB: just a collection: POST
    {
        _id: POST_ID
        title: TITLE_OF_POST, 
        description: POST_DESCRIPTION,
        by: POST_BY,
        url: URL_OF_POST,
        tags: [TAG1, TAG2, TAG3],
        likes: TOTAL_LIKES, 
        comments: [	
            {
                user:'COMMENT_BY',
                message: TEXT,
                dateCreated: DATE_TIME,
                like: LIKES 
            },
            {
                user:'COMMENT_BY',
                message: TEXT,
                dateCreated: DATE_TIME,
                like: LIKES
            }
        ]
    }