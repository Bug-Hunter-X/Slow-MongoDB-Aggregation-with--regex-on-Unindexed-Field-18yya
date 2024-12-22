```javascript
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

//Error will occur here if fieldName is not indexed
db.collection.aggregate(pipeline); 
```