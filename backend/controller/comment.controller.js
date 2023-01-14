const db = require("../models");
const User = db.user;

const Comment = db.comment;

const getComment = (req, res) => {
  Comment.findAll().then((comment) => {
    res.json(comment);
  });
};
const getCommentByid = (req, res) => {
  Comment.findByPk(req.params.id).then((comment) => {
    res.json(comment);
  });
};
const createComment = async (req, res) => {
  const id1 = req.params.id1;
  const id2 = req.params.id2;

  let urlImage;
  if (req.file == undefined) {
    urlImage = null;
  } else {
    const url = req.protocol + "://" + req.get("host");
    urlImage = url + "/uploads/" + req.file.filename;
  }
  const modelData = {
    user_id: id1,
    post_id: id2,
    image: urlImage,
    description: req.body.description,
  };

  const response = await Comment.create(modelData)
    .then((data) => {
      const res = {
        error: false,
        data: data,
        message: "Comment creado",
      };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};

const editComment = (req, res) => {
  let urlImage;
  if (req.file == undefined) {
    urlImage = null;
  } else {
    const url = req.protocol + "://" + req.get("host");
    urlImage = url + "/uploads/" + req.file.filename;
  }
  if (urlImage == null) {
    Comment.update(req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((result) => {
      res.json(result);
    });
  } else {
    Comment.update(
      {
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
const deleteComment = (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
};

module.exports = {
  createComment,
  getComment,
  editComment,
  getCommentByid,
  deleteComment,
};
