"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_route_1 = __importDefault(require("./src/routes/index.route"));
const connectDatabase_1 = require("./src/configs/connectDatabase");
const PORT = 3000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './views');
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.json());
connectDatabase_1.ConnectDatabase.connect();
(0, index_route_1.default)(app);
app.listen(PORT, () => {
    console.log("App running on port: " + PORT);
});
//# sourceMappingURL=index.js.map