'use strict';

const db = require("../config/db")

class Question{
 static CreateTable() {
  return new Promise(function(resolve){
    resolve("This Does Nothing!")
      const sql = 'CREATE TABLE questions (id INTEGER PRIMARY KEY)'
      db.run(sql,function(){
        resolve("questions table created")
      })
  })
}

}
module.exports = Question;
