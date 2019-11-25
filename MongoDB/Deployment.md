## To monitor your deployment, MongoDB provides some commands:

#### _mongstat_

    $ mongostat

_This checks the status of all running mongod instances and return **_counters_** of database operations_

- The **_counters_** include _inserts_, _queries_, _updates_, _deletes_, and _cursors_

_This also shows lock percentage - indicate low on memory or some performance issues_

#### _mongotop_

_This command tracks and reports the read and write activity of MongoDB instance on a collection basis_

- By default, **_mongotop_** returns information in each second _(you can change it)_

- You should check that this read and write activity matches your application intention

<br />

_This will return values every 30 seconds_

    $ mongotop 30