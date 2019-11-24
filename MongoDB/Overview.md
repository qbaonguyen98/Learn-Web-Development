## Concept
    Mongo DB works on concept of collection and document

## Database
    A database is a container of many collections

## Collection
    A collection is a group of many documents, and equivalent to a table in RDBMS
    A collection can have different fields

## Document
    A document is a set of key-value pairs.
    Documents have dynamic schema (means that: documents in the same collection do not need to have the same set of fields, and common fields in a collection's documents may hold different types of data)

## _id
    A 12-bytes hex number which assures the uniqueness of every document
    Format:
        4-bytes:  current timestamp
        3-bytes: machine id
        2-bytes: process id
        3-bytes: incremental value 