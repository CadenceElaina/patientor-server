"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const uuid_1 = require("uuid");
const utils_1 = __importDefault(require("../utils"));
const patients = patients_1.default.map((item) => (Object.assign(Object.assign({}, (0, utils_1.default)(item)), { id: item.id })));
const getPatients = () => {
    return patients;
};
const getNonSenitivePatientsData = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const findById = (id) => {
    return patients.find((p) => p.id === id);
};
const addPatient = (patient) => {
    const newpatient = Object.assign({ id: (0, uuid_1.v1)() }, patient);
    patients_1.default.push(newpatient);
    return newpatient;
};
exports.default = {
    getPatients,
    getNonSenitivePatientsData,
    addPatient,
    findById,
};
