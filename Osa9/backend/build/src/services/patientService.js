"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
const generateID = () => {
    const id = Math.floor(Math.random() * 99999999);
    return id.toString();
};
const getEntries = () => {
    return patients_1.default;
};
const getNoSSN = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
};
const getFull = (byId) => {
    let patient = patients_1.default.find(p => p.id === byId);
    if (patient) {
        patient.entries.forEach(e => {
            switch (e.type) {
                case 'Hospital':
                    break;
                case 'HealthCheck':
                    break;
                case 'OccupationalHealthcare':
                    break;
                default:
                    patient = undefined;
            }
        });
    }
    return patient;
};
const getID = (byId) => {
    let patient = patients_1.default.find(p => p.id === byId);
    if (patient) {
        patient.entries.forEach(e => {
            switch (e.type) {
                case 'Hospital':
                    break;
                case 'HealthCheck':
                    break;
                case 'OccupationalHealthcare':
                    break;
                default:
                    patient = undefined;
            }
        });
    }
    return patient;
};
const addPatient = (entry) => {
    const newPatient = Object.assign({ id: generateID() }, entry);
    patients_1.default.push(newPatient);
    return newPatient;
};
const addEntry = (id, entry) => {
    const patient = patients_1.default.find(p => p.id === id);
    if (patient) {
        const newPatient = Object.assign(Object.assign({}, patient), { entries: patient.entries.concat(entry) });
        return newPatient;
    }
    return undefined;
};
exports.default = {
    getEntries,
    getFull,
    getNoSSN,
    getID,
    addEntry,
    addPatient
};
