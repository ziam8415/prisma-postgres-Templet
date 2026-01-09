import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router();

router.use("/users", UserRoutes);
// router.use("/vendors", VendorRoutes);
// router.use("/categories", CategoryRoutes);
// router.use("/products", ProductRoutes);

export default router;
