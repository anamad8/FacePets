const db = require('../models')
const Post = db.post
const User = db.user

const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
require("dotenv").config();
const generateAcessToken = (user) => {
  return jwt.sign(user, process.env.SECRET, { expiresIn: "5m" });
};


const getUser = async (req, res) => {
  const response = await User.findAll()
    .then((data) => {
      const res = { error: false, data: data };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};
const getByidUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findAll({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};
const updateUser = async (req, res) => {
  try {
    let rol=0
    let urlImage;
    if (req.file == undefined) {
      urlImage = null;
    } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage = url + "/uploads/" + req.file.filename;
      rol= 1
    }
    if (urlImage == null) {
      User.update(req.body,
        {
          where: {
            id: req.params.id,
          },
        }
      ).then((result) => {
        res.json(result);
      });
    } else {
      User.update(
        {
            name: req.body.name,
            petName: req.body.petName,
            email: req.body.email,
            image: urlImage,
            breed: req.body.breed,
            description: req.body.description,
            role: rol,
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
  } catch (e) {
    console.log(e);
  }
};
const login = async (req, res) => {
  console.log(req.body);
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      return res.status(401).send({ message: "Error user not found" });
    }

    var passwordIsValid = bcryptjs.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Error user not found" });
    }
    var tokenAcces = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400,
    });
    user.token = tokenAcces;
    res.status(200).send({
      user,
      tokenAcces,
    });
  });
};
const createUser = async (req, res) => {

    let rol = 0;
    let urlImage;
    if (req.file == undefined) {
      urlImage = null;
    } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage = url + "/uploads/" + req.file.filename;
      rol = 1;
    }

    const modelData = {
      name: req.body.name,
      petName: req.body.petName,
      email: req.body.email,
      image: urlImage,
      breed: req.body.breed,
      description: req.body.description,
      password: bcryptjs.hashSync(req.body.password),
      role: rol,
    };
    const acessToken = generateAcessToken(modelData);
    const response = await User.create(modelData)
      .then((data) => {
        const res = {
          error: false,
          acessToken,
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
 
};
const getUserPost = async (req, res) => {
  const id = req.params.id
  const data = await User.findOne({
    include: [
      {
        model: Post,
        as: "post",
      },
    ],
    where: { id: id},
  });

  res.status(200).send(data);
};

module.exports = {
  createUser,
  getUser,
  login,
  updateUser,
  getByidUser,
 getUserPost
};
