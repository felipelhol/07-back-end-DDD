"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var Appointment_1 = __importDefault(require("../models/Appointment"));
var AppointmentsRepository = /** @class */ (function () {
    function AppointmentsRepository() {
        this.appointments = [];
    }
    AppointmentsRepository.prototype.all = function () {
        return this.appointments;
    };
    AppointmentsRepository.prototype.findByDate = function (date) {
        // caso tenha datas iguais
        var findAppointment = this.appointments.find(function (appointment) {
            return date_fns_1.isEqual(date, appointment.date);
        });
        return findAppointment || null;
    };
    AppointmentsRepository.prototype.create = function (_a) {
        var provider = _a.provider, date = _a.date;
        var appointment = new Appointment_1.default({ provider: provider, date: date });
        // instanciar um objeto é a acao de criar um exemplar de uma classe pra trabalhar com ele
        this.appointments.push(appointment);
        return appointment;
    };
    return AppointmentsRepository;
}());
exports.default = AppointmentsRepository;
