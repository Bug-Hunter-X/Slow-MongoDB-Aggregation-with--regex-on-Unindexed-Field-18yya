# MongoDB Aggregation Performance Issue

This repository demonstrates a common performance problem in MongoDB aggregations involving the `$match` operator with a regular expression (`$regex`) on a field without an index. The unindexed field causes a collection scan, impacting query speed drastically.  The solution involves adding a suitable index.

## Bug

The `bug.js` file contains an aggregation pipeline that uses `$match` with `$regex` on an unindexed field. This leads to slow query execution as MongoDB needs to scan the entire collection.

## Solution

The `solution.js` file provides a corrected version of the pipeline, along with the creation of an index on the relevant field.  Indexing greatly accelerates query performance.