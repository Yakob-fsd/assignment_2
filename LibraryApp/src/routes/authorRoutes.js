const express = require("express");
const authorsRouter = express.Router();

function router(nav){
var authors = [
    {
        name : 'William Shakespeare',
        work : 'Romeo and Juliet',
        category : 'Dramatist',
        img : "shakespeare.jpeg"
    },
    {
        name : 'Leo Tolstoy',
        work : 'War and Peace',
        category : 'Novalist',
        img : "tolstoy.jpeg"
    },
    {
        name : 'ONV Kurup',
        work : 'Shyamam',
        category : 'Poet',
        img : "onv.jpeg"
    }
];

authorsRouter.get('/',function(req,res){
    res.render("authors",{
        nav,
        title:'Library',
        authors
    });
});

authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render('author',{
        nav,
        title : 'Library',
        author : authors[id]

    });
});
return authorsRouter;
}

module.exports = router;