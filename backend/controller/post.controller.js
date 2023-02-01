const db = require('../models')
const Post = db.post
const User= db.user
const Comment = db.comment
const LikePost = db.likesPost
const LikeComment = db.likesComment


const getPosts = (req, res) => {
  Post.findAll({
    include:[{
      model: User,
      as:"user",
    },{
      model: Comment,
      as: "comment",
      include:[
        {
          model: User,
          as:"user"
        },
        {
          model: LikeComment,
          as: "likesComment"
        }
      ]
    },
    {
      model: LikePost,
      as: "likesPost"
    },
  ],
  order: [
    ['id', 'DESC']
  ],
  }).then((posts) => {
    res.json(posts);
  });
};

const getPostByid = async(req, res) => {
    const id = req.params.id
    const data = await Post.findOne({
        include: [
          {
            model: Comment,
            as: "comment",
          },
        ],
        where: { id: id},
      });
      res.status(200).send(data);
};
const createPost = async (req, res) => {
  
    const id = req.params.id;
    let urlImage;
    if (req.file == undefined) {
      urlImage = null;
    } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage = url + "/uploads/" + req.file.filename;
    }
    const modelData = {
      user_id: id,
      title: req.body.title,
      image: urlImage,
      description: req.body.description,
    };

    const response = await Post.create(modelData)
      .then((data) => {
        const res = {
          error: false,
          data: data,
          message: "Usuario creado",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
    }


const editPost = (req, res) => {
    let urlImage;
  if (req.file == undefined) {
    urlImage = null;
  } else {
    const url = req.protocol + "://" + req.get("host");
    urlImage = url + "/uploads/" + req.file.filename;
  }
  if (urlImage == null) {
    Post.update({
        title: req.body.title,
        description: req.body.description,
    },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((result) => {
      res.json(result);
    });
  } else {
    Post.update(
      {
        title: req.body.title,
        description: req.body.description,
        image: urlImage,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((result) => {
      res.json(result);
    });
  }
};
const deletePost = (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
};

module.exports = { createPost, getPosts, editPost, getPostByid, deletePost };
