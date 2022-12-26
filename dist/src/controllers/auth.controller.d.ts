export declare class AuthController {
    static showFormLogin(req: any, res: any): Promise<void>;
    static showFormRegister(req: any, res: any): Promise<void>;
    static register(req: any, res: any): Promise<void>;
    static login(req: any, res: any): Promise<any>;
    static changePasswordPage(req: any, res: any): void;
    static changePassword(req: any, res: any): Promise<void>;
    static logout(req: any, res: any): Promise<void>;
}
