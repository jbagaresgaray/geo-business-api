import businessStores from "../utils/business_data";
import { IBusinessStore } from "../utils/types";

export const getAllBusiness = (): Promise<IBusinessStore[]> => {
  console.log("getAllBusiness 3");
  return new Promise(resolve => {
    resolve(businessStores);
  });
};
