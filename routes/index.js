module.exports = {
    getHomePage: (req, res) => {

        let query = 'SELECT * FROM students';
        db.query(query, (err, result) => {
            console.log(" data ", result);
            res.render("index.ejs", { data: result });

        });


    }
};