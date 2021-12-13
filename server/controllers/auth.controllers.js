const User = require('../model/user.modal');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');


/***************Start Mail Configuration***************/
email =  process.env.MAILER_EMAIL  ;
pass = process.env.MAILER_PASS   ;
nodemailer = require('nodemailer')

//MAIL CONFIG


var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'troudishedy6@gmail.com', //Remove '@gmail.com' from your username.
        pass: 'programingdeltagramma'
    }
});

//Require lib google authentification
const {OAuth2Client} = require('google-auth-library')
const authClient = new OAuth2Client('408200270080-hhuj0ht7lsppv0nnlq4mf4ff9720l9uj.apps.googleusercontent.com');


/**************End Mail Configuration*****************/
/******************Start Register method****************/
exports.registerController = function(req,res,next) {
    /**********start fill user object with data from form**********/

    const {
        firstName, lastName, email, password,
        confirmPassword, universityName
    } = req.body;

    User.findOne({email}).exec((err, user) => {
        if (user) {
            return res.status(400).json({error: "User with this email already exists."})
        }

        let newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            universityName: universityName,
            picture: "not mentiond yet"
        });

        newUser.save((err, success) => {
            if (err) {
                console.log("Error in sign up : ", err);
                return res.status(400).json({error: err});

            }

            const token = jwt.sign(
                {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword,
                    universityName,

                },
                process.env.JWT_ACCOUNT_ACTIVATION,
                {
                    expiresIn: "20m",
                }
            );
            const emailData = {
                from: process.env.EMAIL_FROM,
                to: email,
                subject: 'Account activation link',
                html: `
                          <h1>Please use the following to activate your account</h1>
                          <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                          <hr />
                          <p>This email may containe sensetive information</p>
                          <p>${process.env.CLIENT_URL}</p>
                      `
              };


            smtpTransport.sendMail(emailData, function (err) {
                    if (!err) {
                        return res.json({    message: `Nice Email has been sent to ${email}`});
                    } else {
                        console.log("RECPIENT==" + JSON.stringify(err))
                        return next(err);
                    }
                }
            )

        });
    });
};


/******************End Register method**************** */

/******************Start Sign UP method****************/
exports.signInController =  function(req,res,next) {
    let {email,password } = req.body;
    // check if user exist
    User.findOne({
        email,
    }).exec((err, user) => {
        if (err || !user) {
            return res.json({
                message: "you are new  please sign up",
            });
        }
        //Check passwowrd
        bcrypt.compare(password,user.password).then(isMatch=> {
            if(isMatch) {


                const {id , email ,universityName,firstName,lastName} = user;
                const payload =  {id , email ,universityName,firstName,lastName};

                //SignToken
                jwt.sign(payload,req.app.get("secretKey"),{expiresIn:'7d'},
                    (err,token)  => {
                        return res.json(
                            {
                                success:true,
                                user:payload,
                                token:token,
                            }
                        )
                    }
                );

            } else {
                return res.json({message: "password invalid"});
            }
        })
    })

}
/******************End Sign UP method**************** */

/******************Start Active Email method**************** */
exports.activateController = function (req,res,next)  {

    const {token} = req.body;
    if(token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION,
                (err,decoded)  =>{
                    if(err){
                        console.log("Activation error...");
                        return res.status(401).json({
                            errors: 'Expired link, please sign up again.'
                        });
                    }
                    else {
                        const {firstName, lastName, email, password} = jwt.decode(token);
                        console.log(`your email is ${email}`);
                        const user = new User({
                            firstName,
                            lastName,
                            email,
                            password
                        });

                        user.save((err,user) => {
                            if(err) {
                                console.log("Save  error...");
                                return res.status(401).json({
                                    errors: 'something went wrong...'
                                });
                            }
                            else {
                                return res.json({
                                    success: true,
                                    message: user,
                                    message: "Signup success"
                                });
                            }
                        });
                    }
                });
    }
    else {
        return res.json({
            message: 'error happening please try again'
        });
    }
};
/******************End Active Email method**************** */

/******************Start googleAuthentification method**************** */
const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
/******************Start googleAuthentification method**************** */
exports.googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then(response => {
      // console.log('GOOGLE LOGIN RESPONSE',response)
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: '7d'
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role }
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with google'
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
              );
              const { _id, email, name, role } = data;
              return res.json({
                token,
                user: { _id, email, name, role }
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
};
/******************End googleAuthentification   method**************** */

/******************Start facebookAuthentification method**************** */
exports.facebookController = (req, res) => {
  console.log('FACEBOOK LOGIN REQ BODY', req.body);
  const { userID, accessToken } = req.body;

  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  return (
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
        const { email, name } = response;
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: '7d'
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role }
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with facebook'
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
              );
              const { _id, email, name, role } = data;
              return res.json({
                token,
                user: { _id, email, name, role }
              });
            });
          }
        });
      })
      .catch(error => {
        res.json({
          error: 'Facebook login failed. Try later'
        });
      })
  );
};
/******************End facebookAuthentification method**************** */









