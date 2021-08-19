const mongoose = require('mongoose');
const mongourl = "mongodb://localhost/test1"
mongoose.connect(mongourl, {useNewUrlParser: true, useFindAndModify: true}).then( ()=>{
    console.log("connected")
} )

mongoose.connection.on("error", function(err){
    console.log(err)
})