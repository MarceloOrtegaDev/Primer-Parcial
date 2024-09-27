// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const orderValidation = [
    body("coffee").isString().withMessage("Ingrese strings porfavor")
        .trim()
];