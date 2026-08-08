import genToken from "../config/token.js"
import User from "../models/user.model.js"


export const googleAuth = async (req,res) => {
    try {
        const {name , email} = req.body
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name , 
                email
            })
        }
        let token = await genToken(user._id)

        // Keep setting the cookie (works for same-site / browsers that allow it)
        res.cookie("token" , token , {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge:7 * 24 * 60 * 60 * 1000
        })

        // Also send the token in the response body so the client can store it
        // (localStorage) and send it back via an Authorization header.
        // This avoids all cross-site cookie issues (Safari ITP, third-party
        // cookie blocking, etc).
        const userObj = user.toObject()
        userObj.token = token

        return res.status(200).json(userObj)

    } catch (error) {
        return res.status(500).json({message:`Google auth error ${error}`})
    }
    
}

export const logOut = async (req,res) => {
    try {
        res.clearCookie("token", {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        })
        return res.status(200).json({message:"LogOut Successfully"})
    } catch (error) {
         return res.status(500).json({message:`Logout error ${error}`})
    }
    
}