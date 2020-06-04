const jwt = require("jsonwebtoken");
const User = require("../db").import ("../models/user");

const validateSession = (req, res, next) => {
    if (req.method == 'OPTIONS') {
        next();
    } else {
        const token = req.headers.authorization;

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // pass in token we receive from headers
            if (!err && decoded) { // if there is no error and token is decoded
                User.findOne(
                    // find users id who matches token
                        {
                        where: {
                            id: decoded.id
                        }
                    },
                    console.log(decoded)
                ).then((user) => {
                    if (!user) 
                        throw "err";
                     // if user isn't found, throw error
                    req.user = user;

                    next();
                }).catch((err) => next(err));
            } else {
                req.errors = err;
                return res.status(500).send("Not authorized");
            }
        })
    }
};

module.exports = validateSession;
