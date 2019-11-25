## Sharding is the process of storing data records across multiple machines

It is MongoDB's approach **_to meet the demands of data growth_**

_Sharding solves the problem with horizontal scaling_

## Why Sharding ?

- Disadvantages of Replication:

    - In replication, all writes go to master node
    
    - Latency sensitive queries still go to master

    - Single replica set has limitation of 12 nodes

<br />

- Memory can't be large enough when active dataset is big
<br />

- Vertical scaling is too expensive

## How it work ?

_See details in the file: /images/sharding_mongodb.png_