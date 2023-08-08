"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvents = void 0;
const mockEvents_json_1 = __importDefault(require("./mockEvents.json"));
const events = mockEvents_json_1.default.events;
const getEvents = () => events;
exports.getEvents = getEvents;
