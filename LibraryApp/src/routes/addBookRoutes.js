const express = require("express");
const addBookRouter = express.Router();

function router(nav){
    addBookRouter.get('/',function(req,res){
        res.render("addbook",
        {
            nav,
            title : 'Library'
        });
    });
    return addBookRouter;
}

module.exports = router ;