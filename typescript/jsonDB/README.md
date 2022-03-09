# jsonDB

Simple class to store data in json file

##### USAGE

```
var db = new JsonDB('beautifulDB.json');

db.hello = "World" ;
db.someStrange = {
    hi: "All"
} ;
db.someList = [10, 20, 30];
db.boring = 10 ;

db.flush(); //save to file

db.json(); //get JSON object
```