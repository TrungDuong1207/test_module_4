import jwt from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    try {
        let tokenUser = req.cookies.token;
        if (tokenUser) {
            jwt.verify(tokenUser, "123456789", (err, decoded) => {
                if (err) {
                    console.log(err); 
                    return res.render("login");
                } else {
                    // console.log(decoded);
                    req.decoded = decoded;
                    return next();
                }
            });
        } else {

            return res.redirect("/auth/login");

        }

    } catch (err) {
        console.log(err);
        return res.redirect("/auth/login");

    }
}
