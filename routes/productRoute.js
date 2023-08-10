import express from "express";
import {
  brainTreePaymentController,
  braintreeTreeController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidabele from "express-formidable";

const router = express.Router();

//routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidabele(),
  createProductController
);

//get product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidabele(),
  updateProductController
);

//filter product
router.post("/product-filters", productFilterController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise
router.get("/product-category/:slug", productCategoryController);

//payments route
router.get("/braintree/token", braintreeTreeController);

//payment
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
