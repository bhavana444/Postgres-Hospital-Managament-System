var pg = require("pg");
var pgClient = new pg.Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"postgres",
    database:"covid_vaccine"
});
pgClient.connect();
pgClient.query('select * from dose', (error, results) => {
    if (error) {
        console.log(error.message)
    }
        console.log(results.rows);
})
