const express = require("express");
const signupRouter = express.Router();
const loginRouter = express.Router();
const app = new express();
const port = process.env.PORT || 5000 ;


const nav = [
    {
        link:'./books',name:'Books'
    },
    {
        link:'./authors',name:'Authors'
    }
   ];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const addBookRouter = require('./src/routes/addBookRoutes')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addBookRouter);
app.use('/addauthor',addAuthorRouter);

    app.get('/', function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title : 'Library'
    });
});

loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title : 'Library'
    });
});

app.listen(port,()=>{console.log("Server ready at "+port)});