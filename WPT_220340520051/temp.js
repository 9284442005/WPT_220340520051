const express = require('express');
const app = express();
const cors = require('mysql2');
let dbparameters={
    host : 'loacalhost',
    user : 'kunal',
    password :'cdac',
    database : 'kunal',
    port : 3306
};
const conn = mysql.createConnection(dbparameters);

app.use(express.static('abc'));

app.get("/getallbooks",(req,resp) =>{
    conn.query('select * from book',[],
    (err,rows)=>{
        if(err){
            console.log("error has occured let us see");
        }
        else{
            if(rows.lengrth>0)
            console.log("sufr");
        }
        resp.send(rows);
    
    }
    );
});

app.get("/getbooks",(req,resp)=>{
    let input = req.query.bookid;
    let output ={
        booknofoundstatus : false,
        bookdetails : { bookid }
    }
})