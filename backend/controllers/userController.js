const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

    //Register Users
const registerUser = asyncHandler( async (req, res) => {
    const {name, email, password} = req.body;


     //Validation
        if ( !name || !email || !password ) {
            res.status(400)
            throw new Error ("Please fill in all required fields")
        }
        if ( password.length < 6 ) {
            res.status(400)
            throw new Error ("Password phai co 6 ki tu")
        }
        //Kiem tra xem email co phai la duy nhat
       const userExists = await User.findOne({email})
    
       if ( userExists ) {
            res.status(400)
            throw new Error ("email da duoc su dung")
       }

       
       //Create new User
       const user = await User.create({
        name,
        email,
        password
       })

       //Generate Token
       const token = generateToken(user._id)

       //Send HTTP-only cookie
       res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true
       })

       if (user) {
        const { _id, name, email, photo, phone, bio } = user
        res.status(201).json({
            _id, name, email, photo, phone, bio, token 
        })
       } else {
        res.status(400)
        throw new Error("Invalid user data")
       } 
});

    //Login user

    const loginUser = asyncHandler(async (req, res) => {
        const {email, password} = res.body;

    //Validated Request
    if(!email || !password) {
        res.status(400);
        throw new Error("Please add email and password")
    }

    //Check if user exists
    const user = await User.findOne({email})

    //Generate Token
     const token = generateToken(user._id)

    //Send HTTP-only cookie
     res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), //1 day
      sameSite: "none",
      secure: true
     })

    if(!user) {
        res.status(400);
        throw new Error("User not found. Please signUp!")
    }

    //User exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if ( user&& passwordIsCorrect ) {
        const { _id, name, email, photo, phone, bio } = user
        res.status(200).json({
            _id, name, email, photo, phone, bio, token
        })
    } else {
        res.status(400);
        throw new Error("Invalid email or password")
    }
    })

    //Logout User

    const logout = asyncHandler(async (req, res) => {
        res.cookie("token", "", {
            path: "/",
            httpOnly: true,
            expires: new Date(0), 
            sameSite: "none",
            secure: true
           });
        return res.status(200).json({ message: "SUCCESSFULLY LOGGED OUT!" })
    })
   
    //Get User Data
    const getUser = asyncHandler (async(req, res) => {
        const user = await User.findById(req.user._id)
        const { _id, name, email, photo, phone, bio } = user
        if (user) {
            res.status(200).json({
                _id, name, email, photo, phone, bio,
            })
        } else {
            res.status(400);
            throw new Error("User not found")
        }
    })

    //Logined Status
    const loginStatus = asyncHandler (async(req, res) => {
        const token = req.cookies.token;
        if (!token) {
            return res.json(false);
        }
            // Verify Token
            const veridied = jwt.verify(token, process.env.JWT_SECRET)
        if (veridied) {
            return res.json(true);
        }
        return res.json(false);
    })

    //Updated User
    const updateUser = asyncHandler (async(req, res) => {
        const user = await User.findById(req.user._id)
        const { name, email, photo, phone, bio } = user
        if (user) {
            user.email = email;
            user.name = req.body.name || name;
            user.photo = req.body.photo || photo;
            user.phone = req.body.phone || phone;
            user.bio = req.body.bio || bio;
            
            const updateduser = await user.save();
            res.status(200).json({
                _id: updateduser._id,
                name: updateduser.name,
                email: updateduser.email,
                photo: updateduser.photo,
                phone: updateduser.phone,
                bio: updateduser.bio,
            })
        } else {
            res.status(404)
            throw new Error("User not found!")
        }
    })

    //Changed Password
    const changePassword = asyncHandler (async(req, res) => {
        const user = await User.findById(req.user._id)
        const { oldPassword, password } = res.body

        if (!user) {
            res.status(400);
            throw new Error("User not found, Please sign up ");
        }

        if (!oldPassword || !password) {
            res.status(400);
            throw new Error("Please add new and old password ");
        }

    })

module.exports = {
    registerUser,
    loginUser,
    logout,
    getUser,
    loginStatus,
    updateUser,
    changePassword
}
