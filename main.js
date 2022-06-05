var app = require("express")();
app.set('view engine','ejs');
app.use( require("express").static( "public" ) );

var pg = require("pg");
var pgClient = new pg.Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Margatsni420024#",
    database:"hospital_management_system"
});
pgClient.connect();

app.get('/SD/:id', function(req, res, next) { 

    if(req.params.id ==1){
        my_query="select * from EMPLOYEE"
    }else if(req.params.id==2){
        my_query="select * from doctor"
    }else if(req.params.id==3){
        my_query="select * from PATIENT"
    }else{
        my_query="NA"
    }


    pgClient.query(my_query, (error, results) => {
        if (error) {
            // console.log("error:"+error.message)
            res.render("Table",{data:error.message,Flag:true})
        }
        // console.log(results)
        else{
            res.render("Table",{data:results,Flag:false})
        }
    })          
});

app.get('/Table', function(req, res, next) { 
    // console.log(req.query.my_query)
    pgClient.query(req.query.my_query, (error, results) => {
        if (error) {
            console.log("error:"+error.message)
            res.render("Table",{data:error.message,Flag:true})
        }
        // console.log(results)
        else{
            res.render("Table",{data:results,Flag:false})
        }
    })          
});

app.get('/',(req,res)=>{
    res.render("Home")
})

app.listen(3000,()=>{
    console.log("The Server is up and running @ http://localhost:3000");
})