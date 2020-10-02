"use strict";

import { setupResponseCallback } from "./../../utils/callback";
import * as business from "../../controllers/users";

export const getAllBusiness = (_req: any, res: any) => {
  console.log("getAllBusiness 1");
  business.getAllBusiness(setupResponseCallback(res));
};
