"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventService_1 = require("./services/eventService");
const router = express_1.default.Router();
router.get('/', (_, res) => {
    res.send((0, eventService_1.getEvents)());
});
router.post('/', (req, res) => {
    const filters = req.query;
    const filteredEvents = (0, eventService_1.getEvents)().filter(event => {
        let isValid = true;
        for (key in filters) {
            console.log(key, event[key], filters[key]);
            isValid = isValid && event[key] == filters[key];
        }
        return isValid;
    });
    res.send(filteredEvents);
});
exports.default = router;
