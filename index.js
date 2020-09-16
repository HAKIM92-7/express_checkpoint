const express = require('express')
const app= express()
const pug = require('pug');


app.set('view engine', pug);
app.set('views','./views');





app.use(date=(req,res,next)=>{

let requestAtTime=new Date()
let day =requestAtTime.getDay()
let hour=requestAtTime.getHours()

console.log(requestAtTime)


if(day>=1 && day<=5 && hour>=9 && hour<=17)

{next()}

else {

    next('Website closed temporarily , you can return next Monday at 9 AM ');
}

})

app.get('/home', (req,res)=>{

res.render('index.pug', {name:'Hejer'})


})

app.get('/services', (req,res)=>{

    res.render('services.pug')
    
    
    })



app.get('/contact', (req,res)=>{

        res.render('contact.pug',{email:"barouni.hakim@gmail.com", number:"+21620220792"})
        
        
        })











app.listen(3000 , (err)=>{

    if(err) console.log("server not running")
    
    else console.log ("sever running at port 3000")
    
    
    
    
    })





