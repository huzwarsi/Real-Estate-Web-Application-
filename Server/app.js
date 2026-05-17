const express = require('express');
const PostRoute = require('./Routes/post.route');
const { Authrouter } = require('./Routes/auth.routes');
const cookiesParser = require('cookie-parser')
const testRoutes = require('./Routes/test.routes');
const { UserRouter } = require('./Routes/user.route');
const chatRouter = require('./Routes/chatRoutes');
const messagesRouter = require('./Routes/messagesRoutes');



const app = express()

app.use(express.json())
app.use(cookiesParser())



app.use('/api/posts',PostRoute)
app.use('/api/auth',Authrouter)
app.use('/api/test',testRoutes)
app.use('/api/users',UserRouter)
// app.use('/api/chats',chatRouter)
// app.use('/api/messages',messagesRouter)






app.listen('5000',()=>{
    console.log('Server is running fine!!');
    
})