const express = require('express');
const verifyToken = require('../Middleware/verifyToken');
const { getPosts, getPost, addPost, updatePost, deletePost } = require('../Controller/postController');

const router = express.Router()

router.get('/',getPosts);
router.get('/:id',getPost);
router.post('/',verifyToken,addPost);
router.put('/:id',verifyToken,updatePost);
router.delete('/:id',verifyToken ,deletePost);





module.exports = router