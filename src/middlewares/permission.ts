export const checkPermission = (req, res, next) =>{
    if(req.decoded.role === "admin"){
        return next();
    } else {
        res.redirect('/user/home');
    }
}