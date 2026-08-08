import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        // 1. Try Authorization header first (Bearer <token>) — this is the
        //    reliable path since it doesn't depend on cross-site cookies.
        let token
        const authHeader = req.headers.authorization

        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1]
        }

        // 2. Fall back to the cookie if no header was sent (keeps things
        //    working for same-site setups / older clients).
        if (!token) {
            token = req.cookies?.token
        }

        if(!token){
            return res.status(400).json({message:"user does not have a token"})
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
        
        if(!verifyToken){
            return res.status(400).json({message:"user does not have a valid token"})
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        return res.status(500).json({message:`isAuth error ${error}`})
    }
    
}

export default isAuth