const express = require("express");
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom.jpeg"
        },
    
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantacy',
            img: "harry potter.jpeg"
        },
    
        {
            title: 'Pathummede Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: "basheer.jpeg"
        }
    ];
    
    booksRouter.get('/', function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('book',{
            nav,
            title:'Library', 
            book : books[id]
        });
    });
    return booksRouter;
}




module.exports = router;