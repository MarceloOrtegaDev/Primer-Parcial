import { Router } from "express";
import { orderValidation } from "../validations/orders.validations.js";
import { createOrderCtrl, getOrdersCtrl } from "../controllers/order.controller.js";
import { getOrderById, createOrder, deleteOrderById, getOrders } from "../models/order.model.js";
import { validateJwt } from "../middlewares/validateJwt.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/orders", validateJwt, getOrdersCtrl, getOrders);
ordersRouter.get("/orders/:id", validateJwt, getOrdersCtrl, getOrderById)
ordersRouter.delete("/orders/:id", validateJwt, deleteOrderById)
// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/orders", validateJwt, orderValidation, createOrderCtrl, createOrder)


export { ordersRouter };
