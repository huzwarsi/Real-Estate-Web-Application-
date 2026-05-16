const prisma = require("../lib/prisma");

const getPosts = async (req,res)=>{

    const query = req.query 
    try{

        const posts = await prisma.post.findMany({
            where : {
                city : query.city || undefined,
                type : query.type || undefined,
                property : query.property || undefined,
                property : query.property || undefined,
                bedrooms : parseInt(query.bedrooms) || undefined,
                price : {
                    gte : parseInt(query.minPrice) || 0,
                    lte : parseInt(query.maxPrice) || 1000000
                }
                

            }
        })
        res.json(posts)
    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to get Posts"})

        
    }
}


const getPost = async (req,res)=>{
    try{
        const id = req.params.id
        const post = await prisma.post.findUnique({
            where : {id},
            include : {
                postDetails : true,
                user : {
                    select : {
                        userName : true,
                        avatar : true
                    }
                }
                

            }
        })
        res.json(post)
    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to get Post"})
    }
}




const addPost = async (req, res) => {
  const body = req.body;
  const tokenUserId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...body.postData,
        userId: tokenUserId,

        postDetails: {
          create: body.postDetails,
        },
      },
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to create post",
    });
  }
};


const updatePost = async (req,res)=>{
    try{        
        const id = req.params.id
        const body = req.body
        const tokenUserId = req.userId
        const Post = await prisma.post.findUnique({
            where : {id}
        })
        if(!Post){
            return res.json({"message" : "Post not found"})
        }
        if(Post.userId !== tokenUserId){
            return res.json({"message" : "You are not authorized to update this post"})
        }

      await prisma.post.update({
            where : {id},
            data : {...body}
        })
        res.json({"message" : "Post updated successfully"})
    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to update Post"})
    }   
}

const deletePost = async (req,res)=>{
    try{        
        const id = req.params.id

        const tokenUserId = req.userId
        const Post = await prisma.post.findUnique({
            where : {id}
        })

        if(Post.userId !== tokenUserId){
            return res.json({"message" : "You are not authorized to delete this post"})
        }
     await prisma.post.delete({
            where : {id}
        })
        res.json({"message" : "Post deleted successfully"})
    }catch(error){        
        console.log(error);
        res.json({"message" : "Failed to delete Post"})
    }   }

module.exports = {getPosts, getPost, addPost, updatePost, deletePost}