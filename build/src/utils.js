"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseEntry = void 0;
const types_1 = require("./types");
const isString = (text) => {
    return typeof text === "string" || text instanceof String;
};
const parseString = (value) => {
    if (!value || !isString(value)) {
        throw new Error(`Incorrect or missing string`);
    }
    return value;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (date) => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date: " + date);
    }
    return date;
};
const isGender = (param) => {
    return Object.values(types_1.Gender)
        .map((v) => v.toString())
        .includes(param);
};
const parseGender = (gender) => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error("Incorrect input for gender: " + gender);
    }
    return gender;
};
const parseEntry = (param) => {
    return param.map((entry) => entry);
};
exports.parseEntry = parseEntry;
const toNewPatient = (object) => {
    if (!object || typeof object !== "object") {
        throw new Error("Inncorrect or missing data");
    }
    if ("name" in object &&
        "dateOfBirth" in object &&
        "ssn" in object &&
        "gender" in object &&
        "occupation" in object &&
        "entries" in object) {
        const newPatient = {
            name: parseString(object.name),
            dateOfBirth: parseDate(object.dateOfBirth),
            ssn: parseString(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
            entries: object.entries,
        };
        return newPatient;
    }
    throw new Error("Incorrect data: a field missing");
};
exports.default = toNewPatient;
