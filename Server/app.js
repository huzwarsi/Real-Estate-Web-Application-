const express = require('express');
const PostRoute = require('./Routes/post.route');
const { Authrouter } = require('./Routes/auth.routes');
const cookiesParser = require('cookie-parser')


const app = express()

app.use(express.json())


app.use('/api/posts',PostRoute)
app.use('/api/auth',Authrouter)


app.listen('5000',()=>{
    console.log('Server is running fine!!');
    
})