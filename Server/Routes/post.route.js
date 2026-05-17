const express = require('express');
const verifyToken = require('../Middleware/verifyToken');
const { getPosts, getPost, addPost, updatePost, deletePost } = require('../Controller/postController');
const { savePost } = require('../Controller/user.Controllers');

const router = express.Router()

router.get('/',getPosts);
router.get('/:id',getPost);
router.post('/',verifyToken,addPost);
router.put('/:id',verifyToken,updatePost);
router.delete('/:id',verifyToken ,deletePost)
router.post('/save',verifyToken,savePost)






module.exports = router