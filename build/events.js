"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventService_1 = require("./services/eventService");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    const filters = req.query;
    const filteredEvents = (0, eventService_1.getEvents)().filter((data) => {
        let isValid = true;
        for (let key in filters) {
            isValid = isValid && data[key].toLowerCase().includes(filters[key]);
        }
        return isValid;
    });
    res.send(filteredEvents);
});
router.post('/', (req, res) => {
    let eventNew = req.body;
    (0, eventService_1.getEvents)().push(eventNew);
    res.status(200).send((0, eventService_1.getEvents)());
});
router.put('/edit/:id', (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const indice = (0, eventService_1.getEvents)().findIndex(value => value.name == id);
    if (indice >= 0) {
        (0, eventService_1.getEvents)()[indice] = data;
    }
    res.status(200).send((0, eventService_1.getEvents)());
});
exports.default = router;
