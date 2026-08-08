import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        console.log("COOKIES:", req.cookies);

        const { token } = req.cookies;

        if (!token) {
            console.log("TOKEN NOT FOUND");

            return res.status(400).json({
                message: "user does not have a token"
            });
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("VERIFIED TOKEN:", verifyToken);

        if (!verifyToken) {
            return res.status(400).json({
                message: "user does not have a valid token"
            });
        }

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        console.log("AUTH MIDDLEWARE ERROR:", error);

        return res.status(500).json({
            message: `isAuth error ${error.message}`
        });
    }
};

export default isAuth;