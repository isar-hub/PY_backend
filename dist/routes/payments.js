import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { allCoupons, applyDiscount, createPaymentIntent, deleteCoupon, getCoupon, newCoupon, updateCoupon, } from "../controllers/payment.js";
const app = express.Router();
// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);
// // route - /api/v1/payment/verification
// app.post("/verification", paymentVerificationAndOrderCreation);
// route - /api/v1/payment/discount
app.get("/discount", applyDiscount);
// route - /api/v1/payment/coupon/new
app.post("/coupon/new", adminOnly, newCoupon);
// route - /api/v1/payment/coupon/all
app.get("/coupon/all", adminOnly, allCoupons);
// route - /api/v1/payment/coupon/:id
app.delete("/coupon/:id", adminOnly, deleteCoupon);
// route - /api/v1/payment/coupon/:id
app
    .route("/coupon/:id")
    .get(adminOnly, getCoupon)
    .put(adminOnly, updateCoupon)
    .delete(adminOnly, deleteCoupon);
export default app;
