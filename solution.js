```javascript
db.collection.createIndex( { fieldName: "text" } );

const pipeline = [
  {
    $match: {
      "fieldName": {
        $regex: "someRegex",
        $options: "i"
      }
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
];
db.collection.aggregate(pipeline);
```