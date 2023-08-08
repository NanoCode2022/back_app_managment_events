"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = __importDefault(require("./events"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.send("server started");
});
app.use("/api/events", events_1.default);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("server Started " + PORT);
});
