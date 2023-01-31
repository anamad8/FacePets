const db = require('../models')
const Post = db.post
const User = db.user
const Comment = db.comment
const LikePost = db.likesPost
const LikeComment = db.likesComment


const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const bcrypt= require('bcrypt')
const { likesComment } = require('../models')
require("dotenv").config();

const generateAccessToken = (user) => {
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
const getByEmailUser = async (req, res) => {
  try {
    const { email } = req.params;
    const response = await User.findAll({
      where: { email: email },
    })
      .then(data => {
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
const updateBanner = async(req,res)=>{

  let urlImage1;
  if (req.file == undefined) {
    urlImage = null;
  } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage1 = url + "/uploads/" + req.file.filename;
  }
  User.update({
    imageBanner: urlImage1
  

  },{
      where: {
        id: req.params.id,
      },
  }
  ).then((result) => {
    res.json(result);
  });
}
const updateUser = async (req, res) => {
  try {
    
    let urlImage;
    if (req.file == undefined) {
      urlImage = null;
    } else {
      const url = req.protocol + "://" + req.get("host");
      urlImage = url + "/uploads/" + req.file.filename;

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
            gender: req.body.gender,
            petAge: req.body.petAge,
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

const updateUserByemail = async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
   const Password =await  req.body.password
  let passwordHash = await bcrypt.hash(Password,salt)
      User.update(
        {
          password: passwordHash
          },
        {
          where: {
            email: req.params.email,
          },
        }
      ).then((data) => {
        res.json(data);
      }).catch((e)=>{
        console.log(e)
      });
    
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
    var tokenAccess = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400,
    });
    user.token = tokenAccess;
    res.status(200).send({
      user,
      tokenAccess
    });
  });
};
const createUser = async (req, res) => {
 try{
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
      gender: req.body.gender,
      petAge: req.body.petAge,
      role: rol,
    };
    const accessToken = generateAccessToken(modelData);
    const response = await User.create(modelData)
      .then((data) => {
        const res = {
          error: false,
          token: accessToken,
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
  } catch (e){
    console.log(e);
  }

 
};
const getUserPost = async (req, res) => {
  const id = req.params.id
  const data = await User.findOne({
    include: [
      {
        model: Post,
        as: "post",
        include:[
          {
          model: Comment,
          as: "comment",
          include:[{
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
        }
      ]
      },
     
    ],
    where: { id: id},
  });

  res.status(200).send(data);
};

module.exports = {
  getByEmailUser,
  createUser,
  getUser,
  login,
  updateUser,
  getByidUser,
 getUserPost,
 updateBanner,
 updateUserByemail
};

