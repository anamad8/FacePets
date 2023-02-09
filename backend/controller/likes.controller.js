const db = require("../models");
const LikePost = db.likesPost
const LikeComment = db.likesComment

const createLikePost = async (req, res) => {
  const id = req.params.id;
  const id2 = req.params.id2;
  const modelData = {
    user_id: id,
    post_id: id2,
    status: true,
  };
  const response = await LikePost.create(modelData)
    .then((data) => {
      const res = {
        error: false, data: data, message: "Lik",
      };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};
const deleteLikePost = (req, res) => {
  LikePost.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.json(result);
  });
};

const createLikeComment = async (req, res) => {
    const id = req.params.id;
    const id2 = req.params.id2;
    const modelData = {
      user_id: id,
      comment_id: id2,
      status: true,
    };
    const response = await LikeComment.create(modelData)
      .then((data) => {
        const res = {
          error: false, data: data, message: "Like",
        };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);}

    const deleteLikeComment = (req, res) => {
        LikeComment.destroy({
          where: {
            id: req.params.id,
          },
        }).then((result) => {
          res.json(result);
        });
      };


      module.exports = {
   deleteLikeComment,
   deleteLikePost,
   createLikeComment,
   createLikePost
      };