export class ErrorController{
    static getErrorServer(req, res){
        return res.render('error/500');
    }

    static getErrorClient(req, res){
        return res.render('error/404');
    }
}