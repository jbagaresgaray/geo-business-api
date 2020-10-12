"use strict";

import { setupResponseCallback } from "./../../utils/callback";
import * as business from "../../controllers/users";

export const getAllBusiness = (req: any, res: any) => {
  console.log("getAllBusiness 1");
  business.getAllBusiness(req.query, setupResponseCallback(res));
};
