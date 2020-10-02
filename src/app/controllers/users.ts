"use strict";

import * as business from "../services/users";

export const getAllBusiness = (next: any) => {
  console.log("getAllBusiness 2");
  business.getAllBusiness().then(
    response => {
      return next(null, {
        msg: "",
        result: response,
        success: true
      });
    },
    err => {
      return next(
        {
          msg: err.msg,
          result: err,
          success: false
        },
        null
      );
    }
  );
};
